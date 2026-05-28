//SCRIPT

// ══════════════════════════════════════════════════════
// ── FIREBASE — ANALYTICS DE CLIQUES NOS PRODUTOS ──
// ══════════════════════════════════════════════════════
// INSTRUÇÕES: Substitua o objeto abaixo com o seu firebaseConfig
// obtido no console do Firebase (console.firebase.google.com)
// Projeto → Configurações → Seus apps → Web → firebaseConfig
// ──────────────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "COLE_AQUI.firebaseapp.com",
  databaseURL: "https://COLE_AQUI-default-rtdb.firebaseio.com",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI.appspot.com",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};
// ══════════════════════════════════════════════════════

// Controla se o Firebase está ativo (false até ser configurado)
let _firebaseReady = false;
let _dbRef = null;
let _clickCounts = {}; // cache local dos contadores

function _initFirebase() {
  // Verifica se o config foi preenchido
  if (FIREBASE_CONFIG.apiKey === 'COLE_AQUI_SUA_API_KEY') {
    console.info('[MenteMX] Firebase não configurado — usando localStorage como fallback.');
    _loadFromLocalStorage();
    return;
  }

  // Carrega o SDK do Firebase dinamicamente
  var script1 = document.createElement('script');
  script1.src = 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js';
  script1.onload = function() {
    var script2 = document.createElement('script');
    script2.src = 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js';
    script2.onload = function() {
      try {
        firebase.initializeApp(FIREBASE_CONFIG);
        _dbRef = firebase.database().ref('produto_cliques');
        _firebaseReady = true;
        console.info('[MenteMX] Firebase conectado.');
        _loadClicksFromFirebase();
      } catch(e) {
        console.warn('[MenteMX] Erro ao iniciar Firebase:', e);
        _loadFromLocalStorage();
      }
    };
    document.head.appendChild(script2);
  };
  document.head.appendChild(script1);
}

// Carrega contadores do Firebase e reordena os cards
function _loadClicksFromFirebase() {
  _dbRef.once('value', function(snapshot) {
    _clickCounts = snapshot.val() || {};
    _reorderProductCards();
  });
}

// Fallback: carrega do localStorage
function _loadFromLocalStorage() {
  try {
    _clickCounts = JSON.parse(localStorage.getItem('mentemx_clicks') || '{}');
  } catch(e) {
    _clickCounts = {};
  }
  _reorderProductCards();
}

// Registra um clique no produto
function _trackClick(productId) {
  _clickCounts[productId] = (_clickCounts[productId] || 0) + 1;

  if (_firebaseReady && _dbRef) {
    // Incremento atômico no Firebase
    _dbRef.child(productId).transaction(function(current) {
      return (current || 0) + 1;
    });
  } else {
    // Fallback localStorage
    try {
      localStorage.setItem('mentemx_clicks', JSON.stringify(_clickCounts));
    } catch(e) {}
  }
}

// Reordena os cards do carrossel por número de cliques (mais clicados primeiro)
function _reorderProductCards() {
  var grid = document.getElementById('shopGrid');
  if (!grid) return;

  var cards = Array.from(grid.querySelectorAll('.product-card'));
  if (!cards.length) return;

  cards.sort(function(a, b) {
    var idA = a.getAttribute('data-product-id') || '';
    var idB = b.getAttribute('data-product-id') || '';
    var clicksA = _clickCounts[idA] || 0;
    var clicksB = _clickCounts[idB] || 0;
    return clicksB - clicksA; // decrescente
  });

  // Reinsere os cards na nova ordem
  cards.forEach(function(card) { grid.appendChild(card); });

  // Atualiza os dots do carrossel
  var dotsWrap = document.getElementById('shopDots');
  if (dotsWrap) {
    dotsWrap.innerHTML = '';
    cards.forEach(function(_, i) {
      var d = document.createElement('button');
      d.className = 'shop-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', 'Produto ' + (i + 1));
      d.onclick = function() { scrollShop && scrollToCardByIndex(i); };
      dotsWrap.appendChild(d);
    });
  }
}

// Inicializa o Firebase quando a página carrega
window.addEventListener('DOMContentLoaded', function() {
  _initFirebase();
  _initScrollReveal();
  _initCountUp();
});

// ── SCROLL REVEAL — Issue #12 ──
function _initScrollReveal() {
  // Seleciona elementos que já têm a classe .reveal (adicionados no HTML)
  // E adiciona .reveal em elementos dinâmicos (cards de campeões, serviços, etc.)
  var selectors = [
    '.champ-card',
    '.serv-card',
    '.sport-card',
    '.test-card',
    '.faq-item',
    '.about-grid',
    '.app-inner',
    '.contact-grid'
  ];

  selectors.forEach(function(sel) {
    document.querySelectorAll(sel).forEach(function(el, i) {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        // Escalonar delays para cards em grid (max 4)
        var delay = Math.min(i + 1, 4);
        el.classList.add('reveal-delay-' + delay);
      }
    });
  });

  // Configurar Intersection Observer
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  // Observar todos os elementos com classe .reveal
  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });
}

// ── COUNT-UP ANIMATION — Issue #13 ──
function _initCountUp() {
  var counters = document.querySelectorAll('.count-up');
  if (!counters.length) return;

  var hasAnimated = false;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        _animateCounters(counters);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  var statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}

function _animateCounters(counters) {
  var duration = 2000;

  counters.forEach(function(counter) {
    var target = parseInt(counter.getAttribute('data-target')) || 0;
    var prefix = counter.getAttribute('data-prefix') || '';
    var suffix = target >= 1000 ? 'K' : '';
    var displayTarget = target >= 1000 ? Math.floor(target / 1000) : target;
    var startTime = null;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeOutQuart(progress);
      var current = Math.floor(easedProgress * displayTarget);

      counter.textContent = prefix + current + suffix;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        counter.textContent = prefix + displayTarget + suffix;
      }
    }

    requestAnimationFrame(animate);
  });
}

// ── VIDEO ROTATION ──
const videos = [
  "./video/videomentemx.mp4",
  //"./video/211188.mp4",
  //"https://cdn.pixabay.com/video/2015/11/22/1116-146212088_large.mp4",
];
let curV = 0;
const vid = document.getElementById('heroVideo');
const dotsEl = document.getElementById('videoDots');

function buildDots(){
  dotsEl.innerHTML='';
  videos.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='vdot'+(i===0?' active':'');
    d.onclick=()=>setVideo(i);
    dotsEl.appendChild(d);

  });
}
function setVideo(i){
  curV=i;
  vid.src=videos[i];
  vid.load();vid.play().catch(()=>{});
  document.querySelectorAll('.vdot').forEach((d,j)=>d.classList.toggle('active',j===i));
}
function nextVideo(){setVideo((curV+1)%videos.length)}
vid.addEventListener('ended',nextVideo);
vid.addEventListener('error',nextVideo);
buildDots();
setVideo(0);

// ── NAV ──
function toggleMenu(){document.getElementById('mobileMenu').classList.toggle('open')}
window.addEventListener('scroll',()=>{
  document.querySelector('nav').style.background=window.scrollY>50?'rgba(10,10,10,0.99)':'rgba(10,10,10,0.96)';
});

// ── CTA FLUTUANTE MULTI-CANAL — Issue #15 ──
function toggleFloatMenu() {
  document.getElementById('floatCta').classList.toggle('open');
}

// Fechar menu ao clicar fora
document.addEventListener('click', function(e) {
  var cta = document.getElementById('floatCta');
  if (cta && cta.classList.contains('open') && !cta.contains(e.target)) {
    cta.classList.remove('open');
  }
});

// ── FAQ ──
function toggleFaq(el){
  const a=el.nextElementSibling,t=el.querySelector('.faq-toggle'),open=a.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('.faq-toggle').forEach(x=>x.textContent='+');
  document.querySelectorAll('.faq-q').forEach(x=>x.setAttribute('aria-expanded','false'));
  if(!open){a.classList.add('open');t.textContent='−';el.setAttribute('aria-expanded','true')}
}

// ── WAITLIST ──
function joinWaitlist(){
  const n=document.getElementById('wl-name').value.trim();
  const e=document.getElementById('wl-email').value.trim();
  if(!n||!e){alert('Preencha nome e e-mail para entrar na lista!');return}
  document.getElementById('wl-ok').style.display='block';
  document.getElementById('wl-name').value='';
  document.getElementById('wl-email').value='';
  document.getElementById('wl-sport').value='';
  const msg=encodeURIComponent(`Olá! Sou ${n}, vim pelo site Mente MX e quero saber mais sobre o Aplicativo MXPilot PRO.`);
  window.open(`https://wa.me/5547992108650?text=${msg}`,'_blank');
  document.getElementById('c-ok').style.display='block';
}

// ── CONTACT ──
function sendContact(){
  const n=document.getElementById('c-name').value.trim();
  const e=document.getElementById('c-email').value.trim();
  if(!n||!e){alert('Preencha nome e e-mail!');return}
  const msg=encodeURIComponent(`Olá! Sou ${n}, vim pelo site Mente MX e quero saber mais sobre as mentorias.`);
  window.open(`https://wa.me/5547992108650?text=${msg}`,'_blank');
  document.getElementById('c-ok').style.display='block';
}

// ── LOJA — CATÁLOGO ──
// images: array de caminhos. O primeiro é exibido no card.
// Para adicionar mais fotos de um produto, basta incluir no array images[].
const PRODUCTS = [
  {
    id: 'camisa-logo-preta',
    name: 'Camisa Logo Mente MX — Preta',
    category: 'Vestuário',
    price: 89.90,
    description: 'Camisa oficial com logo Mente MX. Estilo e identidade para dentro e fora da pista.',
    fullDescription: 'Camisa oficial da marca Mente MX com logo estampado. Tecido de alta qualidade, corte moderno. Ideal para treinos, competições e uso casual.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/Camisa MenteMX Logo - frente Preta.png'
      // './img/produtos/Camisa MenteMX Logo - verso Preta.png'  ← adicionar quando disponível
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preta']
  },
  {
    id: 'camisa-logo-branca',
    name: 'Camisa Logo Mente MX — Branca',
    category: 'Vestuário',
    price: 89.90,
    description: 'Camisa oficial com logo Mente MX na versão branca. Leve e estilosa.',
    fullDescription: 'Camisa oficial da marca Mente MX com logo estampado na versão branca. Tecido de alta qualidade, corte moderno. Ideal para treinos, competições e uso casual.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/Camisa MenteMX Logo - frente Branca.png'
      // './img/produtos/Camisa MenteMX Logo - verso Branca.png'  ← adicionar quando disponível
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Branca']
  },
  {
    id: 'camisa-rider-branco-preto',
    name: 'Camisa Rider Modelo 1 — Branco/Preto',
    category: 'Vestuário',
    price: 99.90,
    description: 'Camisa Rider Modelo 1 nas cores branco e preto. Clássico e elegante.',
    fullDescription: 'Camisa Rider Modelo 1 da Mente MX nas cores branco e preto. Design exclusivo com estampa frente e verso. Tecido respirável de alta performance.',
    buyUrl: 'https://www.quebracava.com.br',
    // 1a = frente, 1b = verso, 1c = foto modelo
    images: [
      './img/produtos/1a - Camisa MenteMX Rider Modelo1 - frente  Branco Preto.png',
      './img/produtos/1b - Camisa MenteMX Rider Modelo1 - verso Branco Preto.png',
      './img/produtos/1c - Camisa MenteMX Rider Modelo1 - Branco Preto.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Branco/Preto']
  },
  {
    id: 'camisa-rider-preto-verde',
    name: 'Camisa Rider Modelo 1 — Preto/Verde',
    category: 'Vestuário',
    price: 99.90,
    description: 'Camisa Rider Modelo 1 nas cores preto e verde. Identidade Mente MX em campo.',
    fullDescription: 'Camisa Rider Modelo 1 da Mente MX nas cores preto e verde. Design exclusivo com estampa frente e verso. Tecido respirável de alta performance.',
    buyUrl: 'https://www.quebracava.com.br',
    // 2a = frente, 2b = verso, 2c = foto modelo
    images: [
      './img/produtos/2a - Camisa MenteMX Rider Modelo1 - FRENTE - Preto Verde branco.png',
      './img/produtos/2b - Camisa MenteMX Rider Modelo1 - VERSO Preto Verde branco.png',
      './img/produtos/2c - Camisa MenteMX Rider Modelo1 - Preto Verde branco.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preto/Verde/Branco']
  },
  {
    id: 'camisa-rider-azul-laranja',
    name: 'Camisa Rider Modelo 1 — Azul/Laranja',
    category: 'Vestuário',
    price: 99.90,
    description: 'Camisa Rider Modelo 1 nas cores azul, laranja e branco. Vibrante e exclusiva.',
    fullDescription: 'Camisa Rider Modelo 1 da Mente MX nas cores azul, laranja e branco. Design exclusivo com estampa frente e verso. Tecido respirável de alta performance.',
    buyUrl: 'https://www.quebracava.com.br',
    // 3a = frente, 3b = verso, 3c = foto modelo
    images: [
      './img/produtos/3a - Camisa MenteMX Rider Modelo1 - frente Azul Laranja branca.png',
      './img/produtos/3b - Camisa MenteMX Rider Modelo1 - verso Azul Laranja branca.png',
      './img/produtos/3c - Camisa MenteMX Rider Modelo1 - Azul Laranja branca.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Azul/Laranja/Branco']
  },
  {
    id: 'camisa-rider-4-preto-laranja',
    name: 'Camisa Rider M1 — Preto/Laranja',
    category: 'Vestuário',
    price: 99.90,
    description: 'Camisa Rider Modelo 1 nas cores preto, laranja e branco. Duas fotos de frente.',
    fullDescription: 'Camisa Rider Modelo 1 da Mente MX nas cores preto, laranja e branco. Design exclusivo com estampa da marca. Tecido respirável de alta performance.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/4a - Camisa MenteMX Rider Modelo1 - frente Preto laranja Branco.png',
      './img/produtos/4b - Camisa MenteMX Rider Modelo1 - frente Preto laranja Branco.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preto/Laranja/Branco']
  },
  {
    id: 'camisa-rider-5-preto-amarelo',
    name: 'Camisa Rider M1 — Preto/Amarelo',
    category: 'Vestuário',
    price: 99.90,
    description: 'Camisa Rider Modelo 1 nas cores preto, amarelo e branco. Com frente e verso.',
    fullDescription: 'Camisa Rider Modelo 1 da Mente MX nas cores preto, amarelo e branco. Design exclusivo com estampa frente e verso. Tecido respirável de alta performance.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/5a - Camisa MenteMX Rider Modelo1 - FRENTE - Preto amarelo branco.png',
      './img/produtos/5b - Camisa MenteMX Rider Modelo1 - VERSO Preto Amarelo branco.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preto/Amarelo/Branco']
  },
  {
    id: 'camisa-rider-6-preta-vermelha',
    name: 'Camisa Rider M1 — Preta/Vermelha',
    category: 'Vestuário',
    price: 99.90,
    description: 'Camisa Rider Modelo 1 nas cores preta, vermelha e branca. Agressiva e marcante.',
    fullDescription: 'Camisa Rider Modelo 1 da Mente MX nas cores preta, vermelha e branca. Design exclusivo com estampa frente e verso. Tecido respirável de alta performance.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/6b - Camisa MenteMX Rider Modelo1 - Preta Vermelha  branca.png',
      './img/produtos/6a - Camisa MenteMX Rider Modelo1 - verso Preta Vermelha  branca.png',
      './img/produtos/6c - Camisa  MenteMX Rider Modelo1 - Preta Vermelha  branca.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preta/Vermelha/Branca']
  },

  // ── CALÇAS RIDER MODELO 1 ──
  {
    id: 'calca-rider-1-branco-preto',
    name: 'Calça Rider M1 — Branco/Preto',
    category: 'Vestuário',
    price: 149.90,
    description: 'Calça Rider Modelo 1 nas cores branco e preto. Combina com a camisa da mesma linha.',
    fullDescription: 'Calça Rider Modelo 1 da Mente MX nas cores branco e preto. Design exclusivo, tecido resistente e confortável. Combina perfeitamente com a camisa da mesma linha.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/1a - Calça MenteMX Rider Modelo1 Branco Preto.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Branco/Preto']
  },
  {
    id: 'calca-rider-2-preto-verde',
    name: 'Calça Rider M1 — Preto/Verde',
    category: 'Vestuário',
    price: 149.90,
    description: 'Calça Rider Modelo 1 nas cores preto e verde. Identidade Mente MX completa.',
    fullDescription: 'Calça Rider Modelo 1 da Mente MX nas cores preto e verde. Design exclusivo, tecido resistente e confortável. Combina perfeitamente com a camisa da mesma linha.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/2a - Calça MenteMX Rider Modelo1 Preto Verde branco.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preto/Verde/Branco']
  },
  {
    id: 'calca-rider-3-azul-laranja',
    name: 'Calça Rider M1 — Azul/Laranja',
    category: 'Vestuário',
    price: 149.90,
    description: 'Calça Rider Modelo 1 nas cores azul, laranja e branco. Vibrante e exclusiva.',
    fullDescription: 'Calça Rider Modelo 1 da Mente MX nas cores azul, laranja e branco. Design exclusivo, tecido resistente e confortável. Combina perfeitamente com a camisa da mesma linha.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/3a - Calça MenteMX Rider Modelo1 Azul Laranja branco.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Azul/Laranja/Branco']
  },
  {
    id: 'calca-rider-4-preto-laranja',
    name: 'Calça Rider M1 — Preto/Laranja',
    category: 'Vestuário',
    price: 149.90,
    description: 'Calça Rider Modelo 1 nas cores preto, laranja e branco.',
    fullDescription: 'Calça Rider Modelo 1 da Mente MX nas cores preto, laranja e branco. Design exclusivo, tecido resistente e confortável. Combina perfeitamente com a camisa da mesma linha.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/4a - Calça MenteMX Rider Modelo1 Preto laranja Branco.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preto/Laranja/Branco']
  },
  {
    id: 'calca-rider-5-preto-amarelo',
    name: 'Calça Rider M1 — Preto/Amarelo',
    category: 'Vestuário',
    price: 149.90,
    description: 'Calça Rider Modelo 1 nas cores preto, amarelo e branco.',
    fullDescription: 'Calça Rider Modelo 1 da Mente MX nas cores preto, amarelo e branco. Design exclusivo, tecido resistente e confortável. Combina perfeitamente com a camisa da mesma linha.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/5a - Calça MenteMX Rider Modelo1 Preto Amarelo branco.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preto/Amarelo/Branco']
  },
  {
    id: 'calca-rider-6-preta-vermelha',
    name: 'Calça Rider M1 — Preta/Vermelha',
    category: 'Vestuário',
    price: 149.90,
    description: 'Calça Rider Modelo 1 nas cores preta, vermelha e branca. Agressiva e marcante.',
    fullDescription: 'Calça Rider Modelo 1 da Mente MX nas cores preta, vermelha e branca. Design exclusivo, tecido resistente e confortável. Combina perfeitamente com a camisa da mesma linha.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/6a - Calça MenteMX Rider Modelo1 Preta Vermelha  branca.png'
    ],
    sizes: ['P', 'M', 'G', 'GG', 'XGG'],
    colors: ['Preta/Vermelha/Branca']
  },
  {
    id: 'chaveiro-aco',
    name: 'Chaveiro Mente MX — Aço',
    category: 'Acessório',
    price: 29.90,
    description: 'Chaveiro oficial Mente MX em aço inox. Resistente e com acabamento premium.',
    fullDescription: 'Chaveiro oficial da marca Mente MX em aço inox com acabamento premium. Resistente e durável, perfeito para representar a marca no dia a dia.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/Chaveiro MenteMX de aço.png'
      // './img/produtos/Chaveiro MenteMX de aço - detalhe.png'  ← adicionar quando disponível
    ],
    sizes: ['Único'],
    colors: ['Aço Inox']
  },
  {
    id: 'chaveiro-borracha',
    name: 'Chaveiro Mente MX — Borracha',
    category: 'Acessório',
    price: 19.90,
    description: 'Chaveiro oficial Mente MX em borracha. Leve, colorido e resistente.',
    fullDescription: 'Chaveiro oficial da marca Mente MX em borracha de alta qualidade. Leve, colorido e resistente. Perfeito para representar a marca no dia a dia.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/Chaveiro MenteMX de borracha.png'
      // './img/produtos/Chaveiro MenteMX de borracha - detalhe.png'  ← adicionar quando disponível
    ],
    sizes: ['Único'],
    colors: ['Colorido']
  },
  {
    id: 'meia',
    name: 'Meia Mente MX — Preta',
    category: 'Vestuário',
    price: 39.90,
    description: 'Meia oficial Mente MX. Conforto e estilo para treinos e competições.',
    fullDescription: 'Meia oficial da marca Mente MX na cor preta. Tecido de alta qualidade com compressão adequada para treinos e competições.',
    buyUrl: 'https://www.quebracava.com.br',
    images: [
      './img/produtos/Meia MenteMX Preta - 1 - Preta.png',
      './img/produtos/Meia MenteMX Preta - 2 - Preta.png'
    ],
    sizes: ['35-38', '39-42', '43-46'],
    colors: ['Preta']
  }
];

function formatPrice(price) {
  return 'R$ ' + price.toFixed(2).replace('.', ',');
}

// ── LOJA — CARROSSEL ──
(function() {
  const grid = document.getElementById('shopGrid');
  const prev = document.getElementById('shopPrev');
  const next = document.getElementById('shopNext');
  const dotsWrap = document.getElementById('shopDots');
  if (!grid) return;

  const cards = grid.querySelectorAll('.product-card');
  const total = cards.length;

  cards.forEach(function(_, i) {
    const d = document.createElement('button');
    d.className = 'shop-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Produto ' + (i + 1));
    d.onclick = function() { scrollToCard(i); };
    dotsWrap.appendChild(d);
  });

  function getCardWidth() {
    if (!cards[0]) return 300;
    return cards[0].offsetWidth + 20;
  }

  function updateArrows() {
    const maxScroll = grid.scrollWidth - grid.clientWidth;
    prev.classList.toggle('hidden', grid.scrollLeft <= 4);
    next.classList.toggle('hidden', grid.scrollLeft >= maxScroll - 4);
  }

  function updateDots() {
    const cw = getCardWidth();
    const idx = Math.round(grid.scrollLeft / cw);
    dotsWrap.querySelectorAll('.shop-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === idx);
    });
  }

  function scrollToCard(i) {
    grid.scrollTo({ left: i * getCardWidth(), behavior: 'smooth' });
  }

  window.scrollShop = function(dir) {
    const cw = getCardWidth();
    const idx = Math.round(grid.scrollLeft / cw);
    scrollToCard(Math.max(0, Math.min(total - 1, idx + dir)));
  };

  grid.addEventListener('scroll', function() { updateArrows(); updateDots(); });
  updateArrows();
  updateDots();
})();

// ── LOJA — MODAL DE PRODUTO ──
let _modalImgIndex = 0;
let _modalImages = [];

function openModal(productId) {
  const product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;

  // Registra o clique para analytics
  _trackClick(productId);

  const modal = document.getElementById('productModal');
  _modalImages = product.images || [];
  _modalImgIndex = 0;

  // Renderiza galeria de imagens
  renderModalGallery(modal);

  modal.querySelector('.modal-badge').textContent = product.category;
  modal.querySelector('.modal-name').textContent = product.name;
  modal.querySelector('.modal-price').textContent = formatPrice(product.price);
  modal.querySelector('.modal-desc').textContent = product.fullDescription;

  // Seletor de tamanho
  const sizeWrap = modal.querySelector('.modal-sizes');
  sizeWrap.innerHTML = '<p class="modal-option-label">Tamanho</p>'
    + '<div class="modal-option-btns" id="modalSizeBtns">'
    + product.sizes.map(function(s) {
        return '<button class="opt-btn" onclick="selectOpt(this,\'size\')">' + s + '</button>';
      }).join('')
    + '</div>';

  // Seletor de cor
  const colorWrap = modal.querySelector('.modal-colors');
  colorWrap.innerHTML = '<p class="modal-option-label">Cor</p>'
    + '<div class="modal-option-btns" id="modalColorBtns">'
    + product.colors.map(function(c) {
        return '<button class="opt-btn" onclick="selectOpt(this,\'color\')">' + c + '</button>';
      }).join('')
    + '</div>';

  modal.dataset.baseUrl = product.buyUrl;
  modal.querySelector('.modal-buy').href = product.buyUrl;
  modal.querySelector('.modal-buy').textContent = '🛒 Comprar na Quebra Cava';

  // Renderiza produtos relacionados no rodapé
  _renderRelated(productId);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function _renderRelated(currentId) {
  var track = document.getElementById('modalRelatedTrack');
  var relatedSection = document.getElementById('modalRelated');
  if (!track) return;

  // Todos os produtos exceto o atual
  var others = PRODUCTS.filter(function(p) { return p.id !== currentId; });

  // Ordena: primeiro os mais clicados recentemente, depois mesma categoria, depois o resto
  var current = PRODUCTS.find(function(p) { return p.id === currentId; });
  others.sort(function(a, b) {
    var clicksA = _clickCounts[a.id] || 0;
    var clicksB = _clickCounts[b.id] || 0;
    // Prioridade 1: mais clicados
    if (clicksB !== clicksA) return clicksB - clicksA;
    // Prioridade 2: mesma categoria
    var catA = current && a.category === current.category ? 0 : 1;
    var catB = current && b.category === current.category ? 0 : 1;
    return catA - catB;
  });

  var shown = others.slice(0, 10);

  track.innerHTML = shown.map(function(p) {
    var imgSrc = p.images && p.images[0] ? p.images[0] : '';
    return '<div class="related-item" onclick="openModal(\'' + p.id + '\')" title="' + p.name + '">'
      + '<div class="related-img">'
      + (imgSrc
          ? '<img src="' + imgSrc + '" alt="' + p.name + '" loading="lazy" oncontextmenu="return false" ondragstart="return false">'
          : '<span class="related-placeholder">' + p.name.charAt(0) + '</span>')
      + '</div>'
      + '<p class="related-name">' + p.name + '</p>'
      + '<p class="related-price">' + formatPrice(p.price) + '</p>'
      + '</div>';
  }).join('');

  // Mostra/oculta a seção
  relatedSection.style.display = shown.length > 0 ? 'block' : 'none';

  // Inicializa setas do carrossel de relacionados
  _initRelatedArrows();
}

function _initRelatedArrows() {
  var track = document.getElementById('modalRelatedTrack');
  var prevBtn = document.getElementById('relatedPrev');
  var nextBtn = document.getElementById('relatedNext');
  if (!track || !prevBtn || !nextBtn) return;

  function updateArrows() {
    var maxScroll = track.scrollWidth - track.clientWidth;
    prevBtn.classList.toggle('hidden', track.scrollLeft <= 4);
    nextBtn.classList.toggle('hidden', track.scrollLeft >= maxScroll - 4);
  }

  prevBtn.onclick = function() {
    track.scrollBy({ left: -200, behavior: 'smooth' });
  };
  nextBtn.onclick = function() {
    track.scrollBy({ left: 200, behavior: 'smooth' });
  };

  track.addEventListener('scroll', updateArrows);
  // Aguarda render para calcular scroll corretamente
  setTimeout(updateArrows, 50);
}

function renderModalGallery(modal) {
  const imgWrap = modal.querySelector('.modal-img');
  const hasMultiple = _modalImages.length > 1;

  imgWrap.innerHTML = ''
    + '<div class="gallery-track" id="galleryTrack">'
    + _modalImages.map(function(src, i) {
        var counter = hasMultiple ? (i + 1) + ' / ' + _modalImages.length : '';
        return '<img src="' + src + '" alt="Foto ' + (i + 1) + ' do produto" class="gallery-slide"'
          + ' onclick="openLightbox(\'' + src.replace(/'/g, "\\'") + '\', \'' + counter + '\')"'
          + ' oncontextmenu="return false"'
          + ' ondragstart="return false"'
          + ' onerror="this.style.display=\'none\'">';
      }).join('')
    + '</div>'
    + (hasMultiple
        ? '<button class="gallery-arrow gallery-prev" onclick="slideGallery(-1)" aria-label="Foto anterior">&#8592;</button>'
          + '<button class="gallery-arrow gallery-next" onclick="slideGallery(1)" aria-label="Próxima foto">&#8594;</button>'
          + '<div class="gallery-dots">'
          + _modalImages.map(function(_, i) {
              return '<span class="gallery-dot' + (i === 0 ? ' active' : '') + '" onclick="goGallery(' + i + ')"></span>';
            }).join('')
          + '</div>'
        : '');

  updateGalleryPosition(modal);
}

function slideGallery(dir) {
  _modalImgIndex = Math.max(0, Math.min(_modalImages.length - 1, _modalImgIndex + dir));
  updateGalleryPosition(document.getElementById('productModal'));
}

function goGallery(i) {
  _modalImgIndex = i;
  updateGalleryPosition(document.getElementById('productModal'));
}

function updateGalleryPosition(modal) {
  const track = modal.querySelector('#galleryTrack');
  if (track) track.style.transform = 'translateX(-' + (_modalImgIndex * 100) + '%)';

  // Atualiza dots da galeria
  modal.querySelectorAll('.gallery-dot').forEach(function(d, i) {
    d.classList.toggle('active', i === _modalImgIndex);
  });

  // Atualiza setas
  const prev = modal.querySelector('.gallery-prev');
  const next = modal.querySelector('.gallery-next');
  if (prev) prev.style.opacity = _modalImgIndex === 0 ? '0.3' : '1';
  if (next) next.style.opacity = _modalImgIndex === _modalImages.length - 1 ? '0.3' : '1';
}

function selectOpt(btn, type) {
  // Desmarca os outros do mesmo grupo
  const group = btn.closest('.modal-option-btns');
  group.querySelectorAll('.opt-btn').forEach(function(b) { b.classList.remove('selected'); });
  btn.classList.add('selected');
  updateBuyLink();
}

function updateBuyLink() {
  const modal = document.getElementById('productModal');
  const sizeBtn = modal.querySelector('#modalSizeBtns .opt-btn.selected');
  const colorBtn = modal.querySelector('#modalColorBtns .opt-btn.selected');
  const base = modal.dataset.baseUrl || 'https://www.quebracava.com.br';

  // Monta URL com parâmetros — ajuste os nomes dos params conforme a Quebra Cava informar
  let url = base;
  const params = [];
  if (sizeBtn) params.push('tamanho=' + encodeURIComponent(sizeBtn.textContent));
  if (colorBtn) params.push('cor=' + encodeURIComponent(colorBtn.textContent));
  if (params.length) url += (url.includes('?') ? '&' : '?') + params.join('&');

  const buyBtn = modal.querySelector('.modal-buy');
  buyBtn.href = url;

  // Feedback visual no botão
  if (sizeBtn && colorBtn) {
    buyBtn.textContent = '🛒 Comprar — ' + sizeBtn.textContent + ' / ' + colorBtn.textContent;
  }
}

function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function handleModalOverlayClick(event) {
  if (event.target === event.currentTarget) closeModal();
}

// ── PROTEÇÃO DE IMAGENS ──
// Bloqueia clique direito, arrastar e atalhos de teclado em todas as imagens de produto
document.addEventListener('contextmenu', function(e) {
  if (e.target.tagName === 'IMG' && (
    e.target.closest('.product-img') ||
    e.target.closest('.modal-img') ||
    e.target.closest('.lightbox-inner')
  )) {
    e.preventDefault();
    return false;
  }
});

document.addEventListener('dragstart', function(e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
    return false;
  }
});

// Bloqueia Ctrl+S e PrintScreen não pode ser bloqueado, mas podemos escurecer
document.addEventListener('keydown', function(e) {
  // Bloqueia Ctrl+S (salvar página)
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    return false;
  }
  // Bloqueia Ctrl+U (ver código fonte)
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
    return false;
  }
});

// ── LIGHTBOX DE ZOOM ──
var _lbIndex = 0; // índice atual no lightbox

function openLightbox(src, counter) {
  // Descobre o índice da imagem clicada no array _modalImages
  var idx = _modalImages.indexOf(src);
  _lbIndex = idx >= 0 ? idx : 0;
  _renderLightbox();
  var overlay = document.getElementById('lightboxOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function _renderLightbox() {
  var overlay = document.getElementById('lightboxOverlay');
  var img = document.getElementById('lightboxImg');
  var cnt = document.getElementById('lightboxCounter');
  var prevBtn = document.getElementById('lbPrev');
  var nextBtn = document.getElementById('lbNext');
  var total = _modalImages.length;

  img.src = _modalImages[_lbIndex];
  cnt.textContent = total > 1 ? (_lbIndex + 1) + ' / ' + total : '';

  // Mostra/oculta setas
  if (prevBtn) prevBtn.style.opacity = _lbIndex === 0 ? '0.25' : '1';
  if (nextBtn) nextBtn.style.opacity = _lbIndex === total - 1 ? '0.25' : '1';

  // Atualiza dots do lightbox
  var dots = overlay.querySelectorAll('.lb-dot');
  dots.forEach(function(d, i) { d.classList.toggle('active', i === _lbIndex); });
}

function slideLightbox(dir) {
  var total = _modalImages.length;
  _lbIndex = Math.max(0, Math.min(total - 1, _lbIndex + dir));
  _renderLightbox();
}

function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  if (!document.getElementById('productModal').classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

function handleLightboxOverlayClick(event) {
  // Fecha apenas se clicou no overlay, não nas setas ou na imagem
  if (event.target === event.currentTarget) closeLightbox();
}

// Teclado: ← → para navegar, Escape para fechar
document.addEventListener('keydown', function(e) {
  var lbOpen = document.getElementById('lightboxOverlay').classList.contains('open');
  if (lbOpen) {
    if (e.key === 'ArrowLeft')  { e.preventDefault(); slideLightbox(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); slideLightbox(1); }
    if (e.key === 'Escape')     { closeLightbox(); }
  } else if (e.key === 'Escape') {
    closeModal();
  }
});

// Swipe no mobile dentro do lightbox
(function() {
  var startX = 0;
  var overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;
  overlay.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  }, { passive: true });
  overlay.addEventListener('touchend', function(e) {
    var diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) slideLightbox(diff > 0 ? 1 : -1);
  }, { passive: true });
})();

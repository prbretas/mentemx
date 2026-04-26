//SCRIPT
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

// ── FAQ ──
function toggleFaq(el){
  const a=el.nextElementSibling,t=el.querySelector('.faq-toggle'),open=a.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('.faq-toggle').forEach(x=>x.textContent='+');
  if(!open){a.classList.add('open');t.textContent='−'}
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

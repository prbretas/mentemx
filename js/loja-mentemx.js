 //HTML DA LOJA DO MENTE MX
 //FAZER UMA NOVA LOGICA PARA ATRIBUIR A LOJA NO SITE.
 
 <!-- LOJA -->
   <!--   <section id="loja">
      <div class="shop-header">
        <span class="section-label">Produtos Oficiais</span>
        <h2 class="section-title">LOJA <span>MENTE MX</span></h2>
        <div class="divider" style="margin: 14px auto"></div>
        <p class="section-sub" style="margin: 0 auto">
          Vista a mentalidade de campeão. Produtos oficiais da marca Mente MX.
        </p> <!--, vendidos e entregues pela nossa parceira Quebra Cava.-->
      </div>

      <div class="shop-carousel-wrap">
        <button class="shop-arrow prev hidden" id="shopPrev" onclick="scrollShop(-1)" aria-label="Anterior">&#8592;</button>
        <button class="shop-arrow next" id="shopNext" onclick="scrollShop(1)" aria-label="Próximo">&#8594;</button>

        <div class="shop-grid" id="shopGrid">

          <!-- Camisa Logo Preta -->
        <div class="product-card" data-product-id="camisa-logo-preta" onclick="openModal('camisa-logo-preta')">
          <div class="product-img">
            <img src="./img/produtos/Camisa MenteMX Logo - frente Preta.png" alt="Camisa Mente MX Logo Preta">
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Camisa Logo — Preta</h3>
            <p class="product-desc">Camisa oficial com logo Mente MX. Estilo e identidade para dentro e fora da pista.</p>
            <div class="product-price">R$ 89,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes e escolher tamanho</span>
          </div>
        </div>

        <!-- Camisa Logo Branca -->
        <div class="product-card" data-product-id="camisa-logo-branca" onclick="openModal('camisa-logo-branca')">
          <div class="product-img">
            <img src="./img/produtos/Camisa MenteMX Logo - frente Branca.png" alt="Camisa Mente MX Logo Branca">
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Camisa Logo — Branca</h3>
            <p class="product-desc">Camisa oficial com logo Mente MX na versão branca. Leve e estilosa.</p>
            <div class="product-price">R$ 89,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes e escolher tamanho</span>
          </div>
        </div>

        <!-- Camisa Rider Branco/Preto (3 fotos: frente, verso, modelo) -->
        <div class="product-card" data-product-id="camisa-rider-branco-preto" onclick="openModal('camisa-rider-branco-preto')">
          <div class="product-img">
            <img src="./img/produtos/1a - Camisa MenteMX Rider Modelo1 - frente  Branco Preto.png" alt="Camisa Rider Branco Preto - Frente">
            <span class="card-img-count">3 fotos</span>
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Rider M1 — Branco/Preto</h3>
            <p class="product-desc">Camisa Rider Modelo 1 nas cores branco e preto. Clássico e elegante.</p>
            <div class="product-price">R$ 99,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver frente, verso e modelo</span>
          </div>
        </div>

        <!-- Camisa Rider Preto/Verde (3 fotos: frente, verso, modelo) -->
        <div class="product-card" data-product-id="camisa-rider-preto-verde" onclick="openModal('camisa-rider-preto-verde')">
          <div class="product-img">
            <img src="./img/produtos/2a - Camisa MenteMX Rider Modelo1 - FRENTE - Preto Verde branco.png" alt="Camisa Rider Preto Verde - Frente">
            <span class="card-img-count">3 fotos</span>
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Rider M1 — Preto/Verde</h3>
            <p class="product-desc">Camisa Rider Modelo 1 nas cores preto e verde. Identidade Mente MX em campo.</p>
            <div class="product-price">R$ 99,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver frente, verso e modelo</span>
          </div>
        </div>

        <!-- Camisa Rider Azul/Laranja (3 fotos: frente, verso, modelo) -->
        <div class="product-card" data-product-id="camisa-rider-azul-laranja" onclick="openModal('camisa-rider-azul-laranja')">
          <div class="product-img">
            <img src="./img/produtos/3a - Camisa MenteMX Rider Modelo1 - frente Azul Laranja branca.png" alt="Camisa Rider Azul Laranja - Frente">
            <span class="card-img-count">3 fotos</span>
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Rider M1 — Azul/Laranja</h3>
            <p class="product-desc">Camisa Rider Modelo 1 nas cores azul, laranja e branco. Vibrante e exclusiva.</p>
            <div class="product-price">R$ 99,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver frente, verso e modelo</span>
          </div>
        </div>

        <!-- Camisa Rider Preto/Laranja (produto 4 — 2 fotos) -->
        <div class="product-card" data-product-id="camisa-rider-4-preto-laranja" onclick="openModal('camisa-rider-4-preto-laranja')">
          <div class="product-img">
            <img src="./img/produtos/4a - Camisa MenteMX Rider Modelo1 - frente Preto laranja Branco.png" alt="Camisa Rider Preto Laranja">
            <span class="card-img-count">2 fotos</span>
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Rider M1 — Preto/Laranja</h3>
            <p class="product-desc">Camisa Rider Modelo 1 nas cores preto, laranja e branco.</p>
            <div class="product-price">R$ 99,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver as 2 fotos</span>
          </div>
        </div>

        <!-- Camisa Rider Preto/Amarelo (produto 5 — frente e verso) -->
        <div class="product-card" data-product-id="camisa-rider-5-preto-amarelo" onclick="openModal('camisa-rider-5-preto-amarelo')">
          <div class="product-img">
            <img src="./img/produtos/5a - Camisa MenteMX Rider Modelo1 - FRENTE - Preto amarelo branco.png" alt="Camisa Rider Preto Amarelo - Frente">
            <span class="card-img-count">2 fotos</span>
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Rider M1 — Preto/Amarelo</h3>
            <p class="product-desc">Camisa Rider Modelo 1 nas cores preto, amarelo e branco. Com frente e verso.</p>
            <div class="product-price">R$ 99,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver frente e verso</span>
          </div>
        </div>

        <!-- Camisa Rider Preta/Vermelha (produto 6 — 3 fotos) -->
        <div class="product-card" data-product-id="camisa-rider-6-preta-vermelha" onclick="openModal('camisa-rider-6-preta-vermelha')">
          <div class="product-img">
            <img src="./img/produtos/6b - Camisa MenteMX Rider Modelo1 - Preta Vermelha  branca.png" alt="Camisa Rider Preta Vermelha">
            <span class="card-img-count">3 fotos</span>
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Rider M1 — Preta/Vermelha</h3>
            <p class="product-desc">Camisa Rider Modelo 1 nas cores preta, vermelha e branca. Agressiva e marcante.</p>
            <div class="product-price">R$ 99,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver todas as fotos</span>
          </div>
        </div>

        <!-- Calça Rider Branco/Preto -->
        <div class="product-card" data-product-id="calca-rider-1-branco-preto" onclick="openModal('calca-rider-1-branco-preto')">
          <div class="product-img">
            <img src="./img/produtos/1a - Calça MenteMX Rider Modelo1 Branco Preto.png" alt="Calça Rider Branco Preto">
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Calça Rider M1 — Branco/Preto</h3>
            <p class="product-desc">Calça Rider Modelo 1 nas cores branco e preto. Combina com a camisa da mesma linha.</p>
            <div class="product-price">R$ 149,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes e escolher tamanho</span>
          </div>
        </div>

        <!-- Calça Rider Preto/Verde -->
        <div class="product-card" data-product-id="calca-rider-2-preto-verde" onclick="openModal('calca-rider-2-preto-verde')">
          <div class="product-img">
            <img src="./img/produtos/2a - Calça MenteMX Rider Modelo1 Preto Verde branco.png" alt="Calça Rider Preto Verde">
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Calça Rider M1 — Preto/Verde</h3>
            <p class="product-desc">Calça Rider Modelo 1 nas cores preto e verde. Identidade Mente MX completa.</p>
            <div class="product-price">R$ 149,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes e escolher tamanho</span>
          </div>
        </div>

        <!-- Calça Rider Azul/Laranja -->
        <div class="product-card" data-product-id="calca-rider-3-azul-laranja" onclick="openModal('calca-rider-3-azul-laranja')">
          <div class="product-img">
            <img src="./img/produtos/3a - Calça MenteMX Rider Modelo1 Azul Laranja branco.png" alt="Calça Rider Azul Laranja">
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Calça Rider M1 — Azul/Laranja</h3>
            <p class="product-desc">Calça Rider Modelo 1 nas cores azul, laranja e branco. Vibrante e exclusiva.</p>
            <div class="product-price">R$ 149,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes e escolher tamanho</span>
          </div>
        </div>

        <!-- Calça Rider Preto/Laranja -->
        <div class="product-card" data-product-id="calca-rider-4-preto-laranja" onclick="openModal('calca-rider-4-preto-laranja')">
          <div class="product-img">
            <img src="./img/produtos/4a - Calça MenteMX Rider Modelo1 Preto laranja Branco.png" alt="Calça Rider Preto Laranja">
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Calça Rider M1 — Preto/Laranja</h3>
            <p class="product-desc">Calça Rider Modelo 1 nas cores preto, laranja e branco.</p>
            <div class="product-price">R$ 149,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes e escolher tamanho</span>
          </div>
        </div>

        <!-- Calça Rider Preto/Amarelo -->
        <div class="product-card" data-product-id="calca-rider-5-preto-amarelo" onclick="openModal('calca-rider-5-preto-amarelo')">
          <div class="product-img">
            <img src="./img/produtos/5a - Calça MenteMX Rider Modelo1 Preto Amarelo branco.png" alt="Calça Rider Preto Amarelo">
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Calça Rider M1 — Preto/Amarelo</h3>
            <p class="product-desc">Calça Rider Modelo 1 nas cores preto, amarelo e branco.</p>
            <div class="product-price">R$ 149,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes e escolher tamanho</span>
          </div>
        </div>

        <!-- Calça Rider Preta/Vermelha -->
        <div class="product-card" data-product-id="calca-rider-6-preta-vermelha" onclick="openModal('calca-rider-6-preta-vermelha')">
          <div class="product-img">
            <img src="./img/produtos/6a - Calça MenteMX Rider Modelo1 Preta Vermelha  branca.png" alt="Calça Rider Preta Vermelha">
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Calça Rider M1 — Preta/Vermelha</h3>
            <p class="product-desc">Calça Rider Modelo 1 nas cores preta, vermelha e branca. Agressiva e marcante.</p>
            <div class="product-price">R$ 149,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes e escolher tamanho</span>
          </div>
        </div>

        <!-- Chaveiro Aço -->
        <div class="product-card" data-product-id="chaveiro-aco" onclick="openModal('chaveiro-aco')">
          <div class="product-img">
            <img src="./img/produtos/Chaveiro MenteMX de aço.png" alt="Chaveiro Mente MX de Aço">
          </div>
          <div class="product-info">
            <span class="product-badge">Acessório</span>
            <h3 class="product-name">Chaveiro — Aço</h3>
            <p class="product-desc">Chaveiro oficial Mente MX em aço inox. Resistente e com acabamento premium.</p>
            <div class="product-price">R$ 29,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes</span>
          </div>
        </div>

        <!-- Chaveiro Borracha -->
        <div class="product-card" data-product-id="chaveiro-borracha" onclick="openModal('chaveiro-borracha')">
          <div class="product-img">
            <img src="./img/produtos/Chaveiro MenteMX de borracha.png" alt="Chaveiro Mente MX de Borracha">
          </div>
          <div class="product-info">
            <span class="product-badge">Acessório</span>
            <h3 class="product-name">Chaveiro — Borracha</h3>
            <p class="product-desc">Chaveiro oficial Mente MX em borracha. Leve, colorido e resistente.</p>
            <div class="product-price">R$ 19,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver detalhes</span>
          </div>
        </div>

        <!-- Meia (2 fotos) -->
        <div class="product-card" data-product-id="meia" onclick="openModal('meia')">
          <div class="product-img">
            <img src="./img/produtos/Meia MenteMX Preta - 1 - Preta.png" alt="Meia Mente MX Preta">
            <span class="card-img-count">2 fotos</span>
          </div>
          <div class="product-info">
            <span class="product-badge">Vestuário</span>
            <h3 class="product-name">Meia Mente MX — Preta</h3>
            <p class="product-desc">Meia oficial Mente MX. Conforto e estilo para treinos e competições.</p>
            <div class="product-price">R$ 39,90</div>
            <button class="product-cta" onclick="event.stopPropagation(); openModal(this.closest('.product-card').dataset.productId)">Ver Produto</button><span class="product-hint">Clique para ver as 2 fotos</span>
          </div>
        </div>

        </div><!-- fim shop-grid -->
      </div><!-- fim shop-carousel-wrap -->

      <div class="shop-dots" id="shopDots"></div>

     <!-- <div class="shop-partnership">
        Produtos vendidos e entregues pela nossa parceira oficial
        <a href="https://www.quebracava.com.br" target="_blank" rel="noopener noreferrer">Quebra Cava</a>.
        Ao clicar em "Comprar" você será redirecionado para a loja da Quebra Cava.
      </div>-->
    </section>



    <!-- MODAL DE PRODUTO -->
    <div class="modal-overlay" id="productModal" onclick="handleModalOverlayClick(event)">
      <div class="modal-content">
        <button class="modal-close" onclick="closeModal()" aria-label="Fechar modal">×</button>
        <div class="modal-img">
          <!-- Preenchido dinamicamente por openModal() -->
        </div>
        <div class="modal-info">
          <span class="modal-badge"></span>
          <h2 class="modal-name"></h2>
          <div class="modal-price"></div>
          <p class="modal-desc"></p>
          <!-- Seletores de tamanho e cor (preenchidos por JS) -->
          <div class="modal-sizes"></div>
          <div class="modal-colors"></div>
          <a class="modal-buy" href="https://www.quebracava.com.br" target="_blank" rel="noopener noreferrer">🛒 Comprar na Quebra Cava</a>
          <p class="modal-buy-hint">Selecione tamanho e cor para ir direto ao produto</p>
        </div>
      </div>
      <!-- Rodapé: produtos relacionados -->
      <div class="modal-related" id="modalRelated">
        <p class="modal-related-label">Outros produtos</p>
        <div class="modal-related-wrap">
          <button class="related-arrow hidden" id="relatedPrev" aria-label="Anterior">&#8592;</button>
          <div class="modal-related-track" id="modalRelatedTrack">
            <!-- Preenchido dinamicamente por openModal() -->
          </div>
          <button class="related-arrow" id="relatedNext" aria-label="Próximo">&#8594;</button>
        </div>
      </div>
    </div>

    <!-- LIGHTBOX DE ZOOM -->
    <div class="lightbox-overlay" id="lightboxOverlay" onclick="handleLightboxOverlayClick(event)">
      <button class="lightbox-close" onclick="closeLightbox()" aria-label="Fechar zoom">×</button>

      <!-- Seta anterior -->
      <button class="lb-arrow lb-prev" id="lbPrev" onclick="slideLightbox(-1)" aria-label="Foto anterior">&#8592;</button>

      <div class="lightbox-inner" onclick="event.stopPropagation()">
        <img class="lightbox-img" id="lightboxImg" src="" alt="Zoom do produto"
             oncontextmenu="return false"
             ondragstart="return false">
        <div class="lightbox-watermark">
          <img src="./img/Logo Mente MX - Oficial filtro.png" alt="" draggable="false" oncontextmenu="return false">
        </div>
      </div>

      <!-- Seta próxima -->
      <button class="lb-arrow lb-next" id="lbNext" onclick="slideLightbox(1)" aria-label="Próxima foto">&#8594;</button>

      <div class="lightbox-counter" id="lightboxCounter"></div>
    </div>

    <!-- WA FLOAT -->
    <a
      href="https://wa.me/5547992108650?text=Olá!+Vim+pelo+site+Mente+MX+e+quero+saber+mais+sobre+as+mentorias."
      target="_blank"
      class="wa-float"
    >
      <svg viewBox="0 0 24 24">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        />
      </svg>
    </a>
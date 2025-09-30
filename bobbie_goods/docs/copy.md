INSTRUÇÕES PARA CRIAÇÃO DE LANDING PAGE
Landing Page — Pijama de Colorir Bobbie Goods
Objetivo: criar uma landing page de alta conversão (mobile-first) que atenda a campanha “Dia das Crianças”, focada na dor: criança colada no celular. A página deve integrar catálogo Shopify (produtos/variants) e redirecionar ao checkout CartPanda. Timer de 8 minutos inicia no carregamento da página (apenas gatilho psicológico — não bloqueia compra).

Usar apenas HTML, CSS e JS
Separar em componentes e não misturar html com css e js
Usar GSAP para animações sutis que engajam o usuário

DIRETRIZES DE DESIGN & TOM
Paleta: 
#4DA6FF azul principal (10% - CTAs e destaques)
#78D6C6 verde menta (30% - seções e elementos secundários)
#FFD166 amarelo suave (30% - backgrounds e cards)
#CDB4F4 lilás claro (30% - alternância de seções)
Cores neutras: branco, cinza claro para textos

Tipografia: Sans serif legível (títulos grandes, corpo confortável).
Mobile-first: botões grandes, CTAs touch-friendly (≥44px).

ESTRUTURA / SESSÕES
Top bar (sticky)
Texto: Frete grátis para todo o Brasil • Desconto aplicado automaticamente no carrinho
CTA pequeno: Comprar agora (ancora para Pricing)

HERO (first view)
H1: Cansado de ver seu filho colado no celular?
H2: Transforme tempo de tela em criatividade: Pijama de Colorir Bobbie Goods + 12 canetinhas laváveis.
Bullets: Pintar • Lavar • Repetir — Seguro, educativo e divertido.
Timer (visível): Seu preço e brinde reservados por: <span id="bobbie-hero-timer">08:00</span> (inicia no page-load).

Preço compacto (mini-strip): mostre as 3 opções resumidas.

CTA principal: “Garantir promoção do Dia das Crianças” → âncora para seção preços.

Microcopy: Desconto aplicado automaticamente no carrinho • Frete grátis para todo o Brasil

Barra dinâmica / prova social
Linha: Mais de X famílias felizes (se houver um número real, usar).

Toast animado (rotativo): Joana, SP — acabou de comprar 1 kit. (se usar dados reais, ok; se não, usar frases genéricas) — implementar com feed real-time ou simulação ética.

Por que funciona (benefícios)
Título: Por que os pais escolhem Bobbie Goods

3 cards:

Menos telas, mais criatividade — substitui tempo passivo por criação ativa.

Seguro & lavável — canetinhas à base d’água; o pijama volta a ficar limpo.

Aprendizado — coordenação motora e imaginação.

Como funciona (visual)
3 passos com imagens/GIF: Abrir kit → Pintar → Lavar e repintar (vídeo curto loop).

Depoimentos (prova social)
Carousel 3–4 depoimentos com foto + 1 vídeo (if UGC available). Mostrar estrelas só se tiver rating real.

Preços (Pricing) — destaque no card do meio (recomendado)
Apresentar 3 cards lado-a-lado (desktop) / stacked (mobile). Cada card deve mostrar: preço total, preço por unidade, economia em R$ e %, CTA:

1 pijama

Preço: R$ 179,90

Per unit: R$ 179,90

CTA: Comprar 1

3 pijamas — Melhor Compra (destaque com selo)

Preço: R$ 358,80

Per unit: R$ 119,60

Economia: Economize R$ 180,90 (≈34%)

CTA: Levar o kit 3 (Melhor Compra)

5 pijamas — Economia Máxima

Preço: R$ 539,70

Per unit: R$ 107,94

Economia: Economize R$ 359,80 (≈40%)

CTA: Levar o kit 5

Microcopy em todos os cards: Desconto aplicado automaticamente no carrinho • Frete grátis Brasil

Segurança do produto (técnico)
Headline: Seguro para crianças — canetinhas à base d’água

Bullet: Composição: Suede Premium — 95% Poliéster, 5% Poliamida

Link: Guia de cuidados e lavagem

Garantia & FAQs
Troca fácil em 7 dias (se for a política real)

FAQ com schema: canetinhas mancham? Como lavar? Prazo de entrega? Como funciona o desconto?

Urgência final e sticky buybar
Repita timer no fim e sticky buybar com mini-card + CTA.

Inserir exit-intent modal: “Espere! Leve 3 pagando 2 — desconto automático. Oferta relâmpago.”

TIMER — especificação (8 minutos no page-load, gatilho)
Ao carregar a página iniciar contagem regressiva de 08:00 por visitante (usar sessionStorage para persistência durante a sessão). O timer é apenas um gatilho psicológico — não bloqueia compra após expirar.

Microcopies:

Início: Seu preço e brinde reservados por: 08:00

1–2 minutos restantes: Últimos minutos! Garanta antes que acabe.

Expirado: O tempo acabou — a oferta pode mudar, mas você ainda pode comprar.

Tracking: disparar events timer_start, timer_cta_click, timer_expire.

Snippet JS sugerido: usar o snippet que envio (ou peça ao dev).

(Observação: timer é client-side, persistido por sessionStorage; para reservas reais, implemente token server-side com TTL.)


SEO — checklist técnico (para dev/SEO)
<title>: Pijama de Colorir Bobbie Goods — Substitua telas por criatividade | Puro Conforto

<meta name="description"> 150–160 chars com keywords e oferta.

og: tags (og:image 1200×630).

JSON-LD: Product + Offer + FAQ (incluir preço e validade). Exemplo já incluído no briefing anterior.

URLs amigáveis (/pijama-colorir-bobbie-goods).

Imagens: WebP, responsive srcset, alt texts descritivos.

Sitemap.xml, robots.txt, canonical tags.

Scripts / snippets úteis (incluir com IDs no HTML)
Timer snippet (client-side) — já fornecido anteriormente; iniciar no page-load e usar sessionStorage.
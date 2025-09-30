PROMPT COMPLETO: Landing Page — Pijama de Colorir Bobbie Goods
Objetivo: criar uma landing page de alta conversão (mobile-first) que atenda a campanha “Dia das Crianças”, focada na dor: criança colada no celular. A página deve integrar catálogo Shopify (produtos/variants) e redirecionar ao checkout CartPanda. Timer de 8 minutos inicia no carregamento da página (apenas gatilho psicológico — não bloqueia compra).

Sumário rápido (para copiar no topo do ticket)
Página responsiva (mobile-first).

Timer: 8 minutos que inicia no page-load (usado como gatilho).

Integração produtos: Shopify (Storefront API ou cart permalinks). 
Shopify
+1
Shopify
+1

Checkout: CartPanda — criar sessão/checkout via API e redirecionar o cliente. 
dev.cartpanda.com
+1
dev.cartpanda.com
+1

Preços: 1 = R$179,90, 3 = R$358,80 (recomendado), 5 = R$539,70.

SEO: meta tags, JSON-LD Product/Offer/FAQ, OG tags, alt texts, sitemap, performance.

Tracking: GA4 + FB Pixel + eventos (view_item, add_to_cart, begin_checkout, purchase, timer_start, timer_cta_click).

DIRETRIZES DE DESIGN & TOM
Paleta: off-white, acento terracota (#B34B2B), verde suave para confiança.

Tipografia: Sans serif legível (títulos grandes, corpo confortável).

Imagens: use as imagens fornecidas (hero, close canetas, família). Não sobrepor texto em faces. Respeitar margem segura (min 48–60px).

Mobile-first: botões grandes, CTAs touch-friendly (≥44px).

ESTRUTURA / SESSÕES (conteúdo pronto para colar)
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

Integração com Shopify (produto/variants / cart permalinks / Storefront API)
Resumo técnico: puxe catálogo e disponibilidade do Shopify; use cart permalinks ou Storefront API para pré-carregar carrinho e/ou validar estoque. Para packs, preferível criar bundle variants no Shopify (1, 3, 5) para controle de inventário e simplicidade do fluxo.

Cart permalinks: você pode montar links que adicionam um variant + quantidade diretamente: https://SEU-LOJA.myshopify.com/cart/VARIANT_ID:QUANTITY. Isso é útil para links rápidos de “Comprar” que abrem o carrinho com os itens. 
Shopify
Shopify Help Center

Storefront API: para experiência headless (criar/atualizar cart, gerar checkout URL), use a Storefront API (GraphQL) para criar cart e recuperar checkout URL. Use essa rota para validar inventário, puxar imagens e preços dinâmicos. 
Shopify

Recomendação (prática):

No Shopify Admin crie 3 SKUs/variants (packs 1,3,5) — facilita inventário e relatórios.

Se não quiser criar packs, construa cart permalink com VARIANT_ID:3 ou :5 para preencher o carrinho. 
Shopify Help Center

Se for usar Storefront API, o fluxo é: frontend cria cart → adiciona linhas → recupera checkoutUrl → pode redirecionar ao checkout (ou enviar para CartPanda step). 
Shopify

Integração com CartPanda (checkout)
Objetivo: criar sessão de checkout em CartPanda via API e redirecionar o usuário para o checkout hospedado da CartPanda. A documentação oficial do CartPanda descreve endpoints para criação de cart/checkout. 
dev.cartpanda.com
+1
dev.cartpanda.com
+1

Fluxo recomendado (seguro):

Frontend coleta seleção do usuário (kit 1/3/5) → POST para seu backend /create-cartpanda-checkout.

Backend valida estoque via Shopify API (opcional) e calcula preço final/desconto.

Backend chama CartPanda API POST /api/{shop-slug}/cart (ou endpoint de criação de checkout conforme docs) com itens + metas (utm, campaign) e recebe checkout_url. 
dev.cartpanda.com

Backend retorna checkout_url ao frontend → frontend redireciona para CartPanda (checkout final).

Registrar webhooks (CartPanda / Shopify) para reconciliar orders/inventory. 
dev.cartpanda.com
CartPanda Docs

Segurança: não exponha chaves CartPanda no frontend. Use chamadas server-side autenticadas (Bearer token).

Descontos / aplicação automática
Preferível criar desconto automático (Shopify Discount) ou configurar o bundle prices como variantes. Shopify tem ferramentas para gerenciar descontos e links promocionais; também é possível preencher o cart permalink com parâmetros de desconto quando suportado. 
Shopify Help Center
Shopify Community

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

Exemplo de link cart permalink Shopify:

https://seulojoshopify.myshopify.com/cart/VARIANT_ID:3 (adiciona 3 unidades do variant_id) — útil quando não criar packs. 
Shopify Help Center
popupsmart.com

Exemplo payload (pseudo) para CartPanda create cart (backend):

js
Copiar
Editar
// Node.js pseudo-code
const payload = {
  items: [
    { sku: "BOBBIE-1", quantity: 3, price: 119.60 }
  ],
  redirect_urls: { success: "https://seusite.com/obrigado", cancel: "https://seusite.com/carrinho" },
  metadata: { utm_source, campaign }
};
// POST to CartPanda API (server-side) with Bearer token => receive checkout_url
(Consultar docs CartPanda para campos exatos e autenticação). 
dev.cartpanda.com
+1
dev.cartpanda.com
+1

Provas sociais & compliance
Use apenas depoimentos reais. Se não houver feed de pedidos em tempo real, implemente toasts com dados reais ou use mensagens genéricas. Não falsifique números.

Eventos para tracking (GA4 / FB Pixel)
view_item (hero)

add_to_cart (quando o usuário clicar no CTA do card)

begin_checkout (ao ir para CartPanda checkout)

purchase (webhook/order)

timer_start, timer_cta_click, timer_expire

Checklist de entrega para Dev (prioridade)
Estrutura HTML/CSS responsiva com placeholders de imagens.

Implementar timer client-side com sessionStorage e IDs: bobbie-hero-timer / bobbie-buybar-timer / bobbie-promo-banner.

Pricing cards com lógica de destaque (3-pack).

Integração Shopify: escolher entre cart permalink ou Storefront API (dev deve confirmar com a equipe qual abordagem). 
Shopify
+1
Shopify
+1

Endpoint backend /create-cartpanda-checkout que valida e cria checkout CartPanda e retorna checkout_url. 
dev.cartpanda.com

Implementar popups/toasts de prova social (rotativo) e exit-intent modal.

SEO: JSON-LD Product/Offer + FAQ + OG tags.

Testes: mobile/desktop, cross-browser, pixel events, redirecionamento a CartPanda.

Citações / referências (leitura para dev)
Shopify — Cart permalinks / how to pre-load cart: documentação oficial. 
Shopify
Shopify Help Center

Shopify — Storefront API (cart management & checkout URL): store front docs. 
Shopify

CartPanda — API docs (create cart / create order). 
dev.cartpanda.com
+1
dev.cartpanda.com
+1

Shopify — Discounts management (automatic discounts / promote link). 
Shopify Help Center
Shopify Community

Entregáveis finais que eu posso gerar agora (opções)
HTML wireframe completo com placeholders + timer JS + markup de pricing cards + tags SEO (pronto para dev).

JSON com todo o conteúdo por seção (copy + assets + attributes) para importar num page-builder.

Exemplo de endpoint Node.js/Express para criar sessão CartPanda (pseudo-código que você ajusta com as chaves).

Diga qual desses prefere que eu gere primeiro — eu já começo a montar o HTML wireframe com todo o markup, o timer JS (8 min page-load), placeholders para chamadas ao backend (Shopify/CartPanda) e o JSON-LD pronto.
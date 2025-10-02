// Shopify Buy Button utilities
declare global {
  interface Window {
    ShopifyBuyUI: any;
  }
}

let productComponentInitialized = false;

export const initShopifyProductButton = () => {
  console.log('initShopifyProductButton chamado');
  console.log('ShopifyBuyUI disponível?', !!window.ShopifyBuyUI);
  console.log('Já inicializado?', productComponentInitialized);
  
  if (window.ShopifyBuyUI && !productComponentInitialized) {
    // Criar container permanente oculto
    const container = document.createElement('div');
    container.id = 'shopify-product-component';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '1px';
    container.style.height = '1px';
    container.style.overflow = 'hidden';
    container.style.opacity = '0';
    container.style.pointerEvents = 'none';
    document.body.appendChild(container);
    
    console.log('Container criado:', container);

    window.ShopifyBuyUI.createComponent('product', {
      id: '9989579768099',
      node: container,
      options: {
        product: {
          buttonDestination: 'modal',
          contents: {
            img: false,
            title: false,
            price: false,
            description: false,
            button: true
          },
          text: {
            button: 'ADICIONAR AO CARRINHO'
          },
          styles: {
            button: {
              'border-radius': '40px',
              'padding': '15px 28px',
              'background-color': '#78D6C6'
            }
          }
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true
          },
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': '100%',
                'margin-left': '0px',
                'margin-bottom': '0px'
              }
            },
            button: {
              'border-radius': '40px',
              'padding-left': '28px',
              'padding-right': '28px',
              'background-color': '#78D6C6'
            },
            title: {
              'font-size': '26px',
              'font-weight': 'bold',
              'color': '#333'
            },
            price: {
              'font-size': '22px',
              'color': '#4DA6FF',
              'font-weight': 'bold'
            }
          },
          text: {
            button: 'Adicionar ao carrinho'
          }
        },
        cart: {
          styles: {
            button: {
              'border-radius': '40px',
              'background-color': '#78D6C6'
            }
          },
          text: {
            title: 'CARRINHO',
            total: 'Subtotal',
            empty: 'CARRINHO VAZIO',
            notice: 'COLOQUE TODOS PRODUTOS QUE O DESCONTO JÁ SERÁ APLICADO',
            button: 'COMPRAR AGORA'
          }
        }
      }
    });

    productComponentInitialized = true;
    console.log('Componente Shopify criado!');
    
    // Verificar se botão foi criado após um tempo
    setTimeout(() => {
      const btn = container.querySelector('button');
      console.log('Botão renderizado?', !!btn);
      if (btn) {
        console.log('HTML do botão:', btn.outerHTML);
      } else {
        console.log('HTML do container:', container.innerHTML);
      }
    }, 2000);
  }
};

export const openShopifyCart = () => {
  if (window.ShopifyBuyUI) {
    window.ShopifyBuyUI.createComponent('cart', {
      options: {
        cart: {
          styles: {
            button: {
              'border-radius': '40px'
            }
          },
          text: {
            title: 'CARRINHO',
            total: 'Subtotal',
            empty: 'CARRINHO VAZIO',
            notice: 'COLOQUE TODOS PRODUTOS QUE O DESCONTO JÁ SERÁ APLICADO',
            button: 'COMPRAR AGORA'
          }
        }
      }
    });
  }
};

export const openShopifyProduct = () => {
  console.log('openShopifyProduct chamado!');
  
  // Aguardar inicialização se necessário
  if (!productComponentInitialized && window.ShopifyBuyUI) {
    console.log('Inicializando primeiro...');
    initShopifyProductButton();
    
    // Aguardar renderização e tentar clicar
    setTimeout(() => {
      openShopifyProduct(); // Tenta novamente recursivamente
    }, 2500);
    return;
  }
  
  const container = document.getElementById('shopify-product-component');
  console.log('Container encontrado?', !!container);
  
  if (container) {
    // O Shopify renderiza dentro de um iframe
    const iframe = container.querySelector('iframe') as HTMLIFrameElement;
    console.log('Iframe encontrado?', !!iframe);
    
    if (iframe) {
      try {
        // Acessar o documento dentro do iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        console.log('IframeDoc acessível?', !!iframeDoc);
        
        if (iframeDoc) {
          const button = iframeDoc.querySelector('button');
          console.log('Botão no iframe encontrado?', !!button);
          
          if (button) {
            console.log('Clicando no botão dentro do iframe...');
            button.click();
          } else {
            console.error('Botão não encontrado dentro do iframe. HTML:', iframeDoc.body.innerHTML);
            
            // Retry após delay
            setTimeout(() => {
              const retryButton = iframeDoc.querySelector('button');
              if (retryButton) {
                console.log('Botão encontrado na segunda tentativa!');
                retryButton.click();
              }
            }, 1000);
          }
        }
      } catch (error) {
        console.error('Erro ao acessar iframe:', error);
      }
    } else {
      console.error('Iframe não encontrado. HTML:', container.innerHTML);
      
      // Retry
      setTimeout(() => {
        openShopifyProduct();
      }, 1000);
    }
  }
};

export const addToCart = () => {
  console.log('addToCart chamado!');
  openShopifyProduct();
};
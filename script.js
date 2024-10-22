// Função para adicionar a classe 'zoomed' quando a imagem entra na tela
window.addEventListener('scroll', function() {
  const images = document.querySelectorAll('.zoom-on-scroll');
  
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Verifica se a imagem está visível na tela (50% visível para ativar o zoom)
    if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25) {
      image.classList.add('zoomed');
    } else {
      image.classList.remove('zoomed');
    }
  });
});

// Debounce para otimizar o scroll e evitar chamadas constantes
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Adiciona o debounce para a função de scroll, melhorando o desempenho
window.addEventListener('scroll', debounce(function() {
  const images = document.querySelectorAll('.zoom-on-scroll');
  
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25) {
      image.classList.add('zoomed');
    } else {
      image.classList.remove('zoomed');
    }
  });
}));
document.addEventListener('DOMContentLoaded', function() {
  const coleteImage = document.getElementById('colete-image');
  const coleteDescription = document.getElementById('colete-description');

  // Adiciona evento de clique na imagem do colete
  coleteImage.addEventListener('click', function() {
    coleteDescription.classList.toggle('active'); // Alterna a exibição da descrição
  });
});
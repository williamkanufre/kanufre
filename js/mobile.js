// Seleciona o contêiner do carrossel e as imagens
const carouselContainer = document.getElementById('imgs-founder');
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

// Variáveis para armazenar a posição inicial e final do toque
let startX = 0;
let endX = 0;

// Função para mostrar a imagem baseada no índice atual
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Adiciona o evento de início do toque
carouselContainer.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; // Pega a posição inicial do toque
});

// Adiciona o evento de término do toque
carouselContainer.addEventListener('touchend', (event) => {
    endX = event.changedTouches[0].clientX; // Pega a posição final do toque
    handleSwipe();
});

// Função para manipular o deslize
function handleSwipe() {
    if (startX > endX + 50) {
        // Deslizou para a esquerda
        currentIndex = (currentIndex + 1) % images.length; // Próxima imagem
        showImage(currentIndex);
    } else if (startX < endX - 50) {
        // Deslizou para a direita
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Imagem anterior
        showImage(currentIndex);
    }
}

// Mostra a imagem inicial
showImage(currentIndex);

document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const imgs = document.querySelectorAll('.expandable-desktop');
    const backdrop = document.getElementById('backdrop');
    const expandedContainer = document.getElementById('expandedContainer');
    const expandedImage = document.getElementById('expandedImage');
    const expandWidth = '350px';  // Ajuste a largura conforme necessário
    const expandHeight = '500px'; // Ajuste a altura conforme necessário

    // Função para trocar a imagem no carrossel normal
    function changeImage(direction) {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    // Função para expandir a imagem
    function expandImage(index) {
        currentImageIndex = index;
        expandedImage.src = images[currentImageIndex].src;
        expandedContainer.classList.add('visible');
        backdrop.classList.add('visible');
    }

    // Função para fechar a imagem expandida
    function closeExpandedImage() {
        expandedContainer.classList.remove('visible');
        backdrop.classList.remove('visible');
        
        // Garantindo que as imagens expandíveis sejam redefinidas
        imgs.forEach(img => {
            img.classList.remove('expanded');
            img.style.width = '';  
            img.style.height = ''; 
        });
    }

    // Função para trocar a imagem no modo expandido
    function changeExpandedImage(direction) {
        currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
        expandedImage.src = images[currentImageIndex].src;
    }

    // Adiciona o evento de clique para expandir as imagens
    imgs.forEach((img, index) => {
        img.addEventListener('click', () => {
            if (window.innerWidth >= 768) {  // Verifica se a largura da janela é de desktop
                img.classList.add('expanded');
                backdrop.classList.add('visible');
                img.style.width = expandWidth;  
                img.style.height = expandHeight; 
                expandImage(index);  // Expandir a imagem na visualização expandida
            }
        });
    });

    // Adiciona o evento de clique ao backdrop para fechar a visualização
    backdrop.addEventListener('click', closeExpandedImage);

    // As setas para a navegação de imagens expandidas e normais
    window.changeImage = changeImage;
    window.changeExpandedImage = changeExpandedImage;
    window.closeExpandedImage = closeExpandedImage;

    // Também adiciona a funcionalidade das setas do carrossel ao clique
    images.forEach((img, index) => {
        img.addEventListener('click', () => expandImage(index));
    });
});

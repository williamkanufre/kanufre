document.addEventListener('DOMContentLoaded', function() {
    const certificates = document.querySelectorAll('.img-certificate-mtc');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    let currentIndex = 0;

    // Função para atualizar a posição das imagens
    function updateImages() {
        certificates.forEach((img, i) => {
            img.classList.remove('active', 'behind', 'back');
            
            // Definir a imagem ativa
            if (i === currentIndex) {
                img.classList.add('active');
            } 
            // Definir a imagem logo atrás
            else if (i === (currentIndex + 1) % certificates.length) {
                img.classList.add('behind');
            } 
            // Definir a imagem no fundo
            else {
                img.classList.add('back');
            }
        });
    }

    // Iniciar com a posição correta
    updateImages();

    // Navegar para a esquerda
    arrowLeft.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = certificates.length - 1; // Voltar para a última imagem
        }
        updateImages();
    });

    // Navegar para a direita
    arrowRight.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % certificates.length; // Avançar para a próxima imagem
        updateImages();
    });
});

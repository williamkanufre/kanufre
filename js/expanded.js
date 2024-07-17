document.addEventListener('DOMContentLoaded', function() {
    const imgs = document.querySelectorAll('.expandable');
    const backdrop = document.getElementById('backdrop');
    const expandWidth = '350px';  // Ajuste a largura conforme necessário
    const expandHeight = '500px'; // Ajuste a altura conforme necessário

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('expanded');
            backdrop.classList.add('visible');
            img.style.width = expandWidth;  // Define a largura da imagem
            img.style.height = expandHeight; // Define a altura da imagem
        });
    });

    backdrop.addEventListener('click', () => {
        imgs.forEach(img => {
            img.classList.remove('expanded');
            img.style.width = '';  // Reseta o tamanho da imagem
            img.style.height = ''; // Reseta o tamanho da imagem
        });
        backdrop.classList.remove('visible');
    });
});

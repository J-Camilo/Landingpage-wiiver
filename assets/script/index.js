document.addEventListener('DOMContentLoaded', function () {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile');
    }

    const imgIz = document.querySelector('.img-iz');
    const imgDer = document.querySelector('.img-der');
    const brandName = document.querySelector('.brand-name');
    const contentLogo = document.querySelector('.content-logo');
    
    // Oculta inicialmente el nombre de la marca
    brandName.style.display = 'none';

    // Muestra los elementos después de un pequeño retraso
    setTimeout(function() {
        // Mostrar el nombre de la marca y los elementos visibles
        brandName.style.display = 'flex';
        contentLogo.classList.add('show-elements');

        // Espera 1 segundo para comenzar a separar los elementos
        setTimeout(function() {
            contentLogo.classList.add('separate-elements');
        }, 1000);
    }, 500); // Espera 0.5 segundos antes de mostrar los elementos
});

document.addEventListener('DOMContentLoaded', function () {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile');
    }
    const brandName = document.querySelector('.brand-name');
    const contentLogo = document.querySelector('.content-logo');
    brandName.style.display = 'none';

    setTimeout(function () {
        brandName.style.display = 'flex';
        contentLogo.classList.add('show-elements');

        setTimeout(function () {
            contentLogo.classList.add('separate-elements');
        }, 1000);
    }, 500);

    const sections = [
        'content/contenido1.html',
        'content/contenido2.html',
        'content/contenido5.html',
        'content/contenido3.html',
        'content/contenido4.html',
    ];

    const contentDiv = document.getElementById('content');
    
    // Preload images
    const preloadImages = [
        '/assets/img/svg/logosvg.svg',
        '/assets/img/svg/idea.svg',
        '/assets/img/svg/setings.svg',
        '/assets/img/svg/twohands.svg'
    ];

    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    sections.forEach(section => {
        fetch(section)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                const sectionElement = document.createElement('div');
                sectionElement.innerHTML = data;
                contentDiv.appendChild(sectionElement);

                sectionElement.querySelectorAll('.hoverContentExplorer').forEach(function (element) {
                    element.addEventListener('mouseover', function () {
                        const imagePath = this.getAttribute('data-image');
                        const imageTable = document.querySelector('.imageTable');
                        const tempImage = new Image();

                        sectionElement.querySelectorAll('.hoverContentExplorer').forEach(function (el) {
                            el.classList.remove('active');
                        });

                        element.classList.add('active');

                        tempImage.onload = function () {
                            imageTable.src = imagePath;
                            imageTable.classList.remove('fade-out');
                            imageTable.classList.add('fade-in');
                        };

                        imageTable.classList.remove('fade-in');
                        imageTable.classList.add('fade-out');

                        tempImage.src = imagePath;
                    });

                    element.addEventListener('mouseout', function () {
                        // No action needed here to maintain the last image
                    });
                });
            })
            .catch(error => console.error('Error cargando la sección:', error));
    });
});

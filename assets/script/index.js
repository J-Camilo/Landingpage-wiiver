    let lastSubmissionTime = 0;
    document.addEventListener('DOMContentLoaded', function () {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            document.body.classList.add('mobile');
        }

        const imgIz = document.querySelector('.contenido1');
        const imgDer = document.querySelector('.img-der');
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
            'content/contenido5.html',
            'content/contenido2.html',
            'content/contenido3.html',
            'content/contenido4.html',
        ];

        const contentDiv = document.getElementById('content');

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
                })
                .catch(error => console.error('Error cargando la sección:', error));
        });

    });

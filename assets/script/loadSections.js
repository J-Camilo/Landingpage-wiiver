document.addEventListener('DOMContentLoaded', function () {
    const sections = [
        // 'content/contenido1.html',
        'content/contenido2.html',
        'content/contenido3.html',
        // 'content/contenido4.html',
        'content/contenido5.html'
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
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
            // 'content/contenido4.html',
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

        const sendButton = document.getElementById('sendButtons');

        sendButton.addEventListener('click', function () {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
    
            if (!name || !email || !phone || !message) {
                showSuccessAlert('Todos los campos son obligatorios.');
                return;
            }
    
            const now = Date.now();
            const timeSinceLastSubmission = now - lastSubmissionTime;
            if (timeSinceLastSubmission < 3600000) {
                showSuccessAlert('Por favor espera una hora antes de enviar otro correo.');
                return;
            }
    
            const templateParams = {
                to_name: name,
                from_name: name,
                from_email: email,
                phone_number: phone,
                message: message,
            };
    
            lastSubmissionTime = now; // Actualiza el tiempo de la última solicitud
    
            emailjs.send('service_i4al7zg', 'template_e4uif2u', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showSuccessAlert('Correo enviado exitosamente!');
                }, function (error) {
                    console.log('FAILED...', error);
                    showSuccessAlert('Tuvimos un problema al enviar el correo.');
                });
        });
    
        function showSuccessAlert(message) {
            const alertElement = document.createElement('div');
            alertElement.classList.add('custom-alert');
            alertElement.textContent = message;
    
            const alertContainer = document.getElementById('alert-container');
            alertContainer.appendChild(alertElement);
    
            setTimeout(() => {
                alertElement.style.opacity = '0'; 
                setTimeout(() => {
                    alertContainer.removeChild(alertElement); 
                }, 300);
            }, 3000); 
        }
    });

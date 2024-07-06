document.addEventListener('DOMContentLoaded', function () {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.classList.add('mobile');
    }

    const imgIz = document.querySelector('.img-iz');
    const imgDer = document.querySelector('.img-der');
    const brandName = document.querySelector('.brand-name');
    const contentLogo = document.querySelector('.content-logo');

    brandName.style.display = 'none';

    setTimeout(function() {
        brandName.style.display = 'flex';
        contentLogo.classList.add('show-elements');

        setTimeout(function() {
            contentLogo.classList.add('separate-elements');
        }, 1000);
    }, 500);
});


document.querySelector(".day-night input").addEventListener("change", () => {
    document.querySelector("body").classList.add("toggle");
    setTimeout(() => {
      document.querySelector("body").classList.toggle("light");
  
      setTimeout(
        () => document.querySelector("body").classList.remove("toggle"),
        10
      );
    }, 5);
  });
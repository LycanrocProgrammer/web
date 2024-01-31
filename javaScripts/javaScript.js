//Creacción de observadores (Uno para cada elemento que precise de una animación cuando se renderice en la pantalla del usuario)
const animaciones = ['slideInFromLeft', 'slideInFromRight', 'slideInFromBottom'];
const targets = ['.card1', '.card2', '.skills'];

targets.forEach((target, index) => {

    let observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                let targetElement = entry.target;
                targetElement.classList.add(animaciones[index]);

                targetElement.addEventListener('animationend', () => {

                    let skillBars = targetElement.querySelectorAll('.skills-bar .bar .progress-line span');

                    skillBars.forEach(bar => {

                        bar.style.animation = 'animate 1s cubic-bezier(1, 0, 0.5, 1) forwards';

                    });

                });

            }

        });

    }, { threshold: 0.1 });

    observer.observe(document.querySelector(target));

});

function descargarPDF() {

    var nombreArchivo = 'Juan_Luis_Casado_Lopez_CV.pdf';
    var rutaArchivo = '../' + nombreArchivo;
    var enlace = document.createElement('a');
    enlace.href = rutaArchivo;
    enlace.download = nombreArchivo;
    enlace.click();

}
const slideswhow = document.getElementById('slideshow');
const slides = document.getElementById('slides');
const slide = document.getElementById('slide');
const atras = document.getElementById('atras');
const adelante = document.getElementById('adelante');

slides.style.transform = `translateX(-600px)`;
slides.firstElementChild.style.opacity = `0`;
slides.lastElementChild.style.opacity = `0`;


atras.addEventListener('click', () => {

    const primerSlide = slides.children[0];
    slides.style.opacity = `1`
    slides.appendChild(primerSlide);

    const borrarIzq = slides.firstElementChild;
    const borrarDer = slides.lastElementChild;
    const centro = slides.children[1];

    centro.style.transition = `ease-in 1000ms all`;
    centro.style.opacity = `1`;
    borrarIzq.style.transition = `ease-in 0ms all`;
    borrarIzq.style.opacity = `0`;
    borrarDer.style.opacity = `0`;
})

adelante.addEventListener('click', () => {
    
    slides.insertBefore(slides.lastElementChild, slides.firstElementChild);
    
    const borrarIzq = slides.firstElementChild;
    const borrarDer = slides.lastElementChild;
    const centro = slides.children[1];
    
    centro.style.transition = `ease-in 1000ms all`;
    centro.style.opacity = `1`;
    borrarIzq.style.opacity = `0`;
    borrarDer.style.transition = `ease-in 0ms all`; 
    borrarDer.style.opacity = `0`;
})





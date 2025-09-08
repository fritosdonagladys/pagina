const slideswhow = document.getElementById('slideshow');
const slideshowV = slideswhow.offsetWidth;
const slides = document.getElementById('slides');
const slide = document.getElementById('slide');
const atras = document.getElementById('atras');
const adelante = document.getElementById('adelante');

console.log(slideshowV);

if (slideshowV == 375){
    slides.style.transform = `translateX(-375px)`;    
} else {
    slides.style.transform = `translateX(-600px)`;    
}


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


const iconoMenu = document.querySelector('.iconoMenuImg');
const miniMenu = document.querySelector('.nav');
const cerrarMenu = document.querySelector('.cerrarMenu');

iconoMenu.addEventListener('click', () => {
    console.log("hola");
    
    miniMenu.style.transition = `ease-in 800ms all`;
    miniMenu.style.left ="0px";
    iconoMenu.style.transition = `ease-in-out 500ms all`;
    iconoMenu.style.opacity ="0";
})

cerrarMenu.addEventListener('click', () => {
    console.log("hola");
    
    miniMenu.style.transition = `ease-in 800ms all`;
    miniMenu.style.left ="400px";
    iconoMenu.style.transition = `ease-in-out 1000ms all`;
    iconoMenu.style.opacity ="1";
})

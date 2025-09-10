const iconoMenu = document.querySelector('.iconoMenuImg');
const miniMenu = document.querySelector('.nav');
const cerrarMenu = document.querySelector('.cerrarMenu');

iconoMenu.addEventListener('click', () => {
    console.log("hola");
    
    miniMenu.style.transition = `ease-in-out 800ms all`;
    miniMenu.style.top ="0px";
    iconoMenu.style.transition = `ease-in-out 500ms all`;
    iconoMenu.style.opacity ="0";
})

cerrarMenu.addEventListener('click', () => {
    console.log("hola");
    
    miniMenu.style.transition = `ease-in 800ms all`;
    miniMenu.style.top ="-1600px";
    iconoMenu.style.transition = `ease-in-out 1000ms all`;
    iconoMenu.style.opacity ="1";
})


function icono(){

    var celNumero = "+573154882038"

    var url = "https://wa.me/" + celNumero + "?text="
    +"¡Buenos días!";

    window.open(url, '_blank').focus();

}
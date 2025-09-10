function agregarAlCarritoClicked(event) {
    var item = event.target.parentElement;
    var titulo = item.getElementsByClassName('producto')[0].innerText;
    var precio = item.getElementsByClassName('valor')[0].innerText;

    cantidad = 1;

    const total = parseFloat(precio) * cantidad;
    agregarItemAlCarrito(titulo, precio, cantidad, total);
    event.preventDefault();

}

function agregarItemAlCarrito(titulo, precio, cantidad, total) {

    var item = document.createElement('tr');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('listaProductos')[0];
    var itemCarritoContenido = `

                <td class="canti" id="canti">${cantidad}</td>
                <a onclick="sumarCantidad(event)" id="mas">+</a>
                <a onclick="restarCantidad(event)" id="menos">-</a>                    
                <a onclick="borrarItem(event)" id="borra">x</a>
                <td class="titu">${titulo}</td>
                <td class="preci">${precio}</td>
                <td class="tota">${total}</td>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    var casiFin = document.getElementById('domicilio').innerHTML;
    var casiFinal = parseFloat(casiFin);

    const precioFinal = total + casiFinal;

    var itemPrecioTotal = document.getElementById('domicilio');
    itemPrecioTotal.innerText = precioFinal;
}

//Aumento en uno la cantidad del elemento seleccionado
function sumarCantidad(event) {
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;

    console.log('listo');
    var cantidadCasi = selector.getElementsByClassName('canti')[0].innerText;
    var precio = selector.getElementsByClassName('preci')[0].innerText;
    var cantidadActual = Number(cantidadCasi);

    var precioCasi = Number(precio);

    cantidadActual++;
    console.log(cantidadActual);

    var totalActual = cantidadActual * precioCasi;

    selector.getElementsByClassName('canti')[0].innerHTML = cantidadActual;
    selector.getElementsByClassName('tota')[0].innerHTML = totalActual;

   //*

    var itemPrecioTotal = document.getElementById('domicilio').innerHTML;
    var final = Number(itemPrecioTotal);
    
    
    const finalFinal = precioCasi + final;
    console.log('precio total ' +finalFinal);
    
    var itemPrecioTotal = document.getElementById('domicilio');
    itemPrecioTotal.innerText = finalFinal;
    event.preventDefault();

}

//Resto en uno la cantidad del elemento seleccionado
function restarCantidad(event) {
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;

    console.log('listo');
    var cantidadCasi = selector.getElementsByClassName('canti')[0].innerText;
    var precio = selector.getElementsByClassName('preci')[0].innerText;
    var cantidadActual = Number(cantidadCasi);

    var precioCasi = Number(precio);

    cantidadActual--;

    if(cantidadActual<=0){
        borrarItem(event);
        return
    }

    console.log(cantidadActual);

    var totalActual = cantidadActual * precioCasi;

    selector.getElementsByClassName('canti')[0].innerHTML = cantidadActual;
    selector.getElementsByClassName('tota')[0].innerHTML = totalActual;

    //*

    var itemPrecioTotal = document.getElementById('domicilio').innerHTML;
    var final = Number(itemPrecioTotal);
    
    
    const finalFinal = final - precioCasi;
    console.log('precio total ' + finalFinal);
    
    var itemPrecioTotal = document.getElementById('domicilio');
    itemPrecioTotal.innerText = finalFinal;
    event.preventDefault();
}


//Elimino Cesta de compras
function eliminarCesta() {

    const contenedor = document.getElementById('listaProductos');
    contenedor.replaceChildren();

    var total = document.getElementById('domicilio');
    total.innerHTML = 0;

}

//Elimino el item seleccionado de la cesta de compras
function borrarItem(event){
    
    //*
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    var total = selector.getElementsByClassName('tota')[0].innerText;
    var total2 = Number(total);



    var itemPrecioTotal = document.getElementById('domicilio').innerHTML;
    var final = Number(itemPrecioTotal);  
    const finalFinal = final - total2;

    var itemPrecioTotal = document.getElementById('domicilio');
    itemPrecioTotal.innerText = finalFinal;

    //*
    
    buttonClicked.parentElement.remove();

    event.preventDefault();

   
}


function enviarWhatsapp(event) {

    var productos = document.getElementById('listaProductos');
   // console.log(productos.children.length);
   //  console.log(productos.children[3]);

   var pedidoEnviar = " ";
     
    for(var i=0; i< productos.children.length;i++){
        var cantidad = productos.getElementsByClassName('canti')[i].innerText;
        var producto = productos.getElementsByClassName('titu')[i].innerText;
        var total = productos.getElementsByClassName('tota')[i].innerText;
        //console.log(cantidad + " " + producto + " $" + total);
        
        var pedido = cantidad + " " + producto + " $" + total + "; ";
        pedidoEnviar = pedidoEnviar + pedido;
    }

    console.log(pedidoEnviar);



    const celNumero = 573154882038;

    var url = "https://wa.me/" + celNumero + "?text="
        + "Buenos días. Me puede enviar por favor: %0a"
        +  pedidoEnviar + "%0a"
        + "Esto es un ejemplo";

    window.open(url, '_blank').focus();
    eliminarCesta();

    event.preventDefault();


}

function icono(){

    var celNumero = "+573154882038"

    var url = "https://wa.me/" + celNumero + "?text="
    +"¡Buenos días!";

    window.open(url, '_blank').focus();

}

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

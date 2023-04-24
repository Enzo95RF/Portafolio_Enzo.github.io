//animación aparición de pagina


$(function() {
    
    $("body").hide() .fadeIn (3000)
    $(".subtitulo").hide() .fadeIn (8000)
    $("#navbar").hide() .slideToggle(1500)
        
        
});



//animación del titulo
let animado = document.querySelectorAll (".t-portfolio");
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i<animado.length; i++ ) {
        let alturaAnimado = animado [i].offsetTop;
        if(alturaAnimado -50 < scrollTop) {
            animado [i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', mostrarScroll);

//animación scroll menú
var  scroll  =  new  SmoothScroll ( '[data-scroll]', {   
    speed: 1000, 
    easing: 'easeInOutCubic',
    offset: 0,
    callback: function (anchor,toggle){}
}); 



//zoom imagen

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});


const html = document.querySelector('html');
const titulo = document.querySelector('.titulo');
let saludo = "Hola ";
let presen = " soy Enzo";
let nombre = prompt("Ingresa tu nombre para continuar");
if(nombre){
    titulo.textContent = saludo + nombre + presen
}else{
    titulo.textContent = saludo + presen
}






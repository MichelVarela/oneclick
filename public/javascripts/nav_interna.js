window.addEventListener('load',()=>{

    let $burguerDesplegado = document.querySelector('.burguer-desplegado');
    let $categorias = document.querySelector('.navegacion-categoria');
    let $oferta = document.querySelector('.navegacion-oferta');
    let $pregunta = document.querySelector('.navegacion-pregunta');
    let $nosotros = document.querySelector('.navegacion-nosotros');
    let $mediosPago = document.querySelector('.navegacion-medios-pago');
    let $entregas = document.querySelector('.navegacion-entregas');
    let $sombreado = document.querySelector('.sombreado');

    $categorias.addEventListener('click',()=>{
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
        $sombreado.classList.remove('on-sombreado');
    })

    $oferta.addEventListener('click',()=>{
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
        $sombreado.classList.remove('on-sombreado');
    })

    $pregunta.addEventListener('click',()=>{
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
        $sombreado.classList.remove('on-sombreado');
    })

    $nosotros.addEventListener('click',()=>{
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
        $sombreado.classList.remove('on-sombreado');
    })

    $mediosPago.addEventListener('click',()=>{
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
        $sombreado.classList.remove('on-sombreado');
    })

    $entregas.addEventListener('click',()=>{
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
        $sombreado.classList.remove('on-sombreado');
    })
})
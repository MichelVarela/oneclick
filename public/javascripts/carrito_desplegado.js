window.addEventListener('load',()=>{

    let $botonCarrito = document.querySelector('.carrito');
    let $carritoDesplegado = document.querySelector('.carrito-desplegado')
    let $carritoCierre = document.querySelector('.icon-cierre-carrito')
    let $burguerDesplegado = document.querySelector('.burguer-desplegado');
    let $sombreado = document.querySelector('.sombreado');

    $botonCarrito.addEventListener('click',()=>{

        $carritoDesplegado.classList.toggle('on-carrito');
        $sombreado.classList.add('on-sombreado');
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
    })

    $carritoCierre.addEventListener('click',()=>{
        $carritoDesplegado.classList.remove('on-carrito');
        $sombreado.classList.remove('on-sombreado');
    })

    $sombreado.addEventListener('click',()=>{
        $carritoDesplegado.classList.remove('on-carrito');
        $sombreado.classList.remove('on-sombreado');
    })
})
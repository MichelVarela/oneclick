window.addEventListener('load',()=>{

    let $optionBusqueda = document.querySelector('.icon-header .busqueda');
    let $search = document.querySelector('.search-flotante');
    let $burguerDesplegado = document.querySelector('.burguer-desplegado');
    let $sombreado = document.querySelector('.sombreado');

    $optionBusqueda.addEventListener('click',()=>{
        
        $search.classList.toggle('on-search-flotante');
        $sombreado.classList.add('on-sombreado');
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
    })

    $sombreado.addEventListener('click',()=>{
        $search.classList.remove('on-search-flotante');
        $sombreado.classList.remove('on-sombreado');
    })

})
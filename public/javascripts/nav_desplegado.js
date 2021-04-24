window.addEventListener('load',()=>{
    let $burguer = document.querySelector('.content-burguer');
    let $burguerDesplegado = document.querySelector('.burguer-desplegado');
    let $iconCierre = document.querySelector('.icon-cierre');
    let $sombreado = document.querySelector('.sombreado');

    $burguer.addEventListener('click',()=>{

        $burguerDesplegado.classList.toggle('on-burguer-desplegado');
        $sombreado.classList.toggle('on-sombreado');

    })

    $iconCierre.addEventListener('click',()=>{
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
        $sombreado.classList.remove('on-sombreado');
    })

    $sombreado.addEventListener('click',()=>{
        $burguerDesplegado.classList.remove('on-burguer-desplegado');
        $sombreado.classList.remove('on-sombreado');
    })

})
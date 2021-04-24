window.addEventListener('load',()=>{

    let $textoAnimado = document.querySelector('.banner .content-texto-animado');

    setTimeout(()=>{
        $textoAnimado.classList.add('on-animacion');
    },1000);

})
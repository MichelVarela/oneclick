window.addEventListener('load',()=>{
    let $botonUser = document.querySelector('.usuario');
    let $user = document.querySelector('.user-flotante');
    let $burguerDesplegado = document.querySelector('.burguer-desplegado');
    let $sombreado = document.querySelector('.sombreado');

    $botonUser.addEventListener('click',()=>{

        let $userHeigth = `${$user.scrollHeight}px`;/* con scrollHeight tomamos el alto original de la caja */

        /* console.log($userHeigth) */

        $user.classList.toggle('on-user-flotante');
        $user.style.maxHeight = $userHeigth;
        $sombreado.classList.add('on-sombreado');
        $burguerDesplegado.classList.remove('on-burguer-desplegado');

    })

    $sombreado.addEventListener('click',()=>{
        $user.classList.remove('on-user-flotante');
        $user.style.maxHeight = null;
        $sombreado.classList.remove('on-sombreado');
    })
})
window.addEventListener('load',()=>{
    
    let $categorias = document.querySelectorAll('#preguntas-frecuentes .orden-cajas article');
    let $preguntas = document.querySelectorAll('#preguntas-frecuentes .consultas article');
    let $categoriaActive
    
    $categorias.forEach(category=>{/* itero categorias */
        category.addEventListener('click',(e)=>{/* por cada categoria en la que haga click, le quito la class ACTIVE si la tiene y si no se la agrego en la linea 12 */
            $categorias.forEach(element=>{/* itero categorias nuevamente y le quito la class ACTIVE a todas las demas */
                element.classList.remove('active')
            })
            
            e.target.classList.toggle('active')
            $categoriaActive = category.dataset.categoria;/* contiene la data-categoria de cada elemento al hacer click */
            
            $preguntas.forEach(question=>{
                if(question.dataset.categoria == $categoriaActive){/* itero las preguntas y si el dataset coincide con el $categoriaActive que lo muestre si no que lo oculte CLASS ACTIVO */
                    question.classList.add('activo')
                }else{
                    question.classList.remove('activo')
                }
            })
        })
    })
    
    /* *************************************************** */
    
    let $cajaPreguntas = document.querySelectorAll('#preguntas-frecuentes .consultas article .respuesta');
    /* let $rotate = document.querySelectorAll('#preguntas-frecuentes .consultas article .respuesta .pregunta i'); */
    
    $cajaPreguntas.forEach(element=>{
        element.addEventListener('click',()=>{
            
            let $respuesta = element.querySelector('p')/* podemos tomar el querySelector del elemento que traimos al iterar */
            let $rotate = element.querySelector('.pregunta i');/* del elemento iterado entro a su clase hija .PREGUNTA I */


            if(!$respuesta.style.maxHeight){
                $respuesta.style.maxHeight = `${$respuesta.scrollHeight}px`;
                $respuesta.style.opacity = 1;
                element.style.border = '2px solid red';
                $rotate.classList.add('on-rotate');
            }else{
                $respuesta.style.maxHeight = null;
                $respuesta.style.opacity = null;
                element.style.border = null;
                $rotate.classList.remove('on-rotate');
            }
            
        })
    })
    
})
window.addEventListener('load',()=>{
    
    /* para seleccionar TODOS los gliders */
    /* let $glider = document.querySelectorAll('.glider');
    
    $glider.forEach(element=>{
        new Glider(element, {
            slidesToShow: 1.3,
            slidesToScroll: 1,
        }); 
    }) */
    
    new Glider(document.querySelector('.glider-categorias'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.prev-categorias',
            next: '.next-categorias'
        },
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1326,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    
                }
            },
        ]
    });
    
    new Glider(document.querySelector('.glider-ofertas'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: {
            prev: '.prev-ofertas',
            next: '.next-ofertas'
        },
        responsive: [
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
        ]
    });
    
})
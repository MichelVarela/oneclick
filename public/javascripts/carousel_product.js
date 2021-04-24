window.addEventListener('load',()=>{
  
  let $glider = document.querySelectorAll('.glider');

  $glider.forEach(element=>{
    new Glider(element, {
      slidesToShow: 1.2,
      slidesToScroll: 1.2,
    });
  })

  
  /* new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  }); */
})
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'  
   
}

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
   
}

const swiper = new Swiper('.slider-wrapper', {
 
  loop: true,
   grabCursor: true,  
  spaceBetween:30,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 // responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }
  }

});






let previewContainer = document.querySelector('.section-preview');
let previewBox = previewContainer.querySelectorAll('.preview');
let closeIcon = previewContainer.querySelector('.fa-times'); // select close button

document.querySelectorAll('.posters-wrapper .poster').forEach(product => {
    product.onclick = () => {
       previewContainer.classList.add('active'); // instead of style.display
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            preview.classList.remove('active'); // remove active from others
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

// close popup on click ❌
closeIcon.onclick = () => {
    previewContainer.classList.remove('active');
    previewBox.forEach(preview => preview.classList.remove('active'));
};



// other pages ********************************************************









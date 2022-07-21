searchForm=document.querySelector('.searchform');

document.querySelector('#searchbtn').onclick =() =>{
    searchForm.classList.toggle('active');
}

let loginForm=document.querySelector('.loginform');

document.querySelector('#loginbtn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#closeloginbtn').onclick = () =>{
    loginForm.classList.remove('active');
}






window.onscroll = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header2').classList.remove('active');
    }
}


window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header2').classList.remove('active');
    }
}


var swiper = new Swiper(".bookslider", {
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
         1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".fslider", {
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
         1024: {
        slidesPerView: 4,
      },
    },
  });


  var swiper = new Swiper(".arrislider", {
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
         1024: {
        slidesPerView: 3,
      },
    },
  });



  
  var swiper = new Swiper(".reviewslider", {
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
         1024: {
        slidesPerView: 3,
      },
    },
  });



  var swiper = new Swiper(".blogslider", {
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
         1024: {
        slidesPerView: 3,
      },
    },
  });










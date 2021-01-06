$(function(){

  $('.presentation__slider').slick({
    infinite: false,
    prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
    nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
  });

  $('.accordion__title').on('click',function(){

    $('.accordion__item').removeClass('accordion__item--active');
    $(this).parent().addClass('accordion__item--active');
  });

  $(".menu__btn").click(function() {
    $('.menu__btn').toggleClass("menu__btn--active");
    $('.menu__list').toggleClass("menu__list--active");
    });

      $(".menu__list-link").click(function() {
    $('.menu__btn').removeClass("menu__btn--active");
    $('.menu__list').removeClass("menu__list--active");
    });

      $("a").on("click", function (event) {
    if($(this).attr('href').indexOf('#') != -1){ 
			event.preventDefault(); 
            let href = $(this).attr('href').replace('#', ''); 
			
			if($('#'+href).length > 0){ 
            	let tophref = $('body').find('#'+href).offset().top; 
            	$('html, body').animate({scrollTop: tophref}, 800); 
			}
    }
    
});
$('#form').validate ( {
  rules: {
    email: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minlength:3
    }
  },
  messages: {
    email: {
      required: "Введите email!",
      email: "Введите корректный email!"
    },
    name: {
      required: "Введите имя!",
      minlength:"Длина имени должна быть не менее 3-х символов"
    }
  },
  highlight: function (element) {
    $(element).addClass('invalid');
                
  },
    unhighlight: function (element) {
    $(element).removeClass('invalid');
                
  },
  submitHandler: function() {
    alert("Заявка отправлена, оператор свяжется с Вами в ближайшее время.");
    $('.input').val("");
    $('.textarea').val("");
  }
 
});


 });


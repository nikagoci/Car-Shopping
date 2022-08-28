mybutton = document.getElementById("myBtn");
 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


    $(document).ready(function(){

    /* For the stick navigation */
    var waypoint = new Waypoint({
        element: document.querySelector('.section-options'),
        handler: function(direction) {
          if(direction == "down"){
              $('nav').addClass('stick');
          }else{
              $('nav').removeClass('stick');
          }
        },
        offset: 60
      });


    /* Scroll on buttons */
    $('.js1').click(function(){
      $('html, body').animate({scrollTop: $('.section-shop').offset().top - 50}, 1000);
    });

    $('.sada').click(function(){
      $('html, body').animate({scrollTop: $('.section-shop').offset().top - 50}, 1000);
    });

    $('.js2').click(function(){
      $('html, body').animate({scrollTop: $('.section-service').offset().top - 50}, 1000);
    });

    $('.nav1').click(function(){
        $('html, body').animate({scrollTop: $('.section-options').offset().top - 50}, 1000);
    });

    $('.nav2').click(function(){
        $('html, body').animate({scrollTop: $('.section-shop').offset().top - 50}, 1000);
    });

    $('.nav3').click(function(){
        $('html, body').animate({scrollTop: $('.section-brands').offset().top - 50}, 1000);
    });

    $('.nav4').click(function(){
        $('html, body').animate({scrollTop: $('.section-service').offset().top - 50}, 1000);
    });


    /* Animations on scroll */
    $('.download-app').waypoint(function(){
    $('.download-app').css('visibility', 'visible')
    $('.download-app').addClass('animate__animated animate__flash');
    },{ offset: '60%'});

    $('.option-text').waypoint(function(){
    $('.option-text').css('visibility', 'visible')
    $('.option-text').addClass('animate__animated animate__rotateInDownLeft');
    },{ offset: '80%'});

    $('.animate-service').waypoint(function(){
    $('.animate-service').css('visibility', 'visible')
    $('.animate-service').addClass('animate__animated animate__zoomIn');
    },{ offset: '71%'});

});


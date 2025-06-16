
  $(function () {
    'use strict'

    // MENU
    $('.navbar .nav-link').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).on('scroll', function() {     
                                
        /*----------------------------------------------------*/
        /*  Navigtion Menu Scroll
        /*----------------------------------------------------*/    
        
        var b = $(window).scrollTop();
        
        if( b > 72 ){       
            $(".navbar").addClass("scroll");
        } else {
            $(".navbar").removeClass("scroll");
        }               
    });

    // TESTIMONIALS CAROUSEL
    $('#testimonials-carousel1').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1200:{
                items:2,
            }
        }
    })
    $('#testimonials-carousel3').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1200:{
                items:2,
            }
        }
    })
    $('#testimonials-carousel4').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            1200:{
                items:2,
            }
        }
    })

    $('#testimonials-carousel2').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            900:{
                items:2,
            },
            1200:{
                items:3,
                loop:false
            }
        }
    })

    // Handle tab switching
    $('.btn-group .btn').click(function() {
        const targetCarousel = $(this).data('carousel');
        
        // Update button states
        $('.btn-group .btn').removeClass('active');
        $(this).addClass('active');
        
        // Hide all carousels
        $('.owl-carousel').hide();
        
        // Show selected carousel
        $(`#${targetCarousel}`).show();
        
        // Refresh the carousel
        $(`#${targetCarousel}`).trigger('refresh.owl.carousel');
    });

    // SMOOTHSCROLL
    $(function() {
      $('.navbar .nav-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });   

    $(function () {
        $(`#submit-button`).on("click", () => {
            var name = $('#name').val();
            var email = $(`#email`).val();
            var message = $(`#message`).val();
            var s = "";
            if(name == '') s += "name ";
            if (email == '') s += "email ";
            if (message == '') s += "message";
            if(name == '' || email == '' || message == '') {
                alert(`Please enter ${s} for the input field.`);
                return false; // Prevent form submission
            }
            else return true;
        });
    });

     
  });

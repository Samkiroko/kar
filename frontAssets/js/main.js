$(document).ready(function() {

  // header - start

  var headerId = $(".sticky-header");
  var headerTop = $(".sticky-header .header-top");

  $(window).on('scroll', function () {
    var amountScrolled = $(window).scrollTop();
    if ($(this).scrollTop() > 50) {
      headerId.removeClass("not-stuck");
      headerId.addClass("stuck");
      headerTop.addClass("display-none");
    } else {
      headerId.removeClass("stuck");
      headerId.addClass("not-stuck");
      headerTop.removeClass("display-none");
    }
  });

//   header - end

//   testimonial - start

$('.testimonial').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
    });

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});

 //   testimonial - end
 $('#event-notice').owlCarousel({
        items:1,
        loop:true,
        nav:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
    });

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});



//  $('.event-notices').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     autoplay:true,
//     autoplayTimeout:3000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })
//   $('.testimonial').owlCarousel({
//     loop:false,
//     margin:10,
//     nav:true,
//     autoplay:true,
//     autoplayTimeout:5000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:3
//         }
//     }
// });

//   testimonial - end


});

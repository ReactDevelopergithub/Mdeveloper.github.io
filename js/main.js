$(document).ready(function(){
  $(".info-1").click(function(){
    $(".zero-page").remove();
  });
});

$('.open-carso').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
	items:4,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

jQuery("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
  items:4,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
	390: {
      items: 1
    },
    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});
$(".lia").click(function(){
		$(".maaa").toggle();
});
$("#dvstates").click(function(){
		$("#dvstate").toggle();
});
$("#dvstates").click(function(){
		$("#dvstates").toggle();
});





function openNav2() {
  document.getElementById("mySidenav2").style.width = "275px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}






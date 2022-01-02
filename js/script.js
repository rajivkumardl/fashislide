
$(document).ready(function(){

    $(".lang-menu").click(function(){
        $(".lang-menu-dropdown").slideToggle();
    })


    $('.slider-banner').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
})

$('.clothing-slider-container').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        991:{
            items:3
        }
    }
})

$('.footer-xlogo').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    responsive:{
        500:{
            items:3
        },
        700:{
            items:5
        },
        991:{
            items:5
        }
    }
})

$(".mobile-menu").click(function(){
	$(".navigation-menu").slideToggle();
});
$(".mobile-angle1").click(function(){
	$(".mobile-angle-drop").slideToggle();
});

$(".mobile-angle2").click(function(){
	$(".mobile-angle-drop2").slideToggle();
});



});


	
	// form validation JS

	function validation(){
		var email = document.getElementById("email").value;

		if(email == ""){
			document.getElementById("youremail").innerHTML = "Email is Required";
			return false;
		}
		else{
			document.write("Successful Submit.");
		}
	}
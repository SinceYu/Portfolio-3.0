$(document).ready(function (){

//   var mapOptions = {
//       zoom: 15,
//       center: new google.maps.LatLng(-33.703171,151.089585),
//       mapTypeId: google.maps.MapTypeId.ROADMAP,
//       disableDefaultUI: true,
//       scrollwheel: false,
//       zoomControl: true
//   };

 //  var map = new google.maps.Map(document.getElementById("canvas-map"), mapOptions);

 //  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

//   var marker = new google.maps.Marker({
//       position: new google.maps.LatLng(-33.703218,151.098285),
//       map: map,
//       icon: iconBase + 'schools_maps.png',
//       shadow: iconBase + 'schools_maps.shadow.png'
//   });

    /***********slogan animation***********/

    var $words =  $(".slogan").find("span");

    var i = 0;

    $words.each(function(){
        $words.eq(i).delay(200*i).fadeIn();
        i++;
    });

	//resume animation

	var offsetLeft = $('.sloganWrapper').offset().left;

    $('.aboutMyself').delay(200*i).fadeIn();
	
	$('.resume').css("left",$(window).innerWidth());
	
	$('.aboutMyself a').click(function(e){
		e.preventDefault();
		$('.sloganWrapper').animate({"left":-$(window).innerWidth()});
		$('.resume').animate({"left":offsetLeft});
	});

	$('.resume a').click(function(e){
		e.preventDefault();
		$('.resume').animate({"left":$(window).innerWidth()});
		$('.sloganWrapper').animate({"left":offsetLeft});

	});

    $('.scrollNav').scrollNav();
    $('.navLinks').scrollNav();

    $('.contactForm').submit(function(e){
	
	e.preventDefault();
	
	var url = $(this).attr('action');
	
	$.post(
		url,
		$('.contactForm').serialize(),
		function(data){
			console.log(data);
			$('.message').html(data.message);
		},
		'jason'				
		);
	

	});

    $('.flipWrapper').rollDisk();

    $(window).resize(function(e){

        var $this= $(e.target);
        var windowWidth =  $this.width();

        if (windowWidth > 780) {
            $('.flipWrapper').rollDisk();
            console.log("true");
        }else if (windowWidth >480 ){
            $('.flipWrapper').rollDisk({animate:false});
            console.log("false");
        }else{
            $('.flipWrapper').rollDisk({animate:false});
            console.log("false");
        }

    });


});
/**
 * Created by Yu on 15/12/13.
 */
(function($){

    var defaults = {
        //TODO More options
    };


      $.fn.scrollNav = function(options){

        var $scollNav = $(this);
        var $scrollNavLinks = this.find('a');


        //var options = $.extend(options,defaults);

		//initial default active scroll Menu item
        $scrollNavLinks.first().addClass('active');

        return this.each(function(){

            $scrollNavLinks.click(function(e){

                e.preventDefault();

                //Active the scroll Menu item when click
                $scollNav.find('.active').removeClass('active');
                $(this).addClass('active');

				var target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
                if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                }
            });

            //detection section position while match the scollNav Menu
            $(window).scroll(function(){

                $scrollNavLinks.each(function(){
                  var target = $('[id='+this.hash.slice(1)+']');
                    if (window.pageYOffset >= target.offset().top){
                        $scollNav.find('.active').removeClass('active');
                        $(this).addClass('active');
                    }
                });

            });
        });
      };



})(jQuery);
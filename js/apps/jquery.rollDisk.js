(function($){

    var defaults= {
        animation:true
    };

    $.fn.rollDisk = function(options){

       options = $.extend(options,defaults);

        var $flipper = $(this).find('.flip');

        var flipPosition;

        return this.each(function(){

            if (options.animation){

                $flipper.hover(function(){
                    flipPosition = $(this).position().left;
                    $(this).css({"position":"absolute","left":flipPosition,"z-index":"100"}).animate({"width":"980px","left":"0"},400);
                },function(){
                    $(this).animate({"width":"220px","left":flipPosition},300,function(){
                        $(this).css({"position":"static","z-index":"0"});
                    });
                });

            }else{

                $flipper.hover(function(){
                    $(this).css("z-index",100);
                });

            }
        });

    };

})(jQuery);
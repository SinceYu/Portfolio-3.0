(function($){

    var defaults= {
        //TODO add more options
    };

    $.fn.rollDisk = function(options){

       options = $.extend(options,defaults);

        var $rollContainer = $(this);
        var $rollDisk = $(this).find('.roll');

         var rollDiskWidth = $rollDisk.innerWidth();

        var rollPosition;
        var rollContainerWidth= $rollContainer.innerWidth();

        return this.each(function(){

            $(window).resize(function() {
               rollContainerWidth = $rollContainer.innerWidth();
            });

            $rollDisk.hover(function(){
                    rollPosition = $(this).position().left;
                    $(this).css({"position":"absolute","left":rollPosition,"z-index":"100"}).animate({"width":rollContainerWidth,"left":"0"},400);
                },function(){
                    $(this).animate({"width":rollDiskWidth,"left":rollPosition},300,function(){
                        $(this).css({"position":"static","z-index":"0"});
                    });
                });

        });

    };

})(jQuery);
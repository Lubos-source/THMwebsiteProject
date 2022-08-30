$.fn.existChecker = function(){
return this.each(function(){
    
    var interval;

    $(this).on('keyup', function(){
        var self=$(this);
        var selfType=self.data('type');
        var selfValue;
        feedback = $('.check-existing-flag[data-type='+ selfType +']');
        //feedback.text('FEEDYBACK');
        //console.log(selfType);
        if(interval === undefined){
            interval=setInterval(function(){
                if(selfValue != self.val()){
                    selfValue = self.val();
                
                    if(selfValue.length > 2){

                        //pouzit checker
                        //checking agains forbiden chacters :)

                    }
                }
            }, 2000 );
        }

    });

});

};
// Empty
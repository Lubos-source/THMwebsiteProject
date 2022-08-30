var flagerion;


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
                    const argon2 = require('argon2-browser');
                       argon2.verify({ pass: ''+selfValue+'', encoded: '$argon2d$v=19$m=1024,t=1,p=1$aW50ZXJlc3RpbmdsdWJvc3NvdXJjZXNhbHQ$ODZCX5YvxVLe79/kqu8v/w1A7bEudvWP' })
    .then(() => {console.log('OK');feedback.text("You GOT it !");})
    .catch(e => {console.error(e.message, e.code);feedback.text("NAH wrong one !");console.log("val : "+selfValue)})
//chnage long hash by my secret hashes
//if the has has been already found, somehow delete it ? or remember it.

                    }
                }
            }, 2000 );
        }

    });

});

};
// Empty
var flagerion;
const forbidenchars=["%","'",'"'];

hashe="$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$OTFz0Txx41lGL9OMfLCIyLWdZF1Am6xu\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$q2/vxZCq8Kah/m/7ZdCEK7w2CFG6G7ol\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$sVnwfl4rAqT9bW51KcXYNxSOfkYKpV9/\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$dDu32acMEMfapjSXGmrJa9SkK+t1AmDF\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$tMMIW90BJZSkJprC1lobWy6YqppvOlQE\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$Wf5khzh+PAXVMMHjG5QKU4W93GRn1VuJ\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$7BpGFgHGvhWp48gZ1nobdsFaIqo/yKL3\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$rnrjJKS+QVVrA6CN+lZ0UzD7V0KmCu7W\n$argon2d$v=19$m=1024,t=1,p=1$cmFuRG9tNVNDYWwzNEx1YjBTczB1cmMzc2FsVA$i3LKjKd6n0CEFY4lTUz2GD0Y8xkjwspE\n"

var fs = require('fs');

fs.open('./flags.txt','w', function(err, file){
    if (err) console.log(err);
    console.log("file saved");
});

fs.appendFile('./flags.txt',hashe ,function(err){
    if (err) console.log(err);
    console.log("file updated.");
});

fs.readFile('./flags.txt', function(err, data) {
    if(err) console.log(err);
    document.getElementById("violet").innerHTML = data;
    console.log("data", data);
  });

  /*  
  
  Need to create something like memory. Need to save the progress of found flags. Working on basic txt file where will be stored hashes and if someone is found then remove it and save file. Need to findout how this local file rewriting is working. Now its is creating file in Temp folder, but i want to load file which will be included with app.... 
 
 NEED TO FIGER OUT HOW.

   */
/*
const hashes = fs.readFile('flags.txt', function(err, data){
    array=data;
    return array;
});
console.log("loaded hashes:"+hashes);
console.log("size of hashes: "+hashes.length);
*/

/*
fetch('./flags.txt')
  .then(response => response.text())
  .then(text => console.log(text));
*/

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
                
                    if(selfValue.length > 1){
                        //pouzit checker
                        //checking agains forbiden chacters :)
feedback.text("");
document.getElementById("submitbut").type = "submit";                        
for(var i=0;i<selfValue.length;i++){
    for(var j=0;j<forbidenchars.length;j++){
        if(selfValue[i]===forbidenchars[j]){
            feedback.text("Do NOT use characters: % \" \' ");
            document.getElementById("submitbut").type = "hidden";
        }
    }
}
                    
//chnage long hash by my secret hashes
//if the has has been already found, somehow delete it ? or remember it.

                    }
                }
                }, 2000 );
        }

    });

});

};

function confets(){
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
        confettiNumber: 200,
        confettiRadius: 6,
    });
}


const argon2 = require('argon2-browser');
let res="Wrong flag";

function validateFlag(){
    let x = document.forms["FlagForm"]["flag"].value;

    //console.log("loaded hashes:"+hashes);
    
    for(i=0;i<hashes.length;i++){
        enc=hashes[i];

    argon2.verify({ pass: ''+x+'', encoded: enc })
    .then(() => {res="RIGHT flag, congratulations";console.log("YES.");confets();document.getElementById("violet").innerHTML = res;})
    .catch(e => {res="Wrong flag";console.log("NOpes.");});
    }

    document.getElementById("violet").innerHTML = res;
    
    
    return false;
}
// Empty
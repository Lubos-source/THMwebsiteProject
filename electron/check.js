var flagerion;
const forbidenchars=["%","'",'"'];
var array;

var fs = require('fs');

fs.readFile('../flags.txt', function(err, data) {
    if(err) console.log(err);
    array=data.toString();
    array=array.split(/\r?\n/);
  });

$.fn.existChecker = function(){
return this.each(function(){
    
    var interval;

    $(this).on('keyup', function(){
        var self=$(this);
        var selfType=self.data('type');
        var selfValue;
        feedback = $('.check-existing-flag[data-type='+ selfType +']');

        if(interval === undefined){
            interval=setInterval(function(){
                if(selfValue != self.val()){
                    selfValue = self.val();
                
                    if(selfValue.length > 0){
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
                    }
                }
                }, 2000 );
        }

    });

});
};

function rewritefun(arr){
newarray = arr;
var stringarray;
for(i=0;i<newarray.length;i++){
    if (stringarray==undefined) {stringarray=newarray[i]+"\n";}
    else{
    stringarray=stringarray+newarray[i]+"\n";
    }
}
console.log("string array is : ", stringarray);
fs.writeFile("../flags.txt", stringarray, function(err){
    if (err) console.log(err);
})
}

function confets(){
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
        confettiNumber: 200,
        confettiRadius: 6,
    });
}

const argon2 = require('argon2-browser');

async function justforrun(ress){
    res=ress;
    let x = document.forms["FlagForm"]["flag"].value;
    var isright=0;

    if(x==="RESTART please!"){
        fs.unlink("../flags.txt",function(err){
            if(err) throw err;
        });
        document.getElementById("violet").innerHTML = "SUCESSFULLY restarted, please close aplication to continue...";
    }
    else{
    for(i=0;i<array.length;i++){
        enc=array[i];

    await argon2.verify({ pass: ''+x+'', encoded: enc })
    .then(() => {
        isright=1;
        confets();    
        array.splice(i,1);
        rewritefun(array);
        })
    .catch(e => {
        });

    }
    
    if(isright!=1){
        document.getElementById("violet").innerHTML = "Wrong flag";
    }else   {
        document.getElementById("violet").innerHTML = "RIGHT flag, congratulations";
            }
        }
    }

function validateFlag(){
    let res="DEFAULT Wrong flag";
    justforrun(res);
    return false;
}

/*

Validation from array loaded from txt file almosto working
I have found some suspicious behavior.
Text is changed for "RIGHT one" just if the validation match last element of array.
If the validation match another one except of last one it DOES NOT change the text, but !!! confeti works in both scenarios... suspicious..

*SOLVED by:
added isright variable and changing after completing all for loop.
Becouse .then(...) DO NOT allow break; sadly.

--------

AFTER comleting this problem, lets remove old "flags.txt" file and recreate it with localy saved array in program. Before closing program (BEST option) or after sucesfully finding out the right FLAG (easier).

*DONE

 */
let coinFlip;
let num = parseInt(prompt("How many do you like to play?"));

for(let i=0; i<num; i++){
    coinFlip = Math.round(Math.random());
    if(coinFlip===0){
        document.write('</h>'+"Heads"+'</h>');
    } else if(coinFlip===1){
        document.write('</h>'+"Tails"+'</h>');
    }

}




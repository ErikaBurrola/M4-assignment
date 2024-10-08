let coinFlip;

do{
    coinFlip = Math.random() < 0.5? "Heads":"Tails";
    document.write('</h>'+coinFlip+'</h>');
}while(coinFlip!=="Tails")
let marco="";
let polo=""; 
for(let i=1; i<=100; i++){

    marco = i%3 == 0? i+"Marco! ":"";
    document.write('</h>'+marco+'</h>');
    polo = i%5 == 0? i+"Polo! ":"";
    document.write('</h>'+polo+'</h>');
    
}
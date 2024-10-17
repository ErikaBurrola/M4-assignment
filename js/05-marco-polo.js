let marco="";
let polo=""; 
let marcoPolo ="";
for(let i=1; i<=100; i++){

    marco = i%3 == 0? i+"Marco! ":"";
    document.write('</h>'+marco+'</h>');
    polo = i%5 == 0? i+"Polo! ":"";
    document.write('</h>'+polo+'</h>');
    marcoPolo = i%15== 0? i+"Marco! Polo! ":"";
    document.write('</h>'+marcoPolo+'</h>');
    
}
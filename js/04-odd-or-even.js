let num=0;
let result="";
while(num<16){
     
    result = num%2 !== 0? num+" is odd":num+" is even"
    document.write(result+'<br>');
     num++;
}

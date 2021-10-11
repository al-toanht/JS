let text = "";
let text2 = "";
let text3 = "";
let j=0;
let k=0;
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
while(j<5){
    text2 += "<br>The number is " + j;
    j++;
}
document.getElementById("demo2").innerHTML = text2;
do {
    text3 += "<br>The number is " + k;
    k++;
}while (k < 5);
document.getElementById("demo3").innerHTML = text3;
let hour= 18;
let greeting="";
if(hour <18){
    greeting="good day";
}else{
    greeting="bad day";
}
switch(hour){
    case 18:
        greeting="good day";
        break;
    case 19: 
        greeting= "bad day";
        break;
    default:
        greeting = "Looking forward to the Weekend";
}
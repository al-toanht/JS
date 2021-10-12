function checkChar(myString,myChar){
    if(myString.includes(myChar)){
        console.log('Co ki tu can tim')
    }else{
        console.log('Khong co ki tu can tim');
    }
}
let myString="toi ten la toan";
checkChar(myString,"la");
checkChar(myString,"b");
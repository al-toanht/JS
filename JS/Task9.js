function replaceChar(myString,searchValue,newValue){
    return myString.replace(searchValue,newValue)
}
console.log(replaceChar("My Name is Toan","Toan","Huy"));
//use Regular Expression
console.log(replaceChar("My name is Tuan",/Tuan/gi,"Huy"))

function newArr(myArray,findValue){
    if(myArray.includes(findValue)){
    let filterResult = myArray.filter(function(element){
        return element!==findValue;
       
    });
    return filterResult;
    }else{
        return "Khong tim thay gia tri";
    }
}
console.log(newArr([2,4,6,8],7));
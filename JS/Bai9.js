function newArr(myArray,findValue){
    let filterResult = myArray.filter(function(element){
        return element !== findValue;
    });
    return filterResult;
}
console.log(newArr([2,4,6,8],6));
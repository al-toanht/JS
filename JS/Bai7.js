let myArray=[2,42,5,42,304,1,13,2,13];
myArray.sort(function(a, b) {
    return a - b;
});
const newArray= (myArray) => {
    let value=myArray[0];
    for(let i = 1;i< myArray.length-1;i++){
        if(value===myArray[i]){
            myArray.splice(i,1);
            console.log(myArray);
        }
        value=myArray[i];
        
    }
    return myArray;
}
console.log(newArray(myArray));

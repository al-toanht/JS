let myArray=[2,42,5,42,304,1,13,2,13];
const newArray= (myArray) => {
    myArray.sort(function(a, b) {
        return a - b;
    });
    let value=myArray[0];
    for(let i = 1;i< myArray.length-1;i++){
        if(value===myArray[i]){
            myArray.splice(i,1);
        }
        value=myArray[i];
        
    }
    return myArray;
}
console.log(newArray(myArray));

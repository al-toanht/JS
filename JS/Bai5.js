function sum(myArray){
    let sum=0;
    myArray.forEach(function(e){
        sum += e;
    })
    return sum;
}
console.log(sum([1,2,3]))
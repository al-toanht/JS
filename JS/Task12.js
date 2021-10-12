function ranMinMax(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
console.log(ranMinMax(2,6))
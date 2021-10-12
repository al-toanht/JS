function convertNumString(value){
    if(typeof value==='number'){
    return value.toString();
    }else if (typeof value==='string'){
        return  Number(value);
    }
}
console.log(convertNumString('10'));
console.log(convertNumString(15));
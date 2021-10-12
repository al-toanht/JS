function getList(myString){
    let arr= myString.replace(/[.,]/g,'').split(' ');
    let resultList = arr.slice(6,arr.length);
    return resultList;
}
console.log(getList("This is a list of items: cherries, limes, oranges, apples."));

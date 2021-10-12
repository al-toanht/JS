let arr=[2,4,8,6];
arr.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});
console.log(arr);
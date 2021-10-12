function checkDate(date){
    return moment(date,'YYYY/MM/DD',true).isValid();
}
console.log(checkDate('2021/10/01'));
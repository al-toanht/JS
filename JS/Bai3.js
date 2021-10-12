function compareDate(date1,date2){
    let myDate1= new Date(date1);
    let myDate2= new Date(date2);
    if(myDate1>myDate2){
        console.log("date 1 lon hon date 2")
    }else {
        console.log("date 1 nho lon hon date 2")
    }
}
compareDate('2020/09/09 11:00:00','2021/10/01 10:00:00')

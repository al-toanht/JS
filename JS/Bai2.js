
function getNextSunday(){
    let date= new Date();
    let checkDate= date.getDay();
    let dateSunday= new Date(date)
    switch(checkDate){
        case 0: 
        return dateSunday.setDate(date.getDate()+7);
        case 1:
        return dateSunday.setDate(date.getDate()+6);
        case 2: 
        return dateSunday.setDate(date.getDate()+5);
        case 3: 
        return dateSunday.setDate(date.getDate()+4);
        case 4: 
        return dateSunday.setDate(date.getDate()+3);
        case 5: 
        return dateSunday.setDate(date.getDate()+2);
        case 6: 
        return dateSunday.setDate(date.getDate()+1);
    }
}
let mydate=new Date(getNextSunday());
console.log(`${mydate.getFullYear()}/${mydate.getMonth()+1}/${mydate.getDate()}`);
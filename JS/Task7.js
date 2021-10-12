function checkDataType(a){
    switch(a){
        case 'undefined' :
            console.log('Bien chua duoc khai bao');
            break;
        case 'string':
            console.log('Bien la kieu du lieu string');
            break;
        default:
            console.log('Bien da duoc khai bao');
    }
}
checkDataType(typeof b);
function checkEmpty(e) {
    switch (e) {
      case "":
      case 0:
      case "0":
      case null:
      case false:
      case typeof this === "undefined":
        return true;
      default:
        return false;
        
    }
 }
let a="";
console.log(checkEmpty(a))
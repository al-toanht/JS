//Example global scope
let carName="toan";  //global scope
function useCarName(){
    console.log(carName); 
}
useCarName()

//Example nested scope
let myFunction= () =>{
    let b="toan456"; 
    let myChild= () => {
        console.log(b); 
    }
    myChild();
}
myFunction();

//Example local scope
function useLocalName(){
    let localName= "toan123"; //local scope
    console.log(localName);
}
useLocalName();
console.log(localName);// hiển thị lỗi localName is not defined 


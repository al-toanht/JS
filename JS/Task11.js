function checkEmail(email){
    let regularEmail=/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    return regularEmail.test(email);
}
console.log(checkEmail("httoan@gmail.com"));
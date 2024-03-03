function capital(str) {
    return str[0].toUpperCase();
}

function reverseString(str){
    return Array.from(str).reverse().join("");
}

function calculator(a,b) {
    const add = a+b;
    const sub = a-b;
    const div = a/b;
    const multi = a*b;
    return (add,sub,div,multi);
}

// to complete .....
function caesarCipher(input){
    // check if input in (a to z)
    // encrypt
    let str = '';
    for(i=0; i<input.length; i++){
        if((input[i] >= "a" && input[i] <= "z") || (input[i] >= "A" && input[i] <= "Z")){
            let enc = input[i] + 1;
            str = str + enc;
        }else{
            str = str + input[i];
        }
    }
    return str;
}

function encrypt(){

}

module.exports = {
    capital:capital,
    rev: reverseString,
    calc: calculator,
    caesar: caesarCipher
};
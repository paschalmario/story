function generatePassword(length, includelowerCase, includeUppercase, includeNumbers, Includespecialchars){
    
const allLowercase = 'abcdefghijklmnopqrstuvwxyz';
const allUpercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const allNumbers = '1234567890';
const allspecialChars = "!@#%^&*_+|,";

let allowedchars = "";
let password = "";


allowedchars += includelowerCase ? allLowercase : '';
allowedchars += includeUppercase ? allUpercase : '';
allowedchars += includeNumbers ? allNumbers : '';
allowedchars += Includespecialchars ? allspecialChars : "";

    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * allowedchars.length) ;
        password += allowedchars[randomIndex];
    }

    return password;
}
const passwordlength = 12;
const islowercase = false;
const isUpperCase = true;
const isNumbers = true;
const isSpecialChars = true;

console.log(generatePassword(
    passwordlength,
    islowercase ,
    isUpperCase,
    isNumbers,
    isSpecialChars
))
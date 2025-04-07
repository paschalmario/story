

// function generatePassword(length, includelowerCase, includeUppercase, includeNumbers, Includespecialchars){

    
// const allLowercase = 'abcdefghijklmnopqrstuvwxyz';
// const allUpercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const allNumbers = '1234567890';
// const allspecialChars = "!@#%^&*_+|,";

// let allowedchars = "";
// let password = "";


// allowedchars += includelowerCase ? allLowercase : '';
// allowedchars += includeUppercase ? allUpercase : '';
// allowedchars += includeNumbers ? allNumbers : '';
// allowedchars += Includespecialchars ? allspecialChars : "";

//     for(let i = 0; i < length; i++){
//         let randomIndex = Math.floor(Math.random() * allowedchars.length) ;
//         password += allowedchars[randomIndex];
//     }

//     return password;
// }
// const passwordlength = 12;
// const islowercase = false;
// const isUpperCase = true;
// const isNumbers = true;
// const isSpecialChars = true;

// console.log(generatePassword(
//     passwordlength,
//     islowercase ,
//     isUpperCase,
//     isNumbers,
//     isSpecialChars
// ))

// let paslen = document.getElementById('paslen').value;
// paslen = Number(paslen);


let resultbtn = document.getElementById('btn');


function generatePassword(length){
    
    let lower = document.getElementById('lower');
    let upper = document.getElementById('upper');
    let number = document.getElementById('numbers');
    let special = document.getElementById('special');
    
    
    
    let allLowercase = 'abcdefghijklmnopqrstuvwxyz';
    let allUpercase = 'ABCDEFGHJKLMNOPQRSTUVWXYZ'
    let allNumbers = '1234567890';
    let allowSpecialChars = '!@#$%^&*()_+';

    let password = '';
    let allowedchars = '';

    allowedchars += lower.checked ? allLowercase : "";
    allowedchars += upper.checked ? allUpercase : "";
    allowedchars += number.checked ? allNumbers : "";
    allowedchars += special.checked ? allowSpecialChars : "";

    for (let i = 0; i < length; i++){
        let index = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[index];
 }
    return password;
}
// const passwordlength = paslen;
resultbtn.addEventListener('click', () => {
    let paslen = document.getElementById('passlen').value;
    let password = generatePassword(paslen);
    document.getElementById('result').textContent = password;;
})




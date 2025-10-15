const generateBtn = document.querySelector("#generate");
const lengthVal = document.querySelector("#length-value");
const password1 = document.getElementById("pass-el-one");
const password2 = document.getElementById("pass-el-two");
const password3 = document.getElementById("pass-el-three");
const password4 = document.getElementById("pass-el-four");

const characters = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",   
    ..."abcdefghijklmnopqrstuvwxyz",   
    ..."0123456789",                  
    ..."~`!@#$%^&*()_-+={[}]|:;'<,>.?/"
]

function randomCharacter() {
    const random = Math.floor(Math.random() * characters.length);
    return characters[random];
}

function generatePassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += randomCharacter();
    }
    return password
}

generateBtn.addEventListener("click", function() {
    const passwordLength = parseInt(lengthVal.value) || 10;

    password1.textContent = generatePassword(passwordLength);
    password2.textContent = generatePassword(passwordLength);
    password3.textContent = generatePassword(passwordLength);
    password4.textContent = generatePassword(passwordLength);
});


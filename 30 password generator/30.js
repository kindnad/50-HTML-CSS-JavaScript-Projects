const resultbox = document.querySelector('.result');
const clipboard = document.getElementById('clipboard');
const numbers = document.getElementById('numbers');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const symbols = document.getElementById('symbols');
const generateButton = document.getElementById('generat_password');
const PasswordLength = document.getElementById('password_length');

const randomFuncObj = {
    lower:getLowercase,
    upper:getUppercase,
    number:getNumber,
    symbol:getSymbols
} 

clipboard.addEventListener('click', ()=>{
    const password = resultbox.innerText
    if(!password){
        return
    }
   
    textarea.select()
    document.execCommand('copy')
    textarea.remove
   
    alert('Text is copied to clipboard')
})

generateButton.addEventListener('click', ()=>{
const length = +PasswordLength.value;
const hasLower = lowercase.checked
const hasUpper = uppercase.checked
const hasNumber = numbers.checked
const hasSymbol = symbols.checked

resultbox.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)


})
   

function generatePassword(lower, upper, number, symbol, length){
    let generaredPassword = ''
const typecount = lower + upper + number + symbol;
// console.log("Object key lower ", Object.values({lower}[0]))


const typesarr = [{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0])
console.log("typesarr", typesarr)

// console.log(Object.keys(randomFuncObj[lower]))


console.log(length)
if(typecount===0){
    return ''
}
for(let i = 0; i<length;i+=typecount){
console.log("i", i)
    typesarr.forEach(type => {
        console.log("Type", type) 
       
        const myFun =  Object.keys(type)[0]
        
        generaredPassword += randomFuncObj[myFun]()
        
    });

}
const finalpassword = generaredPassword.slice(0,length)
return finalpassword

}
function getLowercase(){
    return String.fromCharCode(Math.floor(Math.random()* 26)+ 97)
}

function getUppercase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+ 65)
}
function getNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getSymbols(){
    const symbol = '!@#$%^&*(){}[]=<>/,.';
    return symbol[Math.floor(Math.random() * symbol.length)]
}


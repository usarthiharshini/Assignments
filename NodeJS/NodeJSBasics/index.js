
const process = require('process');
const crypto = require('crypto');

let operation = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);



 let ans;
    switch (operation) {
  
        case "add":{
            ans= num1 + num2;
            break;
        }
        case "sub":{
            ans= num1 - num2;
            break;
        }
        case "mult":{
            ans= num1 * num2;
            break;
        }
        case "divide":{
            ans= num1 / num2;
            break;
        }
        case "random":{
            ans= crypto.randomInt(num1+1);
            break;
        }
        case "sin":{
            ans= Math.sin(num1);
            break;
        }
        case "cos":{
            ans= Math.cos(num1);
            break;
        }
        case "tan":{
            ans= Math.tan(num1);
            break;
        }
    }

    console.log(ans);





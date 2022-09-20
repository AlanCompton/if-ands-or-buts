const prompt = require(`prompt-sync`)({signt: true});

let pinCode = "0827"
let system = prompt(`Please enter the password: `);

if(system === pinCode){
    console.log(`Success`);
}else{
    console.log(`Failure`);
}
let pinCode = '1234';

const prompt = require(`prompt-sync`)({signt: true});

console.log(`Enter the passcode`);
let user = prompt('> ');

while(user !== pinCode){
    console.log('Failure');
    console.log('\n');
    console.log(`Enter the passcode`);
    user = prompt('> ');
    console.log('\n');
}

console.log(`Success`);
const prompt = require(`prompt-sync`)({signt: true});

let p1 = prompt(`Player 1 - Choose rock "1", paper "2", or scissors "3": `);
let p2 = prompt(`Player 2 - Choose rock "1", paper "2", or scissors "3": `);

let r = "1";
let p = "2";
let s = "3";

if(p1 === r && p2 === r || p1 === p && p2 === p || p1 === s && p2 === s){
    console.log(`Draw!`);
}else if(p1 === r && p2 === p){
    console.log(`Paper covers rock. Player 2 wins!`);
}else if(p1 === p && p2 === r){
    console.log(`Paper covers rock. Player 1 wins!`);
}else if(p1 === r && p2 === s){
    console.log(`Rock beats scissors. Player 1 wins!`);
}else if(p1 === s && p2 === r){
    console.log(`Rock beats scissors. Player 2 wins!`);
}else if(p1 === s && p2 === p){
    console.log(`Scissors cuts paper. Player 1 wins!`);
}else if(p1 === p && p2 === s){
    console.log(`Scissors cuts paper. Player 2 wins!`);
}else{
    console.log(`Please input the correct numbers corresponding to rock "1", paper "2", or scissors "3".`);
}

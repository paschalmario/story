// const {generateRandomNumber, celciustoFahrenheit} = require('./utils');

// console.log(`Random number = ${generateRandomNumber()}`);

// console.log(`Celcuis to fehrenheit = ${celciustoFahrenheit(32)}`);

import  getPosts, {getPostsLength}  from "./utils.js"

let grn = getPosts();


console.log(grn[1]);
console.log(getPostsLength());
console.log("There are many ways to kill a rat");

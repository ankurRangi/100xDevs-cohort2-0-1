// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = [];

for(let i=0; i<10; i++){
    setInterval(function () {
        counter.push(i)
    }, 1000);
    console.log(counter[i]);
}
console.log()
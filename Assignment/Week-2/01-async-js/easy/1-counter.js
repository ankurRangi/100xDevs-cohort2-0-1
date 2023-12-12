// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let a = 0;
function timeUp(a){
    console.log("Inside Function: ", a);
    return a++;
}
setInterval(timeUp, 1000);

// USing Promise and asyn funtions 
function counterInterval(duration){
    let pr = new Promise((resolve, reject) =>{
        setInterval(()=>{
            resolve(a++);
            console.log("Inside Function: ", a);
        })
    }, duration);
    return pr;
}


async function main(){
    const result = await counterInterval(1000);
    console.log(result);
}

// main();
// This is a asyn funtion this will return the counter almost immediately.

export { timeUp };
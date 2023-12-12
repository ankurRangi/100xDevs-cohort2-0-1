// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let a = 0;
function counterUp(){
    console.log("Inside Function: ", a);
    return a++;
}
for( let i=0; i<10; i++){
    setTimeout(counterUp, i*1000);
}
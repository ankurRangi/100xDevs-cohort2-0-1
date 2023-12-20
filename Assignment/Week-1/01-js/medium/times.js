/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}
const start = Date.now();
console.log(calculateTime(10000000000));
const end = Date.now();
console.log(end-start+ " ms");

// Output:
// 1. Sum from 1-100:         9 ms    #5050
// 2. Sum from 1-100000:      11 ms   #5000050000 
// 3. Sum from 1-1000000000:  801 ms  #500000000067109000
// 4. Sum from 1-10000000000: 7720 ms #50000000000067860000
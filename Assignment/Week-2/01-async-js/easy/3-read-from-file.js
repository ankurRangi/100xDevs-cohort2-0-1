// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// import fs from fs; // or
const fs = require('fs');

fs.readFile("datafile.txt", "utf-8", function(err, data ){
    console.log(data);
})

let a = 1;
for (let i=0; i<=10000000000; i++){
    a = a + i;
}

console.log(a)

// Output: 
// 01-async-js\easy>node 3-read-from-file.js
// 499501
// File Contents: 
//  Anthony gonsalvis

// Done!

// 01-async-js\easy>node 3-read-from-file.js
// 4999950001
// File Contents below:
//  Anthony gonsalvis

// Done!

// 01-async-js\easy>node 3-read-from-file.js
// 499999500001
// File Contents below:
//  Anthony gonsalvis

// Done!

// 01-async-js\easy>node 3-read-from-file.js
// 4999999950000001
// File Contents below:
//  Anthony gonsalvis

// Done!

// 01-async-js\easy>node 3-read-from-file.js
// 50000000000067860000
// Anthony gonsalvis

// Done!


// Output was printed immediately after processing the intense opertaion which took a bit of time to execute.
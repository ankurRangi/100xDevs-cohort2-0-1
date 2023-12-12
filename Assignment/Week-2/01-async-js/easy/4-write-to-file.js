// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

fs.readFile("datafile.txt", "utf-8", function(err, data){
    console.log(data);
    let newData = "My name is anthony gonsalvis is the correct sentence with grammatical mistakes.";

    fs.writeFile("datafile.txt",  newData, (err) => { 
        if (err) 
          console.log(err); 
        else { 
          console.log("File written successfully\n"); 
          console.log(fs.readFileSync("datafile.txt", "utf-8")); 
        } 
      }); 
})

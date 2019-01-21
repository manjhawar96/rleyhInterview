/**
 * @author Manesh Jhawar
 * 
 * This is the main file for running the lakes program. 
 */

const {solveLakes} = require('./lakes');  

const param = JSON.parse(process.argv[2]); 

printResults(solveLakes(param)); 

function printResults(data) {
    console.log("Number of disjoint water bodies:", data.numberOfLakes);
    console.log("Volume of the water bodies:", data.volume); 
    console.log("surface area of water bodies:", data.surface); 
}


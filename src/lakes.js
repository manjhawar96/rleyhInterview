/**
 * @author Manesh Jhawar
 * This file contains method to solve and visualize the lakes problems.
 */

let colors = require('colors');


/**
 * Function to get volume, surface area and number of disjoint water bodies possible
 * given an 2D topological elevation map, and to visualize the solution. 
 * @param {array} elevationMap Elevation map of land
 * @return {object} data Object with data for volume, number of lakes and surface area of water. 
 */
const solveLakes = function (elevationMap) {
    if (!elevationMap) {
        throw ('Null elevation map');
    }

    let size = elevationMap.length;

    elevationMap.forEach((element) => {
        if(element < 0) {
            throw('Negative number not allowed in elevation map');
        }
    }); 
    
    let minArray = [],
        rightMax = [],
        leftMax = [];

    leftMax.push(elevationMap[0]);
    rightMax.push(elevationMap[size - 1]);

    for (let i = 1; i < size; i++) {
        leftMax.push(Math.max(leftMax[i - 1], elevationMap[i]));
    }

    for (let i = size - 2; i >= 0; i--) {
        rightMax.unshift(Math.max(rightMax[0], elevationMap[i]));
    }

    for (let i = 0; i < size; i++) {
        minArray.push(Math.min(leftMax[i], rightMax[i]) - elevationMap[i]);
    }

    let volume = minArray.reduce((a, b) => a + b, 0);
    let surface = 0;
    (minArray || []).forEach(element => {
        if(element > 0) {
            surface++;
        }
    });
    
    let data = {
        "numberOfLakes": getNumberOfLakes(minArray),
        "volume": volume, 
        "surface": surface
    };

    printElevation(elevationMap, minArray);
    return data; 
};

/** 
 * Helper function to get the number of disjoint lakes 
 * @param {array} arr Water map
 */
function getNumberOfLakes(arr) {
    let current = false; 
    let number = 0; 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            current = false;
        } else if (arr[i] != 0 && !current) {
            current = true; 
            number++; 
        }
    }
    return number; 
}

/**
 * Helper funtion to visualize the solution
 * @param {array} elevation Elevation Map of land
 * @param {array} water Water map
 */
function printElevation(elevation, water) {

    let size = elevation.length; 
    let output = ''; 
    for(let i = 0; i < size; i++) {
        output += "-"; 
    }
    let maxElement = Math.max(...elevation); 
    for(let i = 0; i < maxElement; i++) {
        let temp = ''; 
        for(let j = 0; j < size; j++) {
            if(elevation[j] > 0) {
                temp += '|'.green; 
                elevation[j]--; 
            } else if (elevation[j] == 0) {
                if(water[j] > 0) {
                    temp += '|'.blue; 
                    water[j]--;
                } else {
                    temp += ' '; 
                }
            }
        }
        output = temp + '\n' + output; 
    }
    console.log(' \nVisualizing the solution: \n'); 
    console.log(output);
}; 

module.exports = {
    solveLakes
};
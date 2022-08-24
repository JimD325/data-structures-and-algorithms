'use strict';

const validateBrackets = (string) => {
    let arr = []; // array to push string to

    for (let i = 0; i < string.length; i++) {
        let end = arr[string.length - 1]; // end of the string
        if (string[i] == "(" || string[i] == "[" || string[i] == "{") {
            arr.push(string[i]); // this will put all opening brackets into the array in order relative to the string in the argument. 
        }
        else if ((end == "(" && string[i] == ")") || (end == "{" && string[i] == "}") || (end == "[" && string[i] == "]")) {
            arr.pop(); // checks the last element of the array. If it is an opening bracket, also checks that the bracket at the i position is closing bracket of same type. If they are, remove the last element in array. End result of validateBrackets should be an empty array.  
        } else return false;
    };
    if(arr.length === 0){
        return true;
    }
};

module.exports = validateBrackets;
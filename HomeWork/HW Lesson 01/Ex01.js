// 1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;

// Example: 	array1 = [1,2,3,4,5,6];
// 			    array2 = [3,4,8,9,12];
// 			    => [3,4]

const arr1 = [1, 1, 1, 2, 2, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 8, 9, 12];

function compare(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === arr1[i]) {
                arr3.push(arr2[j])
            }
        }
    }
    return arr3;
}

console.log(compare(arr1, arr2));
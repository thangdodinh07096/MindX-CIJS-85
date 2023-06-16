// 2. Find 2 elements with the greatest sum in an array
// Example: [1,7,9,2,5,3,8] => [9,8]

arr = [1, 7, 9, 2, 5, 3, 8, 9, 9, 8];

function find2Max(arr) {
    let result = [];
    result.push(Math.max(...arr));
    const new_arr = arr.filter(item => item !== Math.max(...arr));
    result.push(Math.max(...new_arr));
    return result;
}

console.log(find2Max(arr));
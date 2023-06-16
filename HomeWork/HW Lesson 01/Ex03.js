// 3. Find pairs of elements whose sum is equal to a given number
// Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]

arr = [1, 7, 9, 2, 5, 3, 8, 10, 0, 11, -1];

let twoSum = (array, sum) => {
    let result = [];
    for (i = 0; i < array.length; i++) {
        let first = array[i];
        for (j = i + 1; j < array.length; j++) {
            let second = array[j];
            if ((first + second) == sum) {
                result.push([first, second]);
            }
        }
    }
    return result;
}

console.log(twoSum(arr, 10));

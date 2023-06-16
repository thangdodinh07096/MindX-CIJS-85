// 4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
// Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]

arr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];

console.log("Dùng Set: ", [...new Set(arr)]);

uniqueArray = arr.filter(function (item, pos) {
    return arr.indexOf(item) == pos;
})

console.log("Không dùng Set: ", uniqueArray);

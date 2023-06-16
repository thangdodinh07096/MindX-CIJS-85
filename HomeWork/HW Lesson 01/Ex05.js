// 5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
// Example: 	const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
// 			const arr2 = [3, 5, 9, 10, 88];
// 			=> [3,5,9]


const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];

let getEle = (arr1, arr2) => {
    let newArr1 = [...new Set(arr1)];
    let newArr2 = [...new Set(arr2)];
    let arr3 = [];
    for (let i = 0; i < newArr1.length; i++) {
        for (let j = 0; j < newArr2.length; j++) {
            if (newArr2[j] === newArr1[i]) {
                arr3.push(newArr2[j])
            }
        }
    }
    return arr3;
}

console.log(getEle(arr1, arr2));
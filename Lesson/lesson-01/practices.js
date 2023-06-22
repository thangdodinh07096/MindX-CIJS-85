function greeting(name) {
    console.log("Hello", name);
}

const sum = (a, b) => {
    return a + b;
}

const getPersonObj = (name, age) => {
    return {
        name: `${name}`,
        age: `${age}`
    }
}

(function greeting() {
    console.log("Hello");
})();

greeting("thang");
console.log("a + b = ", sum(4, 5));
console.log(getPersonObj("Thang", 25));



const arr = [1, 2, 3]
const arr2 = arr.map((item) => {
    return item * 2;
})
console.log(arr2)


const person = [
    {
        name: "Thang",
        age: 26
    },
    {
        name: "Chau",
        age: 25
    }
]
const namePerson = person.map((item) => {
    return item.name;
})
console.log(namePerson)
console.log(person)




const arr3 = [1, 2, 3, 4, 6]
const arr4 = arr3.filter((item) => {
    return item % 2 === 0;
})
console.log(arr4)

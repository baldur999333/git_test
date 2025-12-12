function getAverageAge(arr){
    let count = 0;
    const average = arr.reduce(
        (accumulator, currentValue) => 
            {
                ++count;
                return accumulator + currentValue.age;
            },
        0,
    );
    return average/count;
}
//just use arr.length to get count -_-


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
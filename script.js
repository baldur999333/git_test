function sumOfTripledEvens(array){
    const filteredArr = array.filter((num) => (num % 2 == 0));
    const mappedArr = filteredArr.map((num) => num * 3);
    const reducedArr = mappedArr.reduce((total, currentItem) =>{
        return total + currentItem;
    }, 0);
    console.log(array);
    console.log(reducedArr);
}

function camelize(text){
    let splitText = text.split("");
    for(let i = 0; i < text.length; ++i){
        if(splitText[i] == '-'){
            splitText[i+1] = splitText[i+1].toLocaleUpperCase();
        }
    }
    splitText = splitText.join("");
    let result = splitText.replaceAll('-','');
    console.log(result);
    return result;
}

function filterRange(arr, a, b){
    const filteredArr = arr.filter((num) => (num >= a && num <= b));
    console.log(arr);
    console.log(filteredArr);
    return filteredArr;    
}

function filterRangeInPlace(arr, a, b){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i,1);
            --i;
        }
    }
    console.log(arr);
}

function sortInDecr(){

    let arr = [5, 2, 1, -10, 8];

    let decreaseFunction = function (a, b){
        return b-a;
    }
    arr.sort(decreaseFunction);
    alert( arr );

}

function copySorted(arr){
    const copyArr = arr.slice();
    copyArr.sort();
    return copyArr;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

//sortInDecr();
// filterRange([5,3,8,1],2,5);
// sumOfTripledEvens([1,2,3,4,5,6,7,8,9]);
// camelize("border-left-width");
// camelize("list-style-image");
// camelize("-webkit-transition");
const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let count1 = 0;
let count2 = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while(found === false && start <=end) {
        count1+=1;
        middle = Math.floor((start+(end-start)/2));
        if(array[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if(item < array[middle]) {
            end = middle -1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

function recursiveBinarySearch(aray, item, start, end) {
    let position = 1;
    if((item < start) || (item > end)) {
        return position;
    }
    let middle = Math.floor((start +(end-start) / 2));
    count2 +=1;

    if(item === array[middle]) {
        return middle
    }
    if(item < array[middle]) {
        return recursiveBinarySearch(aray, item, start, middle -1)
    } else {
        return recursiveBinarySearch(aray, item, middle + 1, end)
    }
}

console.log(binarySearch(array, 3))
console.log(count1)
console.log(recursiveBinarySearch(array, -3,0,array.length))
console.log(count2)
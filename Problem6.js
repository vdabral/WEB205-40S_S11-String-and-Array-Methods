function customSplice(arr, start, deleteCount, ...items) {
    const removedItems = [];
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i >= start && i < start + deleteCount) {
            removedItems.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }

    for (let i = items.length - 1; i >= 0; i--) {
        newArr.splice(start, 0, items[i]);
    }

    arr.length = 0;
    newArr.forEach(item => arr.push(item));

    return removedItems;
}

function customSlice(arr, start = 0, end = arr.length) {
    const result = [];
    for (let i = start; i < end; i++) {
        if (i >= 0 && i < arr.length) {
            result.push(arr[i]);
        }
    }
    return result;
}

function customIncludes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) return true;
    }
    return false;
}

function customToLowerCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        result += code >= 65 && code <= 90 ? String.fromCharCode(code + 32) : str[i];
    }
    return result;
}

function customToUpperCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        result += code >= 97 && code <= 122 ? String.fromCharCode(code - 32) : str[i];
    }
    return result;
}

function customPush(arr, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        arr[arr.length] = elements[i];
    }
    return arr.length;
}

function customPop(arr) {
    if (arr.length === 0) return undefined;
    const lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElement;
}

let arr = [1, 2, 3, 4];
console.log(customSplice(arr, 1, 2, 5, 6));
console.log(arr);

let arr2 = [10, 20, 30, 40, 50];
console.log(customSlice(arr2, 1, 4));

console.log(customIncludes(arr2, 30));
console.log(customIncludes(arr2, 60));

console.log(customToLowerCase("HELLO WORLD"));
console.log(customToUpperCase("hello world"));

let arr3 = [7, 8, 9];
console.log(customPush(arr3, 10, 11));
console.log(arr3);

console.log(customPop(arr3));
console.log(arr3);

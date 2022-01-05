function getRandomElement(arr) {
    return arr[randomNo(arr.length)];
}

function randomNo(length) {
    return Math.floor(Math.random() * length);
}
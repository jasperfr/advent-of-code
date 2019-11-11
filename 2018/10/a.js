let skipSize = 0;
let pointer = 0;
let array = Array.create(0, 255);
let input = "AoC 2017".toCharArray(); //[147, 37, 249, 1, 31, 2, 226, 0, 161, 71, 254, 243, 183, 255, 30, 70];
input.append([17, 31, 73, 47, 23]);
console.log(input);
for(let i = 0; i < input.length; i++) {
    array.forReverse(pointer, input[i]);
    pointer += skipSize + input[i];
    skipSize++;
}
console.log(array);
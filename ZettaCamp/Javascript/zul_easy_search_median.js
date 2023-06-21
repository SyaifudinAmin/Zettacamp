// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];


function result(input) {
    input.sort(function (a, b) { return a - b });
    const mid_index = Math.floor(input.length / 2);
    const median = input.length % 2 === 1 ?
        input[mid_index] :
        (input[mid_index - 1] + input[mid_index]) / 2;
    return median
}

console.log(result(input));
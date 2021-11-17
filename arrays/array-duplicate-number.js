/**
 *  Find the duplicate number | Leetcode
 *  input - [2, 5, 9, 6, 9, 3, 8, 9, 7, 1]
 *  output - 9
 **/

/**
 * Time Complexity O(N)
 * Space Complexity O(N)
 * @param {*} input_array 
 * @returns 
 */
function findDuplicateInArrayHashing(input_array) {
    var map = {}, duplicate = -1;
    for (var elem of input_array) {
        if (!map.hasOwnProperty(elem)) {
            map[elem] = 1;
        } else {
            duplicate = elem;
            break;
        }
    }
    return duplicate;
}

const sequence = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1];

var duplicate = findDuplicateInArrayHashing(sequence);
console.log("Duplicate element is (Hashing algorithm) :", duplicate);

function findDuplicateInArrayFloydAlgorithm(input_array) {
    var slow = input_array[0], fast = input_array[0];
    do {
        slow = input_array[slow];
        fast = input_array[input_array[fast]];
    } while (slow !== fast);
    fast = input_array[0];
    while (slow !== fast) {
        slow = input_array[slow];
        fast = input_array[fast];
    }
    return slow;
}

duplicate = findDuplicateInArrayFloydAlgorithm(sequence);
console.log("Duplicate element is (Floyd's Tortoise and Hare algorithm) :", duplicate);

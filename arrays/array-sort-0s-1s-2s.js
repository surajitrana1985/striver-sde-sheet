/**
 *  Sort an array of 0's 1's & 2's | Leetcode
 *  input - [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
 *  output - [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
 **/

/**
 * Time Complexity O(2N)
 * Space Complexity O(N)
 * @param {*} sequence 
 * @returns 
 */
function sortArrayBruteForceApproach(sequence) {
    var countArr = {}, result = [];
    for (var i = 0; i < sequence.length; i++) {
        if (!countArr.hasOwnProperty(sequence[i])) {
            countArr[sequence[i]] = 1;
        } else {
            countArr[sequence[i]]++;
        }
    }
    for (var key in Object.keys(countArr)) {
        var seqCount = countArr[key];
        for (var i = 0; i < seqCount; i++) {
            result.push(key);
        }
    }
    return result;
}

function swap(seq, a, b) {
    seq[a] = seq[a] ^ seq[b];
    seq[b] = seq[a] ^ seq[b];
    seq[a] = seq[a] ^ seq[b];
}

/**
 * Time Complexity O(N)
 * Space Complexity O(1)
 * @param {*} sequence 
 * @returns 
 */
function sortArrayDutchNationalFlagAlgorithm(sequence) {
    var seq_length = sequence.length, low = 0, mid = 0, high = seq_length - 1;
    while (mid <= high) {
        if (sequence[mid] === 0) {
            swap(sequence, low, mid);
            low++;
            mid++;
        } else if (sequence[mid] === 1) {
            mid++;
        } else if (sequence[mid] === 2) {
            swap(sequence, mid, high);
            high--;
        }
    }
    return sequence;
}

var input_sequence = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

var result = sortArrayBruteForceApproach(input_sequence);
console.log('Sorted array (Brute-Force) is :', result);

var result = sortArrayDutchNationalFlagAlgorithm(input_sequence);
console.log('Sorted array (Dutch National Flag Algorithm) is :', result);

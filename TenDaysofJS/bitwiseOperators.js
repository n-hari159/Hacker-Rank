'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getMaxLessThanK(n, k) {
    var max = 0;
    var summ;
    for (var b = 1; b <= n; b++) {
        for (var a = 1; a < b; a++) {
            summ = a & b;
            if (summ < k) {
                if (summ > max) max = summ;
            }
        }
    }
    return max;
}

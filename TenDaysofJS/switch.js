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

function getLetter(s) {
    let letter;
    // Write your code here
    letter =    "aeiou".includes(s[0]) ? "A" :
                "bcdfg".includes(s[0]) ? "B" :
                "hjklm".includes(s[0]) ? "C" :
                "npqrstvwxyz".includes(s[0]) ? "D":
                null;
    return letter;
}


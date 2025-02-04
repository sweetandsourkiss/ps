const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

/**
 * @author sweetandsourkiss
 * @name boj 1987
 * @description 2025.02.04
 */

const [R, C] = input[0].split(' ').map(Number);
const board = input.slice(1).map(row => row.trim().split(''));

const delta = [[-1, 0], [1, 0], [0, -1], [0, 1]];
let maxResult = 0;

// 유니크 문자 수 계산
const uniqueChars = new Set(board.flat());
const totalUnique = uniqueChars.size;

function isValid(x, y) {
    return x >= 0 && x < R && y >= 0 && y < C;
}

function countBits(n) {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24;
}

function dfs(x, y, mask) {
    const charCode = board[x][y].charCodeAt(0) - 65;
    const newMask = mask | (1 << charCode);
    
    maxResult = Math.max(maxResult, countBits(newMask));
    
    if (maxResult === totalUnique) return;
    
    for (const [dx, dy] of delta) {
        const nx = x + dx, ny = y + dy;
        if (isValid(nx, ny)) {
            const nextCharCode = board[nx][ny].charCodeAt(0) - 65;
            if (!(newMask & (1 << nextCharCode))) {
                dfs(nx, ny, newMask);
            }
        }
    }
}

dfs(0, 0, 0);
console.log(maxResult);

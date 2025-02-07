const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function printStars(n) {
    const width = 2 * n - 1;
    const rows = Array.from({ length: n }, () => Array(width).fill(' '));

    function drawStar(x, y, size) {
        if (size === 3) {
            rows[x][y] = '*';
            rows[x + 1][y - 1] = '*';
            rows[x + 1][y + 1] = '*';
            for (let i = -2; i <= 2; i++) {
                rows[x + 2][y + i] = '*';
            }
        } else {
            const half = size / 2;
            drawStar(x, y, half);
            drawStar(x + half, y - half, half);
            drawStar(x + half, y + half, half);
        }
    }

    drawStar(0, n - 1, n);
    return rows.map(row => row.join('')).join('\n');
}

console.log(printStars(input));

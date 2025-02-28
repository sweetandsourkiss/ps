function solution(commands) {
    const table = Array.from({ length: 51 }, () => Array(51).fill(""));
    const parent = Array.from({ length: 51 }, (_,row) =>
        Array.from({ length: 51 }, (_, col) => [row, col])
    );
    const result = [];

    function find(r, c) {
        if (parent[r][c][0] === r && parent[r][c][1] === c) {
            return [r, c];
        }
        return (parent[r][c] = find(parent[r][c][0], parent[r][c][1]));
    }

    function merge(r1, c1, r2, c2) {
        if(r1 === r2 && c1 === c2) return;
        
        const [pr1, pc1] = find(r1, c1);
        const [pr2, pc2] = find(r2, c2);

        if (pr1 === pr2 && pc1 === pc2) return;

         // 값이 있는 셀이 우선적으로 값을 유지
        if (table[pr1][pc1] === "") {
            parent[pr1][pc1] = [pr2, pc2];
        } else {
            parent[pr2][pc2] = [pr1, pc1];
        }
        for (let i = 1; i <= 50; i++) {
            for (let j = 1; j <= 50; j++) {
                find(i, j);
            }
        }
    }

    function unmerge(r, c) {
        const [pr, pc] = find(r, c);
        const value = table[pr][pc];

        for (let i = 1; i <= 50; i++) {
            for (let j = 1; j <= 50; j++) {
                const [curR, curC] = find(i, j);
                if (curR === pr && curC === pc) {
                    parent[i][j] = [i, j];
                    table[i][j] = "";
                }
            }
        }

        table[r][c] = value;
    }

    for (const command of commands) {
        const parts = command.split(" ");

        if (parts[0] === "UPDATE") {
            if (parts.length === 4) {
                const r = parseInt(parts[1]);
                const c = parseInt(parts[2]);
                const value = parts[3];
                const [pr, pc] = find(r, c);
                table[pr][pc] = value;
            } else {
                const value1 = parts[1];
                const value2 = parts[2];

                for (let i = 1; i <= 50; i++) {
                    for (let j = 1; j <= 50; j++) {
                        const [pr, pc] = find(i, j);
                        if (table[pr][pc] === value1) {
                            table[pr][pc] = value2;
                        }
                    }
                }
            }
        } else if (parts[0] === "MERGE") {
            const r1 = parseInt(parts[1]);
            const c1 = parseInt(parts[2]);
            const r2 = parseInt(parts[3]);
            const c2 = parseInt(parts[4]);
            merge(r1, c1, r2, c2);
        } else if (parts[0] === "UNMERGE") {
            const r = parseInt(parts[1]);
            const c = parseInt(parts[2]);
            unmerge(r, c);
        } else if (parts[0] === "PRINT") {
            const r = parseInt(parts[1]);
            const c = parseInt(parts[2]);
            const [pr, pc] = find(r, c);
            result.push(table[pr][pc] === "" ? "EMPTY" : table[pr][pc]);
        }
    }

    return result;
}

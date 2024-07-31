//BFS is ideal for this problem because it explores all positions layer by layer, ensuring the shortest path is found.
function knightMoves(start, move){
    const directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const isValid = (x, y) => x >= 0 && y >= 0 && x < 8 && y < 8;

    const bfs = (start, end) => {
        let queue = [[start]];
        let visited = new Set();
        visited.add(start.toString());

        while(queue.length > 0){
            let path = queue.shift();
            let [x, y] = path[path.length - 1];

            if (x === end[0] && y === end[1]) {
                return path;
            }

            for (let [dx, dy] of directions) {
                let newX = x + dx;
                let newY = y + dy;

                if(isValid(newX, newY)){
                    let newPos = [newX, newY];

                    if (!visited.has(newPos.toString())) {
                        visited.add(newPos.toString());
                        queue.push([...path, newPos]);
                    }
                }
            }
        }
    };

    const path = bfs(start, end);
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(pos => console.log(pos));
    return path;
}

// Test cases
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);

var numIslands = function(grid) {
    const direction = [[-1,0],[1,0],[0,1],[0,-1]];
    let result = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                result += 1;
                grid[i][j] = "2";
                bfs(i, j);
            }
        }
    }
    
    
    function bfs(y, x) {
        const queue = [[y, x]];
        
        while (queue.length > 0) {
            const curr = queue.shift();
            const dy = curr[0], dx = curr[1];
            
            for (let i = 0; i < 4; i++) {
                let ny = dy + direction[i][0];
                let nx = dx + direction[i][1];
                if (ny < 0 || nx < 0 || ny >= grid.length || nx >= grid[0].length) {
                    continue;   
                }
                if (grid[ny][nx] === "1") {
                    grid[ny][nx] = "2";
                    queue.push([ny, nx]);
                }
            }
        }
    }
    
    return result;
};


var isValidBST = function(root) {
    
};

// binary tree = each node has a parent and a left child and a right child
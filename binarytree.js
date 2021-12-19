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

var floodFill = function(image, sr, sc, newColor) {
    var startColor = image[sr][sc]; 
    var visited = new Set(); 
    var queue = [[sr, sc]]; 
 
    if (startColor === newColor) {
        return image; 
    }
    
    while (queue.length > 0) {
        var pixel = queue.pop(); 
        visited.add(pixel); 
        image[pixel[0]][pixel[1]] = newColor
  
        var neighbors = getNeighbors(image, pixel[0], pixel[1], startColor); 
        for (var i = 0; i < neighbors.length; i++) {
            var current = neighbors[i];
            if (!visited.has(current)) {
                queue.push(current); 
            }
        }
    }

    return image; 
};

var getNeighbors = function(grid, rowIndex, colIndex, startColor) {
    var neighbors = []; 
    // list all possible neighbors
    var potentialNeighbors = [[rowIndex-1, colIndex], [rowIndex+1, colIndex], [rowIndex, colIndex+1], [rowIndex, colIndex-1]]
    // must validate whether or not a neighbor is at the edge
    for (var i = 0; i < potentialNeighbors.length; i++) {
        var current = potentialNeighbors[i]; 
        if (isValid(grid,current)) {
            var color = grid[current[0]][current[1]]; 
            if (color === startColor) {
                neighbors.push(current); 
            }
        }
    }
    // return array of coordinates for its left, right, up, and down neighbors
    return neighbors; 
}

var isValid = function (grid, current) {
    return (current[0] >= 0 && current[1] >= 0 && current[0] < grid.length && current[1] < grid[0].length)
}

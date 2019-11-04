class data {
    constructor(x, y, number) {
        this.x = x;
        this.y = y;
        this.number = number;
    }

    printLocation() {
        console.log(`Location of ${this.number}: [${this.x}, ${this.y}]`);
    }

    distanceManhattan(target) {
        let xpos = Math.abs(this.x - target.x);
        let ypos = Math.abs(this.y - target.y);
        return xpos + ypos;
    }
}

let objects = [];

let direction = 0; // 0 right 1 up 2 left 3 down

let xpos = 0;
let ypos = 0;
let pathAcc = 2;
let pathLength = 1;

objects.push(new data(0, 0, 1)); // initial

for(let i = 1; i <= 1000; i++) {
    // move to the specified direction
    switch(direction) {
        case 0: // right
            xpos++;
        break;
        case 1: // up
            ypos--;
        break;
        case 2: // left
            xpos--;
        break;
        case 3: // down
            ypos++;
        break;
    }
    pathLength--;
    if(pathLength == 0) {
        direction++;
        if(direction > 3) direction = 0;
        pathLength = Math.round(pathAcc / 2);
        pathAcc++;
    }
    
    var databank = new data(xpos, ypos, 0);
    objects.push(databank);
    let sum = getAdjacentSum(xpos, ypos);
    databank.number = sum;

    // limit results
    if(sum > 289300) {
        console.log(`Larger number found: ${sum}`);
    }
}

// heavy garbage, whatever...
function getAdjacentSum(x, y) {
    let outputSum = 0;
    objects.forEach(obj => {
        for(let i = x - 1; i <= x + 1; i++) {
            for(let j = y - 1; j <= y + 1; j++) {
                if(!(i == x && j == y) && (j == obj.y && i == obj.x)) {
                    outputSum += obj.number;
                }
            }
        }
    });
    return outputSum;
}
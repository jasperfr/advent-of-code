[].__proto__.get = function(i) {
    while(i >= this.length) {
        i = i - this.length;
    }
    return this[i];
};

[].__proto__.set = function(i, val) {
    while(i >= this.length) {
        i = i - this.length;
    }
    this[i] = val;
};

[].__proto__.for = function(i, j, func) {
    for(let x = i; x <= j; x++) {
        let y = x;
        while(y >= this.length) {
            y = y - this.length;
        }
        this[y] = func(this[y]);
    }
};

[].__proto__.forReverse = function(i, j) {
    let data = [];
    for(let x = i; x < i+j; x++) {
        let y = x;
        while(y >= this.length) {
            y = y - this.length;
        }
        data.push(this[y]);
    }
    data.reverse();
    let o = 0;
    for(let x = i; x < i+j; x++) {
        let y = x;
        while(y >= this.length) {
            y = y - this.length;
        }
        this[y] = data[o];
        o++;
    }
};

Array.__proto__.create = function(start, end) {
    let out = [];
    for(let i = start; i <= end; i++) {
        out.push(i);
    }
    return out;
}

"".__proto__.toCharArray = function() {
    let out = [];
    for(let i = 0; i < this.length; i++) {
        out.push(this[i].charCodeAt());
    }
    return out;
};

[].__proto__.append = function(array) {
    for(let i = 0; i < array.length; i++) {
        this.push(array[i]);
    }
};

function knotHash(str) {
    let skipSize = 0;
    let pointer = 0;
    let array = Array.create(0, 255);
    let input = str.toCharArray();
    input.append([17, 31, 73, 47, 23]);

    // perform operation
    for(let times = 0; times < 64; times++) {
        for(let i = 0; i < input.length; i++) {
            array.forReverse(pointer, input[i]);
            pointer += skipSize + input[i];
            skipSize++;
        }
    }

    // convert to hash
    hash = [];
    for(let i = 0; i < 255; i += 16) {
        let a = array[i];
        for(let j = 1; j < 16; j++) {
            a ^= array[i + j];
        }
        hash.push(a);
    }

    // convert to hex string
    let string = "";
    for(let i = 0; i < hash.length; i++) {
        let g = hash[i].toString(16);
        if(g.length < 2) g = "0" + g;
        string += g;
    }
    return string;
}

//[147, 37, 249, 1, 31, 2, 226, 0, 161, 71, 254, 243, 183, 255, 30, 70];
console.log(knotHash(""));
console.log(knotHash("AoC 2017"));
console.log(knotHash("1,2,3"));
console.log(knotHash("1,2,4"));
output = {
    clear: function() {
        $('#output').html('');
    },
    write: function(str) {
        $('#output').html($('#output').html() + str);
    },
    newline: function(str) {
        $('#output').html($('#output').html() + '<br>');
    },
    log: function(str) {
        $('#output').html($('#output').html() + str + '<br>');
    }
};

// hook console log
// console.log = function(str) {
//     output.log(str);
// };

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

// Knot hash function.

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

function HexToByteArray(string) {
    let arr = [];
    string.split('').forEach(char => {
        // trash code, whatever
        switch(char) {
            case '0': arr.push('0000'); break;
            case '1': arr.push('0001'); break;
            case '2': arr.push('0010'); break;
            case '3': arr.push('0011'); break;
            case '4': arr.push('0100'); break;
            case '5': arr.push('0101'); break;
            case '6': arr.push('0110'); break;
            case '7': arr.push('0111'); break;
            case '8': arr.push('1000'); break;
            case '9': arr.push('1001'); break;
            case 'a': arr.push('1010'); break;
            case 'b': arr.push('1011'); break;
            case 'c': arr.push('1100'); break;
            case 'd': arr.push('1101'); break;
            case 'e': arr.push('1110'); break;
            case 'f': arr.push('1111'); break;
        }
    });
    return arr.join('');
}

function toBitString(i) {
    let out = "";
    for(let j = 2147483648; j >= 1; j /= 2) {
        if(i - j >= 0) {
            out += '1';
            i -= j;
        } else {
            out += '0';
        }
    }
    return out;
}
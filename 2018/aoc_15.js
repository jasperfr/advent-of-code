function* aoc_15a_gen(i1, i2) {
    var genA = i1;
    var genB = i2;
    while(true) {
        genA = (genA * 16807) % 2147483647;
        genB = (genB * 48271) % 2147483647;
        yield toBitString(genA).substr(16, 16) == toBitString(genB).substr(16, 16);
    }
}

function aoc_15a(i1, i2, count) {
    console.log("15A");
    let sum = 0;
    var g15a = aoc_15a_gen(i1, i2);
    for(let i = 0; i < count; i++) {
        if(g15a.next().value) sum++;
    }
    return sum;
}

function* aoc_15b_gen(i1, i2) {
    var genA = i1;
    var genB = i2;
    while(true) {
        do { genA = (genA * 16807) % 2147483647 } while(genA % 4 != 0);
        do { genB = (genB * 48271) % 2147483647 } while(genB % 8 != 0);
        yield toBitString(genA).substr(16, 16) == toBitString(genB).substr(16, 16);
    }
}

function aoc_15b(i1, i2, count) {
    console.log("15B");
    let sum = 0;
    var g15b = aoc_15b_gen(i1, i2);
    for(let i = 0; i < count; i++) {
        if(g15b.next().value) sum++;
    }
    return sum;
}
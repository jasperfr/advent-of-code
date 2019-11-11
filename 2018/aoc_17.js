function aoc_17_insert(arr, pos, i) {
    let out = [];
    out.append(arr.splice(0, pos + 1));
    out.push(i);
    out.append(arr);
    return out;
}

function aoc_17_step(arr, pos, count) {
    while(count > 0) {
        count--;
        pos++;
        if(pos >= arr.length) pos = 0;
    }
    return pos;
}

function aoc_17a(input) {
    let arr = [0];
    let pos = 0;
    let num = 0;
    let step = input;
    for(let i = 0; i < 2017; i++) {
        //console.log('Array: ' + arr);
        //console.log('Current position: ' + pos);
        pos = aoc_17_step(arr, pos, step);
        //console.log('New position: ' + pos);
        arr = aoc_17_insert(arr, pos, ++num);
        pos++;
        //console.log('\n');
    }
    let out = [], yes = false;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 2017) yes = true;
        if(yes) out.push(arr[i]);
    }
    console.log(out);
}

// max array size is 2^32-1, can't put 50.000.000 values inside 1 array
function aoc_17b(input) {
    let numbersAt1 = [];
    let size = 1;
    let pos = 0;
    let num = 0;
    let step = input;
    for(let i = 0; i <= 50_000_000; i++) {
        for(let j = 0; j < step; j++) {
            pos++;
            if(pos >= size) pos = 0;
        }
        num++;
        size++;
        pos++;
        if(pos == 1) numbersAt1.push(num);
        if(pos >= size) pos = 0;
    }
    console.log(numbersAt1);
}
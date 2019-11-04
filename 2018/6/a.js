config = [];
membank = [11,11,13,7,0,15,5,5,4,4,1,1,7,1,15,11];

function max() {
    let maxi = 0;
    let maxc = 0;
    for(let i = 0; i < membank.length; i++) {
        if(membank[i] > maxc) {
            maxi = i;
            maxc = membank[i];
        }
    }
    return maxi;
}

function redis() {
    let i = max();
    let count = membank[i];
    membank[i] = 0;
    while(count > 0) {
        i++;
        if(i >= membank.length) {
            i = 0;
        }
        membank[i]++;
        count--;
    }
    if(config.find(cfg => cfg == membank.toString()) == undefined) {
        config.push(membank.toString());
        return membank;
    }
    else {
        return false;
    }
}

let cycles = 0;
while(1) {
    cycles++;
    membank = redis();
    if(membank == false) break;
    console.log(membank);
}
console.log(`${cycles} cycles.`);
console.log(membank);
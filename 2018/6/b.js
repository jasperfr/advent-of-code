config = [];
find = "1,0,14,14,12,12,10,10,8,8,6,6,4,3,2,1";
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
    if(membank.toString() == find) {
        increment = true;
    }
    if(config.find(cfg => cfg == membank.toString()) == undefined) {
        config.push(membank.toString());
        return membank;
    }
    else {
        console.log(membank.toString());
        return false;
    }
}

increment = false;
i = 0;
cycles = 0;
while(1) {
    if(increment) i++;
    cycles++;
    membank = redis();
    if(membank == false) break;
}
console.log(`${i} steps for the loop to reappear.`);
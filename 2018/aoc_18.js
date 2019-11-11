const Duet = function() {

    var LAST_SOUND = -999;
    const REGISTRY = {};

    var snd = function(i) {
        console.log("♫ " + REGISTRY[i] + " ♬");
        LAST_SOUND = i;
        console.log(REGISTRY);
    }

    var set = function(i, val) {
        if(isNaN(parseInt(val))) {
            REGISTRY[i] = REGISTRY[val];
        } else {
            REGISTRY[i] = parseInt(val);
        }
        console.log(REGISTRY);
    }

    var add = function(i, val) {
        if(isNaN(parseInt(val))) {
            REGISTRY[i] += REGISTRY[val];
        } else {
            REGISTRY[i] += parseInt(val);
        }
        console.log(REGISTRY);
    }

    var mul = function(i, val) {
        if(isNaN(parseInt(val))) {
            REGISTRY[i] *= REGISTRY[val];
        } else {
            REGISTRY[i] *= parseInt(val);
        }
        console.log(REGISTRY);
    }

    var mod = function(i, val) {
        if(isNaN(parseInt(val))) {
            REGISTRY[i] %= REGISTRY[val];
        } else {
            REGISTRY[i] %= parseInt(val);
        }
        console.log(REGISTRY);
    }

    var rcv = function(i) {
        if(isNaN(parseInt(i))) {
            if(REGISTRY[i] > 0) {
                console.log('=== RCV ===');
                snd(LAST_SOUND);
            } else console.log('! SKIPPED RCV OPERATION');
        } else {
            if(i > 0) {
                console.log('=== RCV ===');
                snd(LAST_SOUND);
            } else console.log('! SKIPPED RCV OPERATION');
        }
    }

    var jgz = function(val, i) {
        if(REGISTRY[val] > 0) return i;
        console.log('! SKIPPED JUMP OPERATION');
        return 0;
    }

    return {
        set: set,
        snd: snd,
        add: add,
        mul: mul,
        mod: mod,
        rcv: rcv,
        jgz: jgz
    }

}();

var input = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`.split('\n');

let halt = 0;
for(let i = 0; i < input.length; i++) {
    halt++; if(halt > 100) break;
    let command = input[i].split(' ');
    let instruction = command[0];
    let arg0 = command[1];
    let arg1 = command[2];
    switch(instruction) {
        case 'set':
            Duet.set(arg0, arg1);
            break;
        case 'add':
            Duet.add(arg0, arg1);
            break;
        case 'mul':
            Duet.mul(arg0, arg1);
            break;
        case 'mod':
            Duet.mod(arg0, arg1);
            break;
        case 'snd':
            Duet.snd(arg0);
            break;
        case 'rcv':
            Duet.rcv(arg0);
            break;
        case 'jgz':
            i += Duet.jgz(arg0, parseInt(arg1));
            break;
    }
}
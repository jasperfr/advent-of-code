let posit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let input = [4, 2, 3, 0, 4, 0, 8, 0, 5, 0, 6, 0, 6, 0, 10, 0, 8, 0, 6, 0, 9, 0, 8, 0, 6, 0, 8, 0, 8, 0, 12, 0, 12, 0, 12, 0, 12, 0, 10, 0, 12, 0, 12, 0, 14, 0, 8, 0, 14, 0, 12, 0, 14, 0, 14, 0, 0, 0, 14, 0, 12, 0, 14, 0, 14, 0, 12, 0, 12, 0, 0, 0, 14, 0, 18, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 20, 0, 0, 0, 14, 0, 14, 0, 18, 0, 18, 0];

function iterate(i) {
    let a = [...input];
    let q = [...posit];
    let pos = 0, halt = i, sum = 0;
    for(let i = 0; i < q.length; i++) {
        if(q[pos] == 0) sum += a[pos] * pos;
        for(let x = 0; x < q.length; x++) {
            q[x]++; if(q[x] >= ((a[x]-1)*2)) q[x] = 0;
        }
        if(halt > 0) { halt--; i--; } else pos++;
    }
    return sum;
}

/*
function* aoc_13b_gen() {
    let delay = 0, count = 0, pos = 0, sum = 0;
    let a = [3, 2, 0, 0, 4, 0, 4];
    let q = [0, 0, 0, 0, 0, 0, 0];
    while(true) {

        pos = 0;
        sum = 0;
        q = [0, 0, 0, 0, 0, 0, 0];

        let moving = true;
        while(moving) {

            // Move scanners
            for(let x = 0; x < q.length; x++) {
                q[x]++; 
                if(q[x] >= ((a[x]-1)*2)) {
                    q[x] = 0;
                }
            }
            if(delay == 0) console.log(q);

            // Move OR halt
            if(delay > 0) {
                delay--;
            }
            else {
                pos++;
            }

            // Collided with scanner
            if(q[pos] == 0) {
                console.log(`collided pos: ${pos} a: ${a[pos]}`);
                sum += a[pos] * pos;
            }

            if(pos > q.length) {
                moving = false;
                break;
            }
        }

        count++;
        delay = count;
        yield sum;
    }
}
*/

function aoc_13b() {
    let sum = -1; i = 0;
    while(sum != 0) {
        i++;
        sum = iterate(i);
        if(i % 100 == 0) console.log(`${i} iterations...`);
    }
    console.log(i);
}

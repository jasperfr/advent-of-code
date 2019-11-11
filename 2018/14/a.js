function aoc_14a(input) {
    console.log('14A');
    let sum = 0;
    for(let i = 0; i < 128; i++) {
        let str = HexToByteArray(knotHash(input + "-" + i));
        str.split('').forEach(char => {
            if(char === '1') sum++;
        });
    }
    return sum;
}
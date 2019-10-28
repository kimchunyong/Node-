const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체시간');
console.log('평벙한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.timeEnd('전체시간');
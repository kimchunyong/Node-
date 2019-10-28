const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
}

const { status: d, getCandy: e, a, b } = candyMachine;

console.log(d);
console.log(e);


const array = ["node.js", {}, 10, true];

const [node, obj, , bool] = array; d

console.log(node, obj, bool);

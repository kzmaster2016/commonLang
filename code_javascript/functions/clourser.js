function closure() {
    let bigData = new Array(1000000).fill(1);
    return function () {
        console.log(bigData.length);
    };
}
let leaky = closure();
leaky();
bigData = null;
// leaky();
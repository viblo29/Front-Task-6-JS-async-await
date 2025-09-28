function downloadMovie1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Movie 1 downloaded"), 1000);
    });
}
function downloadMovie2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Movie 2 downloaded"), 2000);
    });
}
function downloadMovie3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Movie 3 downloaded"), 3000);
    });
}

async function partA() {
    console.log(`part A:`)
    const result1 = await downloadMovie1();
    console.log(result1);
    const result2 = await downloadMovie2();
    console.log(result2);
    const result3 = await downloadMovie3();
    console.log(result3);
}   

async function partB() {
    console.log('Part B:')
    const promisesB = [downloadMovie1(), downloadMovie2(), downloadMovie3()];
    const promiseAllB = await Promise.all(promisesB);
    console.log(promiseAllB);
}

async function partC() {
    console.log("part C:")
    const promisesC = [downloadMovie1(), downloadMovie2(), downloadMovie3()];
    const promiseAllC = await Promise.race(promisesC);
    console.log(promiseAllC);
}

async function execution() {
    await partA();
    await partB();
    await partC();
}
execution();
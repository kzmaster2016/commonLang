(new Promise(function (resolve, reject) {
    // 模拟一个需要 1s 的网络请求
    setTimeout(function () {
        console.log('start request');
        resolve('resolve:Data received from server');
        // reject('reject:Data received from server');
    }, 1000);
})).then(function (res) {
    console.log(`then1:${res}`);
    // return res;
    return Promise.resolve("then1: data");
}).then(function (res) {
    console.log(`then2:${res}`);

    return Promise.reject("then2:wrong data");
}).then(function (res) {
    // 如果上一个 then 返回的是 reject，则不会执行这个 then
    console.log(`then3:${res}`);
    return Promise.resolve("wrong data");
}).catch(function (err) {
    console.error(`catch error1:${err}`);
    return Promise.resolve("catch error1"); // 如果这里返回 reject，则会继续执行下一个 then
    //return Promise.reject("catch error1"); // 如果这里返回 reject，则会继续执行下一个 catch
}).then(function (res) {
    console.log(`then4:${res}`);
    return Promise.resolve("then4: data");
}).then(function (res) {
    console.log(`then5:${res}`);

    return Promise.reject("then5:wrong data");
}).then(function (res) {
    // 如果上一个 then 返回的是 reject，则不会执行这个 then
    console.log(`then6:${res}`);
    return Promise.resolve("wrong data");
}).catch(function (err) {
    console.error(`catch error2:${err}`);
});

/**
 * 总结:
 * then 内部返回的也是promise对象，
 * 如果返回的是 resolve，则会继续执行下一个 then
 * 如果返回的是 reject，则会执行下一个 catch
 * 
 * catch 内部返回的也是promise对象，
 * 如果返回的是 resolve，则会继续执行下一个 then
 * 如果返回的是 reject，则会执行下一个 catch
 * 
 * 所以，
 * then接受promise中resolve的数据，
 * catch接受promise中reject的数据
 * 因为 reject 如果不被处理会报错哦，最后应该跟一个catch
 * 
 */
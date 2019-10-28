const promise = new Promise((res, rej) => {
    res('성공');
});

const successPromise = Promise.resolve('성공');
const failurePromise = Promise.reject('실패');

Promise.all()
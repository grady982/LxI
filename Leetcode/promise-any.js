// 1. 回傳一個 promise
// 2. 回傳第一個完成的 promise
// 3. 如果全部失敗回傳錯誤物件
const myPromiseAny = (...ps) => {
    return new Promise((resolve, reject) => {
        let errors = {};
        let errorCount = 0;
        const totle = ps.length;

        for(let i = 0; i < ps.length; i++) {
            const curPromise = ps[i];

            Promise.resolve(curPromise)
                .then((val) => {
                    // 先進到 then 的先 resolve
                    resolve(val);
                })
                .catch(() => {
                    errorCount++;
                    errors[i] = `The ${i} promise is fail.`;
                    // 全都進到 catch 的話 reject
                    if (errorCount === totle) {
                        reject(errors);
                    }
                });
        }
    });
}

const p1 = Promise.reject('Error 1');
const p2 = Promise.reject('Error 2');
const p3 = Promise.resolve('Success!');

myPromiseAny(p1, p2, p3)
  .then((result) => console.log('Resolved with:', result))
  .catch((err) => console.log('Rejected with:', err));
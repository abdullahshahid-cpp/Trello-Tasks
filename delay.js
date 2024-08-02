async function delayedPromiseChain(promises, delay) {
    output=[]
    for(let i=0; i<promises.length; i++)
    {
        output.push(await promises[i]())
        console.log(output[i])
        if(i<promises.length-1)
        {
            const delayedPromise = new Promise(resolve => setTimeout(() => resolve(0), delay));
            await delayedPromise
        }
    }
    return `promises ${output} resolved by the delay of ${delay/1000}s`
}

const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
const promise3 = () => new Promise(resolve => setTimeout(() => resolve(3), 800));
const promise4 = () => new Promise(resolve => setTimeout(() => resolve(4), 300));

const promiseFunctions = [promise1, promise2, promise3, promise4];
const delay = 1000;

delayedPromiseChain(promiseFunctions, delay).then(console.log)
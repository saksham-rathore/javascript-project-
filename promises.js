const promises = new Promise(function(resolve, rejected){
    setTimeout(function(){
        console.log('async code is run')
        resolve()
    }, 1000)
}).then(function(){
    console.log("is this done")
})





const promisestwo = new Promise(function(resolve, rejected){
    setTimeout(function(){
        console.log('async code is run')
        rejected()
    }, 1000)
}).then(function(){
    console.log("is this done")
})

const promisesthree = new Promise(function(){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "sam", password: "234"})
        } else {
            reject('error: something went error')
        }
    }, 2000)
})

promisesthree.then((user) => {

})
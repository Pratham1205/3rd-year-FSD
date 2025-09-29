const myPromise = new Promise((resolve, reject) => {
    const password = "nishakrsh@1234";
    if (password.length >= 8) {
        resolve("Password length is ok");
    } else {
        reject("Password length is too short");
    }


});
console.log(myPromise);
myPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Promise is competed successfully");
});


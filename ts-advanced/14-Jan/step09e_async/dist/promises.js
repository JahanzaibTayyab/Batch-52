function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            const data = "Hello i am data from callback";
            resolve(data);
        }, 1000);
    });
}
// fetchData("sdfghjk")
//   .then((data) => {
//     console.log("Promise Resolved", data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
function fetchData2(url) {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve(`Data for ${url}`);
        }
        else {
            reject("fghjkl");
        }
    });
}
fetchData2("fghjk")
    .then((value) => {
    console.log("this is then", value);
})
    .catch((error) => {
    console.log("This is catch", error);
})
    .finally(() => {
    console.log("Finally");
});
export {};

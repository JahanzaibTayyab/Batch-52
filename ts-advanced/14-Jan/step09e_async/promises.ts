function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am setTimeOut Function");
      reject("I am reject");
    }, 3000);
  });
}

// fetchData();
//console.log("Promise", fetchData());

fetchData()
  .then(() => {
    console.log("I am then function ");
  })
  .catch((error) => {
    console.log("I am catch function ");
  })
  .finally(() => {
    console.log("I am finally function");
  });

// fetchData("sdfghjk")
//   .then((data) => {
//     console.log("Promise Resolved", data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

function fetchData2(url: string) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve(`Data for ${url}`);
    } else {
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

async function fetchData3(url: string) {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve(`Data for ${url}`);
    } else {
      reject("fghjkl");
    }
  });
}

const response = await fetchData3("fghjk");
console.log("🚀 ~ response:", response);

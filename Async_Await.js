// using fetch with dummy data from typicode.
// from the same website they give this example.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

const url = "https://jsonplaceholder.typicode.com/todos/1";
fetch(url)
  .then((res) => {
    return res.json();
    // convert to json format here
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(error);
  });

//
// we can convert the above fetch response into async/await.
const LoadData = async () => {
  // in case of error how to handle so use try catch
  try {
    const url1 = `https://jsonplaceholder.typicode.com/todos/1`;

    // const url1 = `https://jsonplaceholdertesd.typicode.com/tods/1`;
    // incorrect URL above to check "catch" is working

    const response = await fetch(url1);
    // console.log("Response data async:", response);
    //  now convert this into JSON.

    const data = await response.json();
    console.log("response after JSON:", data);

    //async function always return a promise
    return data;
  } catch (err) {
    console.error("Failed due to invalid URL or incorrect URL:", err);
  }
};

// const data = LoadData();
// console.log(data);

// since async always return a promise we need to do
LoadData().then((data) => console.log(data));

// to achieve Top level Async Await. IIFE marked as Async. IIFE allowed to define inside of the paranthesis that weill be called directly. below is the example of async IIFE function
// (() => {})();
(async () => {
  const data = await LoadData();
  console.log(data);
})();

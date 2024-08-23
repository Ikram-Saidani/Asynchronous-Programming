// Task 01: Iterating with Async/Await
async function iterate(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}
var array = [5, 10, 15, 20, 25];
iterate(array);
// Task 02: Awaiting a Call
async function awaitCall() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
}
awaitCall();
// Task 03: Handling Errors with Async/Await
async function awaitCall() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Something went wrong", err);
  }
}
awaitCall();
// Chaining Async/Await
const first = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("First function");
};
const second = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("second function");
};
const third = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("third function");
};
async function chainedAsyncFunctions() {
  await first();
  await second();
  await third();
}
chainedAsyncFunctions();
// Task 04: Awaiting Concurrent Requests
async function concurrentRequests() {
  try {
    const api1 = "https://fakestoreapi.com/products/1";
    const api2 = "https://fakestoreapi.com/products/2";

    const [response1, response2] = await Promise.all([
      fetch(api1),
      fetch(api2),
    ]);

    if (!response1.ok) throw new Error("failed to fetch api1");
    if (!response2.ok) throw new Error("failed to fetch api2");

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log("Data from api1:", data1);
    console.log("Data from api2:", data2);
  } catch (error) {
    console.log(error);
  }
}
concurrentRequests();
// Task 05: Awaiting Parallel Calls
async function parallelCalls(URLs) {
  try {
    const promises = [];

    URLs.forEach((URL) => {
      promises.push(fetch(URL));
    });

    const responses = await Promise.all(promises);
    const dataPromises = [];

    responses.forEach((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      dataPromises.push(response.json());
    });

    const data = await Promise.all(dataPromises);

    data.forEach((item) => console.log(item));
  } catch (error) {
    console.log(error);
  }
}
const URLs = [
  "https://fakestoreapi.com/products/1",
  "https://fakestoreapi.com/products/2",
  "https://fakestoreapi.com/products/3",
  "https://fakestoreapi.com/products/4",
  "https://fakestoreapi.com/products/5",
];

parallelCalls(URLs);
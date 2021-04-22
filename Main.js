// for Revenue Page
fetch("https://donutshop-api.herokuapp.com/revenue?id=234", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    let x = document.getElementById("revenue");

    let result = document.createElement("h2");
    result.innerText = data.revenue.toLocaleString("en-us", {
      style: "currency",
      currency: "usd",
    });
    x.prepend(result);
    // console.log(data);
    // getInput();
  })
  .catch((err) => {
    console.error(err);
  });

// for inventory page
fetch("https://donutshop-api.herokuapp.com/inventory?id=234", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    let x = document.getElementById("inventory");

    let result = document.createElement("h5");
    result.innerText = JSON.stringify(data.donuts);
    x.prepend(result);
    // console.log(data.donuts);
    // getInput();
  })
  .catch((err) => {
    console.error(err);
  });

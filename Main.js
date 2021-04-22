let x = document.getElementById("revenue");

let result = document.createElement("h3");
result.innerText = "$100.00";
x.prepend(result);

fetch("https://donutshop-api.herokuapp.com/revenue?id=234", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    alert(
      `Dank Donuts Revenue:$${JSON.stringify(
        data.revenue.toLocaleString("en-us", {
          style: "currency",
          currency: "usd",
        })
      )}`
    );
    console.log(data);
    getInput();
  })
  .catch((err) => {
    console.error(err);
  });

var shops = [];

fetch("https://donutshop-api.herokuapp.com/shops/", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    let x = document.getElementById("shops");
    let result = document.createElement("option");
    result.innerText = data;
    x.append(result);
    // let x = document.getElementById("shops");
    // let result = document.createElement("h5");
    // result.innerText = JSON.stringify(data);
    // x.prepend(result);
  })
  .catch((err) => {
    console.error(err);
  });


  // fetch("https://donutshop-api.herokuapp.com/shops/", {
  //   method: "GET",
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     shops = data;
  //     let x = document.getElementById("shops");
  //     let result = document.createElement("option");
  //     var html = "<option>";
  //     for (var i = 0; i < shops.length; i++) {
  //     html += "<option>" + shops[i] + "</option>";
  //     document.getElementById("shops").innerHTML = html;
  //     x.prepend(result);
  //   }
  //   .catch((err) => {
  //     console.error(err);
  //   });
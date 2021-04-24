var shops = [];

fetch("https://donutshop-api.herokuapp.com/shops/", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    let x = document.getElementById("shops");
    for (var i = 0; i < data.length; i++) {
      let result = document.createElement("option");
      result.innerText = data[i]
      result.value = data[i];
      x.append(result);
      console.log(result);
    }
  })
  .catch((err) => {
    console.error(err);
  });

// var shops = [];

// fetch("https://donutshop-api.herokuapp.com/shops/", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((data) => {
//     shops = data;
//     let x = document.getElementById("#shops");
//     let result = document.createElement("option");
//     result.innerText = shops;
//     for (var i = 0; i < shops.length; i++) {
//       html += "<option>" + shops[i] + "</option>";
//       document.getElementById("#shops").innerHTML = html;
//       x.prepend(data);

//   }})
//   .catch((err) => {
//     console.error(err);
//   });

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

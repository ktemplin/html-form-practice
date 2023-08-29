//  ###Original script from Repo###
//  const placeForResults = document.getElementById("results")

// new URLSearchParams(window.location.search).forEach((value, name) => {
//   placeForResults.append(`${name} : ${value}`)
//   placeForResults.append(document.createElement("br"))
// })

const form = document.querySelector("#formBox");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  let formData = new FormData(this);
  let object = {};
  formData.forEach((value, key) => {
    object[key] = value
  });
  let json = JSON.stringify(object);
  console.log(json);
}, false);
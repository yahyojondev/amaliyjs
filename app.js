const API_URL = "https://fakestoreapi.com/products";

const productwrapper = document.querySelector(".wrapper");
const loading = document.querySelector(".loading");

async function fetchData(api) {
  let data = await fetch(api);

  data
    .json()
    .then((res) => createCard(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}

fetchData(API_URL);
function createCard(data) {
  data.forEach(({ image, title, category }) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
       <img src=${image} alt="">
  <h2>${title}</h2>
  <p>${category}</p> `;
    //   card.addEventListener("click",())
    productwrapper.append(card);
  });
}
function singleRoute(id) {
  window.open(`product.html?id=${id}`, "_self");
}

const blueDiv = document.getElementById(`blue-div`);
const productsDiv = document.getElementById(`products`);

function addwidthClass() {
  if (window.innerWidth <= 767) {
    blueDiv.classList.add(`w-75`);
  } else {
    blueDiv.classList.remove(`w-75`);
  }
}
addwidthClass();
window.addEventListener(`resize`, addwidthClass);
// dummyJSON

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.products.forEach(product => {
      productsDiv.innerHTML += `
      <div class="col">
        <div class="card h-100">
          <a href="./product.html?id=${product.id}&category=${product.category}"><img src="${product.images[0]}" class="card-img-top" alt="..."></a>
          <div class="card-body">
            <a href="./product.html?id=${product.id}&category=${product.category}" class="text-decoration-none text-black"><h5 class="card-title">${product.title}</h5></a>
            <h5 class="text-secondary mb-0">$${product.price}</h5>
          </div>
          <hr class="mt-0">
          <div class="buttons mb-3 ms-3">
            <button type="button" class="btn btn-primary text-uppercase me-1">Add to cart</button>
            <button type="button" class="btn btn-light border-secondary-subtle"><i class="bi bi-heart-fill text-danger"></i></button>
          </div>
        </div>
      </div>
      `;
    });
  })
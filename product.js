const currentUrl = window.location.href;
const urlParams = new URLSearchParams(new URL(currentUrl).search);
const productId = urlParams.get(`id`);
const productCategory = urlParams.get(`category`);
const productDetail = document.getElementById(`product-detail`);
const imagesDiv = document.getElementById(`carousel-inner`);
const similarProducts = document.getElementById(`similar-products`);
fetch(`https://dummyjson.com/products/${productId}`)
  .then(res => res.json())
  .then(product => {
    //console.log(product);
    productDetail.innerHTML = `
    <div class="col-12 col-md-6 mb-5">
      <img class="img-fluid" src="${product.images[0]}" alt="">
    </div>
    <div class="col-12 col-md-6">
      <p class="fst-italic">Category: ${product.category}</p>
      <h1>${product.title}</h1>
      <p>${product.rating}/5</p>
      <p class="display-5">$${product.price}</p>
      <p class="fs-5">${product.description}</p>
      <div class="buttons">
          <a href="./checkout.html" type="button" class="btn btn-success text-uppercase me-1">Buy now</a>
          <button type="button" class="btn btn-primary text-uppercase me-1">Add to cart</button>
          <button type="button" class="btn btn-light border-secondary-subtle"><i class="bi bi-heart-fill text-danger"></i></button>
      </div>
      <p class="mt-3">${product.stock} pcs left</p>
    </div>
    `;
  });
fetch(`https://dummyjson.com/products/category/${productCategory}`)
  .then(res => res.json())
  .then(products => {
    console.log(products);
    products.products.forEach(product => {
      similarProducts.innerHTML += `
    <div class="border py-3 col-lg-3 col-md-6">
        <a href="./product.html?id=${product.id}&category=${product.category}"><img src="${product.images[0]}" class="card-img-top" alt="..."></a>
        <div class="card-body mt-4">
          <a href="./product.html?id=${product.id}&category=${product.category}"><h5 class="card-title">${product.title}</h5></a>
          <p class="card-text">$${product.price}</p>
        </div>
      </div>
    `;
    });
  });
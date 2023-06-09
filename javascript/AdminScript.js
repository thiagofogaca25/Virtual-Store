// Dados iniciais de categorias e produtos
var categories = [
    { name: "electronics", img: "electronics.jpg", products: [] },
    { name: "clothing", img: "clothing.jpg", products: [] },
    { name: "books", img: "books.jpg", products: [] }
  ];
  
  var products = [
    { name: "smartphone", price: 999.99, img: "smartphone.jpg", quantity:"10" },
    { name: "tshirt", price: 29.99, img: "tshirt.jpg",quantity:"20" },
    { name: "fiction_book", price: 19.99, img: "fiction_book.jpg",quantity:"15" }
  ];
  
 // ...

// Função para exibir as categorias de produtos
function renderCategories() {
    var categoriesContainer = document.getElementById("categories");
    categoriesContainer.innerHTML = "";
  
    categories.forEach(function(category, index) {
      var categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category");
  
      var categoryImg = document.createElement("img");
      categoryImg.src = category.img;
      categoryDiv.appendChild(categoryImg);
  
      var categoryName = document.createElement("h3");
      categoryName.textContent = category.name;
      categoryDiv.appendChild(categoryName);
  
      var productCount = document.createElement("p");
      productCount.textContent = "Quantidade de produtos: " + category.products.length;
      categoryDiv.appendChild(productCount);
  
      var editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.addEventListener("click", function() {
        editCategory(index);
      });
      categoryDiv.appendChild(editButton);
  
      categoriesContainer.appendChild(categoryDiv);
    });
  }
  
// Função para excluir um produto
function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
  }
  
  // Função para exibir a lista de produtos
  function renderProducts() {
    var productsContainer = document.getElementById("products");
    productsContainer.innerHTML = "";
  
    products.forEach(function(product, index) {
      var productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      var productImg = document.createElement("img");
      productImg.src = product.img;
      productDiv.appendChild(productImg);
  
      var productName = document.createElement("h3");
      productName.textContent = product.name;
      productDiv.appendChild(productName);
  
      var productPrice = document.createElement("p");
      productPrice.textContent = "Preço: $" + product.price.toFixed(2);
      productDiv.appendChild(productPrice);
  
      var productQuantity = document.createElement("p");
      productQuantity.textContent = "Quantidade: " + product.quantity;
      productDiv.appendChild(productQuantity);
  
      var editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.addEventListener("click", function() {
        editProduct(index);
      });
      productDiv.appendChild(editButton);
  
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Excluir";
      deleteButton.addEventListener("click", function() {
        deleteProduct(index);
      });
      productDiv.appendChild(deleteButton);
  
      productsContainer.appendChild(productDiv);
    });
  }


// Função para editar uma categoria
function editCategory(index) {
    var categoryForm = document.createElement("form");
  
    var nameLabel = document.createElement("label");
    nameLabel.textContent = "Nome da categoria:";
    var nameInput = document.createElement("input");
    nameInput.value = categories[index].name;
    categoryForm.appendChild(nameLabel);
    categoryForm.appendChild(nameInput);
  
    var imgLabel = document.createElement("label");
    imgLabel.textContent = "URL da imagem:";
    var imgInput = document.createElement("input");
    imgInput.value = categories[index].img;
    categoryForm.appendChild(imgLabel);
    categoryForm.appendChild(imgInput);
  
    var submitButton = document.createElement("button");
    submitButton.textContent = "Salvar";
    categoryForm.appendChild(submitButton);
  
    categoryForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var newName = nameInput.value;
      var newImg = imgInput.value;
  
      if (newName && newImg) {
        categories[index].name = newName;
        categories[index].img = newImg;
        renderCategories();
      }
    });
  
    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancelar";
    cancelButton.addEventListener("click", function() {
      renderCategories();
    });
    categoryForm.appendChild(cancelButton);
  
    var categoryDiv = document.getElementsByClassName("category")[index];
    categoryDiv.innerHTML = "";
    categoryDiv.appendChild(categoryForm);
  }
  
  // Função para editar um produto
function editProduct(index) {
    var productForm = document.createElement("form");
  
    var nameLabel = document.createElement("label");
    nameLabel.textContent = "Nome do produto:";
    var nameInput = document.createElement("input");
    nameInput.value = products[index].name;
    productForm.appendChild(nameLabel);
    productForm.appendChild(nameInput);
  
    var priceLabel = document.createElement("label");
    priceLabel.textContent = "Preço do produto:";
    var priceInput = document.createElement("input");
    priceInput.value = products[index].price;
    productForm.appendChild(priceLabel);
    productForm.appendChild(priceInput);
  
    var quantityLabel = document.createElement("label");
    quantityLabel.textContent = "Quantidade:";
    var quantityInput = document.createElement("input");
    quantityInput.value = products[index].quantity;
    productForm.appendChild(quantityLabel);
    productForm.appendChild(quantityInput);
  
    var imgLabel = document.createElement("label");
    imgLabel.textContent = "URL da imagem:";
    var imgInput = document.createElement("input");
    imgInput.value = products[index].img;
    productForm.appendChild(imgLabel);
    productForm.appendChild(imgInput);
  
    var submitButton = document.createElement("button");
    submitButton.textContent = "Salvar";
    productForm.appendChild(submitButton);
  
    productForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var newName = nameInput.value;
      var newPrice = parseFloat(priceInput.value);
      var newQuantity = parseInt(quantityInput.value);
      var newImg = imgInput.value;
  
      if (newName && newPrice && newQuantity && newImg) {
        products[index].name = newName;
        products[index].price = newPrice;
        products[index].quantity = newQuantity;
        products[index].img = newImg;
        renderProducts();
      }
    });
  
    var cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancelar";
    cancelButton.addEventListener("click", function() {
      renderProducts();
    });
    productForm.appendChild(cancelButton);
  
    var productDiv = document.getElementsByClassName("product")[index];
    productDiv.innerHTML = "";
    productDiv.appendChild(productForm);
  }
  
  // Chamada inicial para renderizar as categorias e produtos
  renderCategories();
  renderProducts();
  
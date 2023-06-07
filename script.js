// Product data (can be obtained from a database or server)
 var productsData = [
    { id: 1, name: 'echo dot', price: 10.00, image: 'https://m.media-amazon.com/images/I/51+iQTwDsXL._AC_SX569_.jpg' },
    { id: 2, name: 'Iphone 14', price: 1000.00, image: 'https://m.media-amazon.com/images/I/61cwywLZR-L._AC_SX679_.jpg' },
    { id: 3, name: 'Xbox Series S', price: 250.00, image: 'https://m.media-amazon.com/images/I/81Z1xBs6GoL._AC_SX679_.jpg' },
];

// Function to load products on the page
function loadProducts() {
    var productsContainer = document.getElementById('products');
    
    for (var i = 0; i < productsData.length; i++) {
        var product = productsData[i];

        var colleft = document.createElement('div');
        colleft.classList.add('col');

        var colright = document.createElement('div');
        colright.classList.add('col');

        var productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.classList.add('row');
        
        var divimage = document.createElement('div');
        divimage.classList.add('divimage');
        
        var productImage = document.createElement('img');
        productImage.src = product.image;
        
        var productName = document.createElement('h3');
        productName.innerText = product.name;
        
        var productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price.toFixed(2);
        
        var addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to Cart';
        addToCartButton.classList.add('btn','btn-info')
        addToCartButton.addEventListener('click', addToCart.bind(null, product));
        
        productElement.appendChild(colleft);
        productElement.appendChild(colright);
        colleft.appendChild(divimage);
        divimage.appendChild(productImage);
        colright.appendChild(productName);
        colright.appendChild(productPrice);
        colright.appendChild(addToCartButton);
        
        productsContainer.appendChild(productElement);
    }
}

// Function to perform checkout (can be implemented later)
function addToCart(product) {
    var cartItemsContainer = document.getElementById('cart-items');
    
    var divItems = document.createElement('div');
    divItems.classList.add('row','w-100','m-0','p-0');

    var cartItemsInfo = document.createElement('div');
    cartItemsInfo.classList.add('col-9','w-50','p-0','m-0');

    var cartItemName = document.createElement('ol');
    cartItemName.innerText = product.name;
    cartItemName.classList.add('text-start','p-1');

    var cartItemPrice = document.createElement('ol');
    cartItemPrice.innerText = '$ ' + product.price.toFixed(2);
    cartItemPrice.classList.add('text-start','p-1');

    var cartButton = document.createElement('button');
    cartButton.innerText = 'Delete';
    cartButton.classList.add('btn','btn-danger','col-4','w-25','m-auto');

    var cartHr = document.createElement('hr');


    divItems.appendChild(cartItemsInfo);
    cartItemsInfo.appendChild(cartItemName);
    cartItemsInfo.appendChild(cartItemPrice);
    divItems.appendChild(cartButton);
    divItems.appendChild(cartHr);

    cartItemsContainer.appendChild(divItems);
    
    var cartTotal = document.getElementById('cart-total');
    var currentTotal = parseFloat(cartTotal.innerText);
    cartTotal.innerText = (currentTotal + product.price).toFixed(2);
}

function checkout() {
    alert('Checkout completed! Thank you for shopping with us.');
}

// Load the products when the page loads
window.addEventListener('load', loadProducts);
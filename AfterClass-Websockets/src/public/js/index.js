const socket = io();
const productList = document.getElementById('productList');

socket.on('productsUpdate', () => {
  // Actualizar la vista con la lista de productos actualizados
  getProductListFromServer();
});


// Definir la función para renderizar la lista de productos
function renderProductList(products) {
  const productListHTML = products.map(product => `
    <li>${product.title} - ${product.description} - ${product.price}</li>
  `).join('');

  productList.innerHTML = productListHTML;
}

// Obtener la lista de productos desde el servidor y renderizarla
function getProductListFromServer() {
  fetch('/api/products')
    .then(response => response.json())
    .then(products => renderProductList(products))
    .catch(error => console.error('Error al obtener la lista de productos', error));
}

// Llamada inicial para obtener la lista de productos y renderizarla
getProductListFromServer();

// Llamada inicial para obtener la lista de productos y renderizarla
getProductListFromServer();
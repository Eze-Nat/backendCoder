class ProductManager {

  static productId = 0

  constructor() {
    this.products = [];
    
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.find(product => product.code === code)) {
      return console.log('El código del producto ya existe');
      
    }
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      return console.log('Faltan datos obligatorios');
      
    }
    
    const id = ProductManager.productId + 1;
    this.products.push({
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    });
    ProductManager.productId = id;
  }

  getProducts() {
    return this.products;
  }


  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      
      return "Producto no encontrado"
    }
    return product;
  }
}

const nuevoProducto = new ProductManager();


nuevoProducto.addProduct(
  "Producto 1",
  "Este es el producto 1.",
  100,
  "Aca va la imagen",
  "1234567890",
  10
);

nuevoProducto.addProduct(
  "Producto 2",
  "Este es el producto 2.",
  100,
  "Aca va la imagen",
  "11231",
  10
);
nuevoProducto.addProduct(
  "Producto 3",
  "Este es el producto 3.",
  100,
  "Aca va la imagen",
  "12345",
  10
);







nuevoProducto.addProduct(
  "Producto 4",
  "Este es el producto 4.",
  100,
  "Aca va la imagen",
  "12345",
  10
);
nuevoProducto.addProduct(
  "Producto 5",
  "Este es el producto 5.",
  100,
  "Aca va la imagen",
  10
);

console.log(nuevoProducto.getProducts());
console.log(nuevoProducto.getProductById(2))
console.log(nuevoProducto.getProductById(50))
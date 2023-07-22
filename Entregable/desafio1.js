class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.find(product => product.code === code)) {
      console.log('El código del producto ya existe');
      return;
    }
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log('Faltan datos obligatorios');
      return;
    }
    const id = this.products.length + 1;
    this.products.push({
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    });
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      console.log('Producto no encontrado');
      return;
    }
    return product;
  }
}

const nuevoProducto = new ProductManager();
const nuevoProducto2 = new ProductManager();

nuevoProducto.addProduct(
  "Producto 1",
  "Este es el producto 1.",
  100,
  "Aca va la imagen",
  "1234567890",
  10
);

nuevoProducto2.addProduct(
  "Producto 2",
  "Este es el producto 2.",
  100,
  "Aca va la imagen",
  
  10
);



console.log(nuevoProducto.getProducts());
console.log(nuevoProducto2.getProducts());

class ProductManager {
    constructor(path) {
      this.path = "./productos.txt";
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.find(product => product.code === code)) {
        return console.log('El código del producto ya existe');
      }
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        return console.log('Faltan datos obligatorios');
      }
      const id = this.nextId++;
      const product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(product);
      return product;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        return console.log('Producto no encontrado');
      }
      return product;
    }
  
    updateProduct(id, product) {
      const existingProduct = this.products.find(product => product.id === id);
      if (!existingProduct) {
        return console.log('Producto no encontrado');
      }
      for (const key in product) {
        existingProduct[key] = product[key];
      }
      return existingProduct;
    }
  
    deleteProduct(id) {
      const existingProduct = this.products.find(product => product.id === id);
      if (!existingProduct) {
        return console.log('Producto no encontrado');
      }
      this.products = this.products.filter(product => product.id !== id);
      return existingProduct;
    }
  
    async save() {
      try {
        const file = await fs.promises.open(this.path, 'w');
        await file.write(JSON.stringify(this.products, null, 2));
        await file.close();
      } catch (error) {
        console.log(error);
      }
    }
  }
  
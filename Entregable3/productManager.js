import fs from "fs";

class ProductManager {

  static productId = 0

  constructor(filePath) {
    this.products = [];
    this.path = filePath || "./productos.json";
    this.loadProducts();
  }

  async writeProducts() {
    try {
      await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2));
    } catch (error) {
      console.log("Error agregando productos")
      throw new Error("Error agregando productos")
    }
  }


  async addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.find(product => product.code === code)) {
      throw new Error('El código del producto ya existe');

    }
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      throw new Error('Faltan datos obligatorios');

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

    await this.writeProducts()
  }

  async getProductFs() {
    try {
      let readProduct = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(readProduct);
    } catch (error) {
      throw new Error("Error leyendo producto", error)
    }
  }

  async getProducts() {
    try {
      let getResponse = await this.getProductFs()
      console.log(getResponse)
    } catch (error) {
      console.log("Error obteniendo producto", error)
    }
  }

  async getProductById(id) {
    try {
      let getResponseById = await this.getProductFs();
      const productById = this.products.find(product => product.id === id);
      if (!productById) {
        return "Producto no encontrado"
      }
      return productById;

    } catch (error) {
      console.log("Error en el ID", error)
    }
  }

  async deleteProductById(id) {
    try {
      let deleteProductFs = await this.getProductFs();
      let filterProduct = deleteProductFs.filter(products => products.id != id)
      this.products = filterProduct;
      await this.writeProducts();
      console.log("Producto eliminado")
    } catch (error) {
      console.log("Error borrando el ID", error)
      throw error
    }
  }
  async updateProduct({ id, ...product }) {
    try {
      const existingProduct = this.products.find(prod => prod.id === id);
      if (!existingProduct) {
        throw new Error("Producto no encontrado")
      }
      for (const prop in product) {
        if (product.hasOwnProperty(prop)) {
          existingProduct[prop] = product[prop]
        }
      }
      await this.writeProducts()
    } catch (error) {
      console.log("Error cambiando producto", error)
      throw error
    }
  }
  async loadProducts() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      if (data) {
        this.products = JSON.parse(data);
      }
    } catch (error) {
      console.log("Error cargando productos", error);
      throw new Error("Error cargando productos");
    }
  }
}



export default ProductManager

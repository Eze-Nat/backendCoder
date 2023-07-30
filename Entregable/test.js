const ProductManager = require('./desafio');

describe('ProductManager', () => {
  let productManager;

  beforeEach(() => {
    productManager = new ProductManager('./products.json');
  });

  it('should add a product', async () => {
    const product = {
      id: 1,
      title: 'Producto 1',
      description: 'Este es el producto 1.',
      price: 100,
      thumbnail: 'https://example.com/producto-1.jpg',
      code: '1234567890',
      stock: 10,
    };

    await productManager.addProduct(product);

    const products = await productManager.getProducts();

    expect(products).toEqual([product]);
  });

  it('should get all products', async () => {
    const products = await productManager.getProducts();

    expect(products).toEqual([
      {
        id: 1,
        title: 'Producto 1',
        description: 'Este es el producto 1.',
        price: 100,
        thumbnail: 'https://example.com/producto-1.jpg',
        code: '1234567890',
        stock: 10,
      },
    ]);
  });

  it('should get a product by ID', async () => {
    const product = await productManager.getProductById(1);

    expect(product).toEqual({
      id: 1,
      title: 'Producto 1',
      description: 'Este es el producto 1.',
      price: 100,
      thumbnail: 'https://example.com/producto-1.jpg',
      code: '1234567890',
      stock: 10,
    });
  });

  it('should update a product', async () => {
    const product = {
      id: 1,
      title: 'Producto 1 actualizado',
      description: 'Este es el producto 1 actualizado.',
      price: 200,
      thumbnail: 'https://example.com/producto-1-actualizado.jpg',
      code: '1234567890',
      stock: 20,
    };

    await productManager.updateProduct(1, product);

    const products = await productManager.getProducts();

    expect(products).toEqual([
      {
        id: 1,
        title: 'Producto 1 actualizado',
        description: 'Este es el producto 1 actualizado.',
        price: 200,
        thumbnail: 'https://example.com/producto-1-actualizado.jpg',
        code: '1234567890',
        stock: 20,
      },
    ]);
  });

  it('should delete a product', async () => {
    await productManager.deleteProduct(1);

    const products = await productManager.getProducts();

    expect(products).toEqual([]);
  });
});
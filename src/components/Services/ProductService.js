

export const ProductService = {
    getProductsSmall() {
      return new Promise((resolve) => {
        const mockData = [
          { id: 1, name: 'Product 1', price: 100, inventoryStatus: 'INSTOCK', image: 'product1.png' },
          { id: 2, name: 'Product 2', price: 150, inventoryStatus: 'LOWSTOCK', image: 'product2.png' },
          { id: 3, name: 'Product 3', price: 200, inventoryStatus: 'OUTOFSTOCK', image: 'product3.png' },
          { id: 4, name: 'Product 4', price: 250, inventoryStatus: 'INSTOCK', image: 'product4.png' },
          { id: 5, name: 'Product 5', price: 300, inventoryStatus: 'INSTOCK', image: 'product5.png' },
          { id: 6, name: 'Product 6', price: 350, inventoryStatus: 'LOWSTOCK', image: 'product6.png' },
          { id: 7, name: 'Product 7', price: 400, inventoryStatus: 'OUTOFSTOCK', image: 'product7.png' },
          { id: 8, name: 'Product 8', price: 450, inventoryStatus: 'INSTOCK', image: 'product8.png' },
          { id: 9, name: 'Product 9', price: 500, inventoryStatus: 'INSTOCK', image: 'product9.png' },
        ];
        setTimeout(() => resolve(mockData), 500); // Simulate a network delay
      });
    }
  };
  
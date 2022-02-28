
// // Create a ProductsController class
// class ProductsController {

//     products;
  
//     constructor(products) {
//       this.products = products;
//     }
  
//     introduceSelf() {
//       console.log(`Hi! I'm ${this.products}`);
//     }
  
//   }

// Create a ProductsController class
class ProductsController {
  // Set up the items and currentId property in the constructor
  constructor(currentId = 0) {
      this.products = [];
      this.currentId = currentId;
  }

  // Create the addProducts method
  addProducts(name, description,imageUrl) {
      const products = {
          // Increment the currentId property
          id: this.currentId++,
          name: name,
          description: description,
          imageUrl: imageUrl
      };

      // Push the product to the products property
      this.Products.push(products);
  }
}
class productsController {

    products;
  
    constructor(products) {
      this.products = products;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.products}`);
    }
  
  }
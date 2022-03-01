class productsController {
  constructor(currentId = 0) {
      this.products = [];
      this.currentId = currentId; 
    }
  
    addItem(name, description, imageUrl) {
    const item1 = {
    id: this.currentId++,
    name: "Wall Baskets",
    description: 'We introduce our amazing handwoven wall baskets made with sweetgrass and imported from West Africa. Our wall baskets are 16 inches in diameter and will make for the perfect wall decoration or table placemat.',
    imgUrl:'images/Basket wall.jpg'
    
  }
  const item2 = {
    id: this.currentId++,
    name: "Floor Basket",
    description: 'Enjoy our Large Floor Baskets that stand 2 feet tall. Also handwoven with sweetgrass and imported from West Africa. You can decorate your home with these baskets as floor decor or plant stands.',
    imgUrl: 'images/Basket large.jpg'
    
  }

  const item3 = {
    id: this.currentId++,
    name: "Living Room Set",
    description: 'Welcome Home! You will enjoy coming home everyday knowing that you can sit on your exquisite Living Room Set Built by hand and wrapped in Ankara fabric, this design gives off comfy Afro-Boho vibes!',
    imgUrl: 'images/Furniture.jpg'
    
  }

  const item4 = {
    id: this.currentId++,
    name: "Dining Chairs",
    description: 'Welcome Home! You will enjoy coming home everyday knowing that you can sit on your exquisite Living Room Set Built by hand and wrapped in Ankara fabric, this design gives off comfy Afro-Boho vibes!',
    imgUrl: 'images/Dining Chairs.jpg'
     
  }

  const item5 = {
    id: this.currentId++,
    name: "Small Basket",
    description: 'Need something smaller for your table or mantle? Look no further, our Small Baskets stand at 12 inches tall and can be great for decorating small spaces.',
    imgUrl: 'images/basket small.jpg'
    
  };

  this.products.push(product);
    }
  }

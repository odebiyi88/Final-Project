// Initialize a new TaskManager with currentId set to 0
<<<<<<< HEAD
const itemsController = new ItemsController(0);

// Select the New Task Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
=======
const productsController = new ProductsController(0);

// Select the New Task Form
const newProductsForm = document.querySelector('#newProductsForm');

// Add an 'onsubmit' event listener
newProductsForm.addEventListener('submit', (event) => {
>>>>>>> cb5d96f3a9ccbb3831fc10dd14d2376c5a2cb17f
    // Prevent default action
    event.preventDefault();

    // Select the inputs
<<<<<<< HEAD
    const newItemNameInput = document.querySelector('#newItemNameInput');
    const newItemDescription = document.querySelector('#newItemDescription');
=======
    const newProductsNameInput = document.querySelector('#newProductsNameInput');
    const newProductsDescription = document.querySelector('#newProductsDescription');
>>>>>>> cb5d96f3a9ccbb3831fc10dd14d2376c5a2cb17f

    /*
        Validation code here
    */

    // Get the values of the inputs
<<<<<<< HEAD
    const name = newItemNameInput.value;
    const description = newItemDescription.value;
    const createdAt = new Date();

    // Add the task to the task manager
    itemsController.addItem(name, description, createdAt);

    // Clear the form
    newItemNameInput.value = '';
    newItemDescription.value = '';
});


function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
=======
    const name = newProductsNameInput.value;
    const description = newProductsDescription.value;
    const createdAt = new Date();

    // Add the task to the task manager
    productsController.addProducts(name, description, createdAt);

    // Clear the form
    newProductsNameInput.value = '';
    newProductsDescription.value = '';
});


function addProductsCard(item){
    const productsHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+products.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+products.name+'</h5>\n' +
        '        <p class="card-text">'+products.description+'</p>\n' +
>>>>>>> cb5d96f3a9ccbb3831fc10dd14d2376c5a2cb17f
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
<<<<<<< HEAD
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

addItemCard({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addItemCard({'name':'Tayto',
=======
    const productsContainer = document.getElementById("list-items");
    productsContainer.innerHTML += productsHTML;
}

addProductsCard({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addProductsCard({'name':'Tayto',
>>>>>>> cb5d96f3a9ccbb3831fc10dd14d2376c5a2cb17f
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'})
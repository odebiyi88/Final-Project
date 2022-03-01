// Initialize a new TaskManager with currentId set to 0
const productsController = new ProductsController(0);

// Select the New Task Form
const newProductsForm = document.querySelector('#newProductsForm');

// Add an 'onsubmit' event listener
newProductsForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newProductsNameInput = document.querySelector('#newProductsNameInput');
    const newProductsDescription = document.querySelector('#newProductsDescription');

    /*
        Validation code here
    */

    // Get the values of the inputs
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
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const productsContainer = document.getElementById("list-items");
    productsContainer.innerHTML += productsHTML;
}

addProductsCard({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addProductsCard({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'})
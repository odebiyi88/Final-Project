var selectedRow = null

// Handling HTML form submission with the following function:
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["product"] = document.getElementById("product").value;
    formData["description"] = document.getElementById("description").value;
    formData["price"] = document.getElementById("price").value;
    formData["img"] = document.getElementById("img").value;
    return formData;
}

// After HTML form submission, create a new record dynamically in HTML table with the following function:
function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.product;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.img;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

// Reset the HTML form with the following JavaScript function:
function resetForm() {
    document.getElementById("product").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";
    selectedRow = null;
}

//Handle edit operation for each row in HTML table with the following
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("product").value = selectedRow.cells[0].innerHTML;
    document.getElementById("description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("img").value = selectedRow.cells[3].innerHTML;
}

//After edit operation, we need to show updated data in an HTML table
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.product;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.img;
}

//Handled delete operation with the following JavaScript function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}

//We also added validation to the product field
function validate() {
    isValid = true;
    if (document.getElementById("product").value == "") {
        isValid = false;
        document.getElementById("productValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("productValidationError").classList.contains("hide"))
            document.getElementById("productValidationError").classList.add("hide");
    }
    return isValid;
}
// Select Form for Input & Select 'ul' for Output

var form = document.getElementById('my-form');
var expenseList = document.getElementById('expense-details');

// 'submit' event

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    var exAmount = document.getElementById('in-1');
    var exDescription = document.getElementById('in-2');
    var exCategory = document.getElementById('in-3');

    var expenseDetails = {
        amount: exAmount.value,
        description: exDescription.value,
        category: exCategory.value
    }


// Save to Local Storage
   // Convert to String
   let expenseDetails_Serialized = JSON.stringify(expenseDetails);
   // Generate a unique key
   var key = 'expenseDetails_' + Date.now();
    // Store the data with unique key
    localStorage.setItem(key, expenseDetails_Serialized);
    // Clear form inputs
    exAmount.value = '';
    exDescription.value = '';
    exCategory.value = '';

    // Add the saved data to the List
    displaySavedData(key, expenseDetails);

});

// Function to display saved data in a list
function displaySavedData(key, expenseDetails) {
   var listItem = document.createElement('li');
   listItem.textContent = `${expenseDetails.amount}  - ${expenseDetails.description} - ${expenseDetails.category}`;

    var delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.classList.add('btn', 'btn-primary', 'btn-sm', 'mx-1', 'btn-danger', 'mt-2');
    delBtn.textContent = 'Delete';

    var editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.classList.add('btn', 'btn-primary', 'btn-sm', 'mx-1', 'btn-dark', 'mt-2');
    editBtn.textContent = 'Edit';

        delBtn.addEventListener('click', function() {
        listItem.remove();
        localStorage.removeItem(key);
    });

    editBtn.addEventListener('click', function() {
        document.getElementById('in-1').value = expenseDetails.amount;
        document.getElementById('in-2').value = expenseDetails.description;
        document.getElementById('in-3').value = expenseDetails.category;

        listItem.remove();
        localStorage.removeItem(key);

    });
    expenseList.appendChild(listItem);
    listItem.appendChild(delBtn);
    listItem.appendChild(editBtn);
}



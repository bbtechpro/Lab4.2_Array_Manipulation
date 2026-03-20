let shoppingList = [];

function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    }
}

function removeLastItem() {
    shoppingList.pop();
}

function filterItems(searchTerm) {
    const term = searchTerm.toLowerCase();
    return shoppingList.filter(item => item.toLowerCase().includes(term));
}

function displayList() {
    console.log(shoppingList.join(", "));
}

// DOM elements
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const removeLastButton = document.getElementById('removeLastButton');
const shoppingListUI = document.getElementById('shoppingListUI');

// Function to update the displayed list
function updateUI() {
    shoppingListUI.innerHTML = '';
    shoppingList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        shoppingListUI.appendChild(li);
    });
}

// Add item button click handler
addItemButton.addEventListener('click', () => {
    const item = itemInput.value.trim();
    if (item) {
        addItem(item);
        itemInput.value = '';
        updateUI();
    }
});

// Remove last item button click handler
removeLastButton.addEventListener('click', () => {
    removeLastItem();
    updateUI();
});

// Initial UI render
updateUI();

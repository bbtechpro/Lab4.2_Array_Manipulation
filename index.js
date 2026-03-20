let shoppingList = [];


function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    }
}
addItem("orange juice")
addItem("bread")
addItem("milk")

function removeLastItem() {
    shoppingList.pop()
}
removeLastItem()

function filterItems(searchTerm) {
    const term = searchTerm.toLowerCase();
    return shoppingList.filter(item => item.toLowerCase().includes(term));
}

function displayList() {
    console.log(shoppingList.join(", "))
}

displayList()

// Example filter call (uncomment to test)
console.log(filterItems('rea')) // e.g. returns ['bread']

// adds items to the array and updates the displayed list dynamically when the button is clicked.

 const itemInput = document.getElementById('itemInput');
        const addItemButton = document.getElementById('addItemButton');
        const shoppingListUI = document.getElementById('shoppingListUI');

        function updateUI() {
            shoppingListUI.innerHTML = '';
            shoppingList.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                shoppingListUI.appendChild(li);
            });
        }

        addItemButton.addEventListener('click', () => {
            const item = itemInput.value.trim();
            if (item) {
                addItem(item);
                itemInput.value = '';
                updateUI();
            }
        });

        // Optional: update UI on initial load
        updateUI();



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


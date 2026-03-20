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



let shoppingList = [];


function addItem(item) {
    shoppingList.push(item)
}
addItem("orange juice")
addItem("bread")
addItem("milk")

function removeLastItem() {
    shoppingList.pop()
}
removeLastItem()

function displayList() {
    console.log(shoppingList.join(", "))
}

displayList()

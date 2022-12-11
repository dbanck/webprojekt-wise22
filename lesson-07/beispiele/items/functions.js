function addItem() {
  let items = document.querySelectorAll("li").length; // get all items and count them
  console.log(items); // log amount of items to console

  if (items === 6) {
    return; // we return nothing from this function, so it ends here
  }

  var newItem = document.createElement("li"); // create new list item

  // add different item text depending on count
  if (items === 3) {
    newItem.textContent = "Rust";
  }

  if (items === 4) {
    newItem.textContent = "Python";
  }

  if (items === 5) {
    newItem.textContent = "C#";
  }

  // add item to list
  document.querySelector("#coding-languages").appendChild(newItem);
}

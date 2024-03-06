const inputBox = document.getElementById("inputBox"); //Get input box
const listBox = document.getElementById("listBox"); //Get list box

function addTask() {
  //Add task function
  if (inputBox.value === "") {
    alert("You must write something!"); //Alert if empty
  } else {
    let li = document.createElement("li"); //Create new list item
    li.innerHTML = inputBox.value;
    listBox.appendChild(li); //Append list item to list box
    let span = document.createElement("span"); //Create new span element
    span.innerHTML = "\u00d7";
    li.appendChild(span); //Append span to list item
  }
  inputBox.value = "";
  saveData(); //Save
}

listBox.addEventListener(
  "click",
  function (e) {
    //box Clicked
    if (e.target.tagName === "LI") {
      //Save the list item
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //Remove the list item and save
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  //Save Function
  localStorage.setItem("data", listBox.innerHTML);
}
function showTask() {
  // Saved Tasks Function
  listBox.innerHTML = localStorage.getItem("data");
}
showTask();

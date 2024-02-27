let inputText = document.getElementById("inputText");
let addbtn = document.getElementById("btn");
let taskList = document.getElementById("task-list");

function addTask() {
  if (inputText.value === "") {
    alert("You need to write Somthing");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    taskList.prepend(li);

    let remv = document.createElement("button");
    remv.innerHTML = "remove";
    remv.classList.add("remove");
    li.appendChild(remv);
  }

  inputText.value = "";
}

let ol = document.querySelector("ul");

ol.addEventListener("click", (event) => {
  let node = event.target.nodeName;

  if (node == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

inputText.addEventListener("keypress", function (event) {
  
  
  if (event.code == "Enter" || event.code == "NumpadEnter") {
    addTask();
  }
});

addbtn.addEventListener("click", addTask);

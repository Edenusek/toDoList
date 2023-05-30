const content = document.querySelector("#content");
const date = document.querySelector("#date");
const btn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const editBtn = document.querySelector(".edit-btn");
const addedSection = document.querySelector(".added");
const errorText = document.querySelector(".error");
const deleteAllBtn = document.querySelector(".delete-all");
const deletedAllCheckedBtn = document.querySelector(".delete-checked");
const checkBoxes = document.querySelectorAll(".check-box");

const handleAdd = () => {
  if (content.value === "") {
    errorText.textContent = "Musisz uzupełnić wszystkie pola !";
    return;
  }else if ( content.value !== "") {
    errorText.textContent = "";
  }

  const addedBox = document.createElement("div");
  addedBox.classList.add("added-to-do");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("check-box");

  const addedContent = document.createElement("span");
  addedContent.classList.add("to-do-text");
  addedContent.textContent = content.value;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "usuń";

  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.textContent = "edytuj";

  addedBox.appendChild(checkBox);
  addedBox.appendChild(addedContent);
  addedBox.appendChild(deleteButton);
  addedBox.appendChild(editButton);

  addedSection.appendChild(addedBox);

  content.value = "";

};

const deleteHadnle = e => {
  const addedBox = e.target.closest(".added-to-do");
  addedBox.remove();
};

const editHandler = e => {
  const addedBox = e.target.closest(".added-to-do");
  const addedContent = addedBox.querySelector(".to-do-text");
  const editContent = prompt("Wpisz nowe zadanie:");
  if (editContent.trim() !== "") {
    addedContent.textContent = editContent;
  }
};

const deletedAllCheckedHandle = () => {
  const checked = document.querySelectorAll(".check-box")
  // for (let i =0; i < checked.length; i++){
  //   // if(checked[i].checked){
  //   //   console.log("zaznaczony")
  //   // }
  //   // console.log(checked[i] === true )
  //   console.log(checked)
  // }
  console.log(checked)
    // checked.filter(toDo => toDo !== toDo.checked )
  console.log("działam");
};

const deleteAllHandle = () => {
  addedSection.remove();
};

btn.addEventListener("click", handleAdd);

addedSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    deleteHadnle(e);
  } else if (e.target.classList.contains("edit-btn")) {
    editHandler(e);
  }
});

deleteAllBtn.addEventListener("click", deleteAllHandle);
deletedAllCheckedBtn.addEventListener("click", deletedAllCheckedHandle);

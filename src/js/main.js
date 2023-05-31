const content = document.querySelector("#content");
const date = document.querySelector("#date");
const btn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const editBtn = document.querySelector(".edit-btn");
const addedSection = document.querySelector(".added");
const errorText = document.querySelector(".error");
const deleteAllBtn = document.querySelector(".delete-all");
const deletedAllCheckedBtn = document.querySelector(".delete-checked");
const selectAllBtn = document.querySelector(".select-all");
const checkBoxes = document.querySelectorAll(".check-box");

const handleAdd = () => {
  if (content.value === "") {
    errorText.textContent = "Musisz uzupełnić wszystkie pola !";
    return;
  } else if (content.value !== "") {
    errorText.textContent = "";
  }

  // tworzę po koleji elementy i dodaję ję do struktury html na końcu dodaję całość czyli addedBox do sekcji 
  // jako każdorazowy nowy toDo
   
  const addedBox = document.createElement("div");
  addedBox.classList.add("added-to-do");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("check-box");

  const addedContent = document.createElement("span");
  addedContent.classList.add("to-do-text");
  addedContent.textContent = content.value;

  const divBoxBtn = document.createElement("div");
  divBoxBtn.classList.add("btns-box");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Usuń";

  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.textContent = "Edytuj";

  divBoxBtn.appendChild(deleteButton);
  divBoxBtn.appendChild(editButton);

  addedBox.appendChild(checkBox);
  addedBox.appendChild(addedContent);
  addedBox.appendChild(divBoxBtn);
  // addedBox.appendChild(deleteButton);
  // addedBox.appendChild(editButton);

  addedSection.appendChild(addedBox);

  content.value = "";
};

// tworzy addedBox  naciśnietego elemenu delet najbliżej elementu z klasą added-to-do i usuwa go

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

// tworzę tablicę ze wszystkimi toDosami iteruję za pomocą forEach i zmieniam checked na true co zaznacza wszytskie
// checkboxy

const selectAllToDos = () => {
  const checked = document.querySelectorAll(".check-box");

  checked.forEach(toDo => {
    toDo.checked = true;
  });

  console.log(checked);

  // checked.checked === true
};

// tworzę tablicę z wszystkimy zaznaczonymi checkboxami , następnie metodą forEach literuje ją znajduje najbliższe
// added-to-do z zaznaczonym checkBoxem i ją usuwa

const deletedAllSelectedHandle = () => {
  const checked = document.querySelectorAll(".check-box:checked");

  checked.forEach(checkbox => {
    const todoContainer = checkbox.closest(".added-to-do");
    todoContainer.remove();
  });
};

// usuwa sekcję addedSection z wszystkimi toDosami

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


// const enterKey = (e) => {
// if (e.key === "Enter"){
//   handleAdd()
// }
// }

content.addEventListener("keypress",  (e) =>  {
if( e.key === "Enter"){
  handleAdd()
}
})

deleteAllBtn.addEventListener("click", deleteAllHandle);
deletedAllCheckedBtn.addEventListener("click", deletedAllSelectedHandle);
selectAllBtn.addEventListener("click", selectAllToDos);

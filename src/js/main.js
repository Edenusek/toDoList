const content = document.querySelector("#content");
const date = document.querySelector("#date");
const btn = document.querySelector(".btn");
const deleteBtn = document.querySelector(".delete-btn");
// const addedContent = document.querySelector(".added-content");
// const addedDate = document.querySelector(".added-date");
// const addedAray = document.querySelector(".added-box");
const addedSection = document.querySelector(".added")
const errorText = document.querySelector(".error");

const aray = [];

const handleAdd = () => {
    const enteredDate = new Date(date.value);
    const year = enteredDate.getFullYear();
    const month = enteredDate.getMonth() + 1;
    const day = enteredDate.getDate();

  if (content.vaule === "" || date.value === "") {
    errorText.textContent = "Musisz uzupełnić wszystkie pola !";
    return;
  }

const addedBox = document.createElement("div")
addedBox.classList.add("added-box")

const addedContent = document.createElement("span")
addedContent.classList.add("added-content")
addedContent.textContent = content.value;

const addedDate = document.createElement("span")
addedDate.classList.add("added-date")
addedDate.textContent = `${day}-${month}-${year}`;

const checkBox = document.createElement("input")
checkBox.type = "checkbox"

const deleteButton = document.createElement("button")
deleteButton.classList.add("delete-btn")
deleteButton.textContent = "usuń"

addedBox.appendChild(addedContent)
addedBox.appendChild(addedDate)
addedBox.appendChild(checkBox)
addedBox.appendChild(deleteButton)

addedSection.appendChild(addedBox)
};


const deleteHadnle = (e) => {
  const addedBox =  e.target.closest("added-box");
  addedBox.remove()
};

btn.addEventListener("click", handleAdd);
// deleteBtn.addEventListener("click", deleteHadnle);
addedSection.addEventListener("click", function (e) {
    if(e.target.classList.contains("deletebtn")){
        deleteHadnle
    }
})

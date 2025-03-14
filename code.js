const myDiv = document.getElementById("myDiv");
const heading = document.createElement("h1");
heading.textContent = "Welcome to DOM homework";
heading.classList.add("highlight");

const paragraph = document.createElement("p");
paragraph.textContent = "This is your first DOM homework assignment";

const ul = document.createElement("ul");
["Item 1", "Item 2", "Item 3"].forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
});

myDiv.append(heading, paragraph, ul);
let count = 1;
document.getElementById("addItemButton").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = `New List Item ${count++}`;
    li.style.color = getRandomColor();
    ul.appendChild(li);
});

myDiv.addEventListener("click", () => {
    myDiv.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

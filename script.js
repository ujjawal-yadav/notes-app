const noteTitleInput = document.getElementById("note-title");
const noteContentInput = document.getElementById("note-content");
const notesContainer = document.getElementById("notes-container");

function addNote() {
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();

    if (title === '' && content === '') {
        alert("Title or content cannot be empty");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${title}</strong><br>${content}`;
        notesContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    noteTitleInput.value = "";
    noteContentInput.value = "";
    saveData();
}

noteContentInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addNote();
    }
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("notesData", notesContainer.innerHTML);
}

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notesData");
}

showNotes();

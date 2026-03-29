function addNote() {

const container = document.getElementById("notesContainer");

const note = document.createElement("textarea");

note.className = "note";

note.placeholder = "Write your note...";

container.appendChild(note);

}

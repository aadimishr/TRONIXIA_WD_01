function addNote(){

const notesContainer = document.getElementById("notes");

const note = document.createElement("textarea");

note.className = "note";

note.placeholder = "Write your note...";

notesContainer.appendChild(note);

}

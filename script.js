function addNote() {

const container = document.getElementById("notesContainer");

const noteDiv = document.createElement("div");
noteDiv.className = "noteBox";

const textarea = document.createElement("textarea");
textarea.placeholder = "Write your note...";

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";

deleteBtn.onclick = function(){
noteDiv.remove();
saveNotes();
};

textarea.oninput = saveNotes;

noteDiv.appendChild(textarea);
noteDiv.appendChild(deleteBtn);

container.appendChild(noteDiv);

saveNotes();
}

function saveNotes(){

const notes = document.querySelectorAll(".noteBox textarea");

let data = [];

notes.forEach(note=>{
data.push(note.value);
});

localStorage.setItem("notes", JSON.stringify(data));

}

function loadNotes(){

const savedNotes = JSON.parse(localStorage.getItem("notes"));

if(savedNotes){

savedNotes.forEach(text=>{

addNote();

let textareas = document.querySelectorAll(".noteBox textarea");
textareas[textareas.length-1].value = text;

});

}

}

loadNotes();

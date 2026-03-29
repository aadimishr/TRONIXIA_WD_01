function addNote(text = "") {

const container = document.getElementById("notesContainer");

const noteBox = document.createElement("div");
noteBox.className = "noteBox";
noteBox.draggable = true;

const textarea = document.createElement("textarea");
textarea.value = text;

const colorInput = document.createElement("input");
colorInput.type = "color";

const deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";

deleteBtn.onclick = function () {
noteBox.remove();
saveNotes();
};

textarea.oninput = saveNotes;

colorInput.oninput = function(){
noteBox.style.background = colorInput.value;
saveNotes();
};

noteBox.appendChild(textarea);
noteBox.appendChild(colorInput);
noteBox.appendChild(deleteBtn);

container.appendChild(noteBox);

noteBox.addEventListener("dragstart", dragStart);
noteBox.addEventListener("dragover", dragOver);
noteBox.addEventListener("drop", dropNote);

saveNotes();
}

function saveNotes(){

const notes = [];

document.querySelectorAll(".noteBox").forEach(note=>{
notes.push({
text: note.querySelector("textarea").value,
color: note.style.background
});
});

localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes(){

const savedNotes = JSON.parse(localStorage.getItem("notes"));

if(savedNotes){

savedNotes.forEach(note=>{
addNote(note.text);

const lastNote = document.querySelectorAll(".noteBox");
lastNote[lastNote.length-1].style.background = note.color;
});

}

}

function dragStart(e){
e.dataTransfer.setData("text/plain", e.target.innerHTML);
}

function dragOver(e){
e.preventDefault();
}

function dropNote(e){
e.preventDefault();
}

loadNotes();

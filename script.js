function addNote(){

let note=document.createElement("textarea");

note.className="note";

note.placeholder="Write your note...";

document.getElementById("notes").appendChild(note);

}

function addNote() {
  const container = document.getElementById("notesContainer");

  const noteBox = document.createElement("div");
  noteBox.className = "noteBox";

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Write your note...";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    noteBox.remove();
  };

  noteBox.appendChild(textarea);
  noteBox.appendChild(deleteBtn);

  container.appendChild(noteBox);
}

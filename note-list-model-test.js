function testNotesListArrayIsEmpty() {
  var noteList = new NoteList();

  if(noteList.notes.length !== 0) {
    throw new Error("Notes array is not empty");
  }

};

function testAddingNotesToList(){
  var noteList = new NoteList();
  var note = { text: "I like Makers" };
  noteList.add(note);

  if (noteList.notes[0] !== note){
    throw new Error("Notelist array not storing new entries");
  }
};

testNotesListArrayIsEmpty();
testAddingNotesToList();

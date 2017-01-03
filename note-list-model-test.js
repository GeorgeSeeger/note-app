function testNotesListArrayIsEmpty() {
  var noteList = new NoteList();

  if(noteList.notes.length !== 0) {
    throw new Error("Notes array is not empty");
  }

};

testNotesListArrayIsEmpty();

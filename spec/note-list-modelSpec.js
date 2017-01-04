function testListIsEmptyArray() {
  var notelist = new NoteList();

  assert.isTrue(notelist.list.length === 0)

};

function testCanAddNoteToList(){
  var notelist = new NoteList();
  var note = { text: "firstnote" };
  notelist.storeNote(note);

  assert.isTrue(notelist.list[0] === note)
};

function testListReturnsMultipleNotes() {
  var notelist = new NoteList();
  var note1 = { text: "firstnote" };
  var note2 = { text: "secondnote" };
  notelist.storeNote(note1);
  notelist.storeNote(note2);

  assert.isTrue(notelist.list[1] === note2)
};

function testShowListReturnsMultipleNotes() {
  var notelist = new NoteList();
  var note1 = { text: "firstnote" };
  var note2 = { text: "secondnote" };
  notelist.storeNote(note1);
  notelist.storeNote(note2);

  assert.isTrue(notelist.showList() === notelist.list)
};


function testStoreNoteSavesNoteId() {
  var notelist = new NoteList();
  var note1 = { text: "firstnote" };
  var note2 = { text: "secondnote" };
  notelist.storeNote(note1);
  notelist.storeNote(note2);
  assert.isTrue(notelist.list[1].id === 1 && notelist.list[0].id === 0)
}



testListIsEmptyArray();
testCanAddNoteToList();
testListReturnsMultipleNotes();
testShowListReturnsMultipleNotes();
testStoreNoteSavesNoteId();

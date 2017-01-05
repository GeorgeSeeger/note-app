'use strict';

(function testNewListCreated() {
  var list = new NoteList();
  assert.isTrue( list.seeList() instanceof Array )
  console.log("This returned: " + list.seeList())
})();

(function testNoteIsInList() {
  var list = new NoteList();
  var note = {readNote: "Yoko"};
  list.saveNote(note);
  assert.isTrue(list.seeList().length === 1)
  console.log("This returned: " + list.seeList());
})();

(function hasUniqueID() {
  var note1 = new Note("hello");
  var note2 = new Note("goodbye");
  var noteList = new NoteList();
  noteList.saveNote(note1);
  noteList.saveNote(note2);
  assert.isTrue(note1.id === 0);
  assert.isTrue(note2.id === 1);
  console.log("notes have unique id's");
})();

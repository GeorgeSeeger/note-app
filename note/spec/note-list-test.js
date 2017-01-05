'use strict';

function testNewListCreated() {
  var list = new NoteList();
  assert.isTrue( list.seeList() instanceof Array )
  console.log("This returned: " + list.seeList())
};

function testNoteIsInList() {
  var list = new NoteList();
  var note = {readNote: "Yoko"};
  list.saveNote(note);
  assert.isTrue(list.seeList().length === 1)
  console.log("This returned: " + list.seeList());
};

testNewListCreated();
testNoteIsInList();

'use strict'

function testNewNoteListViewCreated() {
  var noteList     = {};
  var noteListView = new NoteListView(noteList);
  assert.isTrue( noteListView.seeNoteList() === noteList);
  console.log("This returned: " + noteListView.seeNoteList());
};

function testNewNoteListViewDisplayHTML() {
  var note1        = {readNote: "Yolo"};
  var note2        = {readNote: "Yoko"};
  var noteList     = {seeList: [note1, note2]};
  var noteListView = new NoteListView(noteList);
  var html         = "<ul><li><div>Yolo</div></li><li><div>Yoko</div></li></ul>";
  assert.isTrue(noteListView.displayHTML() === html );
  console.log("This returned: " + noteListView.displayHTML());
};


testNewNoteListViewCreated();

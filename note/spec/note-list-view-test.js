'use strict'

function testNewNoteListViewCreated() {
  var noteList     = {};
  var noteListView = new NoteListView(noteList);
  assert.isTrue( noteListView.seeNoteList() === noteList);
  console.log("This returned: " + noteListView.seeNoteList());
};

(function testNewNoteListViewDisplayHTML() {
  var note1        = {readNote: function(){return "Yolo Yolo Yolo Yolo Yolo "}};
  var note2        = {readNote:function(){return "Yoko Yoko Yoko Yoko Yoko "}};
  var noteList     = {seeList: function(){return [note1, note2]}};
  var noteListView = new NoteListView(noteList);
  var html         = "<ul><li><div>Yolo Yolo Yolo Yolo </div></li><li><div>Yoko Yoko Yoko Yoko </div></li></ul>";
  assert.isTrue(noteListView.displayHTML() === html );
  console.log("This returned: " + noteListView.displayHTML());
})();


testNewNoteListViewCreated();

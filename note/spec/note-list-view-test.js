'use strict';

(function testNewNoteListViewCreated() {
  var noteList     = {};
  var noteListView = new NoteListView(noteList);
  assert.isTrue( noteListView.seeNoteList() === noteList);
  console.log("This returned: " + noteListView.seeNoteList());
})();

(function testNewNoteListViewDisplayHTML() {
  var note1        = {readNote: function(){return "Yolo Yolo Yolo Yolo Yolo "}, id: 0};
  var note2        = {readNote:function(){return "Yoko Yoko Yoko Yoko Yoko "}, id: 1};
  var noteList     = {seeList: function(){return [note1, note2]}};
  var noteListView = new NoteListView(noteList);
  var html         = "<ul><li><div><a id='link-0' href='#notes/0'>Yolo Yolo Yolo Yolo </a></div></li><li><div><a id='link-1' href='#notes/1'>Yoko Yoko Yoko Yoko </a></div></li></ul>";
  assert.isTrue(noteListView.displayHTML() === html );
  console.log("This returned the html");
})();

(function linkNoteToURl(){
  var note = {readNote: function(){return "Yolo"}, id: 0};
  var noteList = {seeList: function(){return [note]}};
  var noteListView = new NoteListView(noteList);
  var html = "<ul><li><div><a id='link-0' href='#notes/0'>Yolo</a></div></li></ul>";
  assert.isTrue(noteListView.displayHTML() === html );
  console.log("URL is linked");
})();

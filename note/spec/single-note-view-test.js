"use strict";

(function testNewNoteViewCreated() {
  var note = {readNote: "This is a note"};
  var noteView = new NoteView(note);
  assert.isTrue( noteView.note === note );
  console.log("noteview can be created");
})();

(function testReturnHTML(){
  var note = {readNote: function(){return "This is a note"}};
  var noteView = new NoteView(note);
  assert.isTrue( noteView.displayHTML() === "<div>This is a note</div>" );
})();

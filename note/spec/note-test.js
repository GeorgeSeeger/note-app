'use strict';

(function testNewNoteCreated() {
  var note = new Note('hi!');
  assert.isTrue( note.readNote() === 'hi!');
  console.log("This returned: " + note.readNote());
})();

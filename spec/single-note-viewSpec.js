function testCanInstantiateSingleNoteView() {
  var singleNoteView = new SingleNoteView();
  assert.isTrue(singleNoteView !== undefined)
};

function testTakesNoteModelOnInstantiation() {
  var note = { text : "Note model"};
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.note === note )
};

function testReturnsHTMLString() {
  var note = { text : "Note model"};
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnHTML() === "<div>Note model</div>")
};

testCanInstantiateSingleNoteView();
testTakesNoteModelOnInstantiation();
testReturnsHTMLString();

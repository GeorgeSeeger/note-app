function testNoteListView() {
  var notelistview = new NoteListView(new NoteList);
  assert.isTrue(notelistview !== undefined)
};

function testNoteShowsUpInNoteList() {
  var notelistview = new NoteListView(new NoteList);
  notelistview.addNote({ text: "My name is Bryony" });
  assert.isTrue(notelistview.view() === "<ul><li><a id='click-link-0' href='#notes/0'>My name is Bryony</a></li></ul>")
};

function testNoteCropsStringAt20Chars(){
  var notelistview = new NoteListView(new NoteList);
  notelistview.addNote({ text: "My name is Bryony" });
  notelistview.addNote({ text: "This string will be over 20 chars long"})

  assert.isTrue(notelistview.view() === "<ul><li><a id='click-link-0' href='#notes/0'>My name is Bryony</a></li><li><a id='click-link-1' href='#notes/1'>This string will be </a></li></ul>" )
};

testNoteListView();
testNoteShowsUpInNoteList();
testNoteCropsStringAt20Chars();

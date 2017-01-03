function testingEmptyList(){
  var list = new NoteListHTML();

  if(list.view() !== "<ul></ul>"){
    throw new Error("This is not an empty html list")
  }
};

function testingNoteAddedInNoteList() {
  var list = new NoteListHTML();

  list.addNote({ text: "I like Makers" });
  if(list.view() !== "<ul><li>I like Makers</li></ul>"){
    throw new Error("list does not contain I like Makers ")
  }
};

function testingMultipleAddedNotes(){
  var list = new NoteListHTML();
  list.addNote({ text: "I like Makers" });
  list.addNote({ text: "I like Apples" });
  list.addNote({ text: "I like Croissants" });
  var html = "<ul><li>I like Makers</li><li>I like Apples</li><li>I like Croissants</li></ul>";

  if(list.view() !== html){
    throw new Error("Multiple notes not displaying");
  }
};

testingEmptyList();
testingNoteAddedInNoteList();
testingMultipleAddedNotes();

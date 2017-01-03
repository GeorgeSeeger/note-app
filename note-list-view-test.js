function testingEmptyList(){
  var list = new NoteListHTML({notes: []});

  if(list.view() !== "<ul></ul>"){
    throw new Error("This is not an empty html list")
  }
};

function testingNoteAddedInNoteList() {
  var noteList = {notes: [{ text: "I like Makers" }]};
  var list = new NoteListHTML(noteList);

  if(list.view() !== "<ul><li>I like Makers</li></ul>"){
    throw new Error("list does not contain I like Makers ")
  }
};

function testingMultipleAddedNotes(){
  var noteList = {notes: [{ text: "I like Makers" },
                          { text: "I like Apples" },
                          { text: "I like Croissants" }]};
  var html = "<ul><li>I like Makers</li><li>I like Apples</li><li>I like Croissants</li></ul>";
  var list = new NoteListHTML(noteList);

  if(list.view() !== html){
    throw new Error("Multiple notes not displaying");
  }
};

testingEmptyList();
testingNoteAddedInNoteList();
testingMultipleAddedNotes();

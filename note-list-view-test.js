

function testingEmptyList(){
  var list = new NoteListHTML();

  if(list.view() !== "<ul></ul>"){
    throw new Error("This is not an empty html list")
  }

};

testingEmptyList()


function testingNoteAddedInNoteList() {
  var list = new NoteListHTML();

  list.addNote({ text: "I like Makers" });
  if(list.view() !== "<ul><li>I like Makers</li></ul>"){
    throw new Error("list does not contain I like Makers ")
  }

};

testingNoteAddedInNoteList()

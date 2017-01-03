
function instantiateNoteWithText(){
  var note = new Note("I like Makers");

  if(note.text !== "I like Makers"){
    throw new Error("Note doesn't instantiate with 'I like Makers'");
  }
};

instantiateNoteWithText();

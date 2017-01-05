function testControllerCanBeInstantiated(){
  var noteList     = {};
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
  console.log("noteController is instantiated");
};

function testControllerInsertHTML(){
  var noteList  = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addFavourite();
  var string = "<ul><li><div>favourite drink: beer</div></li></ul>";
  var elementDouble = {innerHTML: ""};
  noteController.getElement = function() {
    return elementDouble;
  }

  noteController.insertHTML();
  assert.isTrue(elementDouble.innerHTML === string);
  console.log("Controller can insert HTML")
}



testControllerCanBeInstantiated();
testControllerInsertHTML();

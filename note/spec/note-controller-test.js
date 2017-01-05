(function testControllerCanBeInstantiated(){
  var noteList     = {};
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController instanceof NoteController);
  console.log("noteController is instantiated");
})();

(function testControllerInsertHTML(){
  var noteList  = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addFavourite();
  var string = "<ul><li><div><a id='link-0' href='#notes/0'>favourite drink: bee</a></div></li></ul>";
  var elementDouble = {innerHTML: ""};
  noteController.getElement = function() {
    return elementDouble;
  }
  noteController.insertHTML();
  assert.isTrue(elementDouble.innerHTML === string);
  console.log("Controller can insert HTML")
})();

(function testgetIdFromURL(){
  var noteList  = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addFavourite();
  noteController.insertHTML();
  document.getElementById('link-0').click();
  assert.isTrue(noteController.getIdFromURL() === '0');
})();

(function testGetNote(){
  var noteList  = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addFavourite();
  assert.isTrue(noteController.getNote(0).readNote() === "favourite drink: beer");
})();

(function testChangePageHMTL(){
  var noteList  = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.addFavourite();
  var elementDouble = {innerHTML: ""};
  noteController.getElement = function() {
    return elementDouble;
  }
  noteController.displaySingleNote(0);
  assert.isTrue(elementDouble.innerHTML === "favourite drink: beer");
})();

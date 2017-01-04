function testControllerCanBeInstantiated() {
  var notecontroller = new NoteController();
  if(notecontroller === undefined) {
    throw new Error("notecontroller doesn't exist");
  }
};

function testInnerAppElement() {
  var notecontroller = new NoteController();
  notecontroller.newNote('Favourite Drink: seltzer');
  notecontroller.showNotes();
  assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><a id="click-link-0" href="#notes/0">Favourite Drink: sel</a></li></ul>');
};

function testAddFavourite() {
  var noteController = new NoteController();
  noteController.newNote('Favourite Drink: seltzer');

  assert.isTrue(noteController.notelist.list[0].text === "Favourite Drink: seltzer");
};

testControllerCanBeInstantiated();
testInnerAppElement();
testAddFavourite();

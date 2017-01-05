window.onload = function(){
  var list = new NoteList;
  var controller = new NoteController(list);
  controller.addFavourite();
  controller.insertHTML();

  controller.makeUrlChangeShowNoteForCurrentPage();
};

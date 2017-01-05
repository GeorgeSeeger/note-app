window.onload = function(){
  var list = new NoteList;
  var controller = new NoteController(list);
  controller.addFavourite();
  controller.insertHTML();

  window.addEventListener("hashchange", function(){
    controller.displaySingleNote(controller.getIdFromURL());
  });
};

(function(exports) {

  function NoteController(noteList){
    this.noteList = noteList;
  };

  NoteController.prototype.addFavourite = function(){
    var note = new Note("favourite drink: beer");
    this.noteList.saveNote(note);
  };

  NoteController.prototype.insertHTML = function(){
    var html = new NoteListView(this.noteList).displayHTML();
    var element = this.getElement();
    element.innerHTML = html;
  };

  NoteController.prototype.getElement = function(){
    return document.getElementById("app");
  };

  NoteController.prototype.getIdFromURL = function(){
    return window.location.hash.split("/")[1];
  };

  NoteController.prototype.getNote = function(id){
    return this.noteList.seeList()[id];
  }

  exports.NoteController = NoteController;

})(this);

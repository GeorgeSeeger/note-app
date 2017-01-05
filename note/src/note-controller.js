(function(exports) {

  function NoteController(noteList){
    this.noteList = noteList;
  };

  NoteController.prototype.newNote = function(string){
    var note = new Note(string);
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

  NoteController.prototype.displaySingleNote = function(id){
    this.getElement().innerHTML = new NoteView(this.getNote(id)).displayHTML();
  };

  exports.NoteController = NoteController;

})(this);

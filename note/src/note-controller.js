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




  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage());
  };

  NoteController.prototype.showNoteForCurrentPage = function() {
    this.showNote(this.getNoteFromUrl(window.location.hash));
  };

  NoteController.prototype.getNoteFromUrl = function(location) {
    return this.noteList.seeList()[location.split("/")[1]];
  };

  NoteController.prototype.showNote = function(note){
    this.getElement().innerHTML = new NoteView(note).displayHTML();
  };


  exports.NoteController = NoteController;

})(this);

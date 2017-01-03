(function(exports){
  function NoteListHTML(){
    this.noteList = new NoteList();
  };
    NoteListHTML.prototype.view = function(){
      var string = "<ul>"
      for(var i = 0; i < this.noteList.notes.length; i++){
        string += "<li>" + this.noteList.notes[i].text + "</li>"
      }
      return string + "</ul>";
    }

    NoteListHTML.prototype.addNote = function(note) {
      this.noteList.add(note);
    }
  exports.NoteListHTML = NoteListHTML;
})(this);

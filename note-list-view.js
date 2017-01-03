(function(exports){
  function NoteListHTML(noteList){
    this.noteList = noteList;
  };
    NoteListHTML.prototype.view = function(){
      var string = "<ul>"
      for(var i = 0; i < this.noteList.notes.length; i++){
        string += "<li>" + this.noteList.notes[i].text + "</li>"
      }
      return string + "</ul>";
    }
  exports.NoteListHTML = NoteListHTML;
})(this);

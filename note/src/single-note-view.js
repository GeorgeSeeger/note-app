(function(exports){

  function NoteView(note){
    this.note = note;
  };

  NoteView.prototype.displayHTML = function(){
    return ("<div>" + this.note.readNote() + "</div>");
  };

  exports.NoteView = NoteView;
})(this);

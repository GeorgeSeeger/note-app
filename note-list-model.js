(function(exports){
  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.add = function(obj) {
    this.notes.push(obj);
  };

  exports.NoteList = NoteList;
})(this);

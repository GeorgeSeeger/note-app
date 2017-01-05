'use strict';

(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.seeNoteList = function() {
    return this._noteList;
  };

  NoteListView.prototype.displayHTML = function() {
    var allNotes = this._noteList.seeList();
    var string   = "<ul>";
    for (var i = 0; i < allNotes.length; i++ ) {
      string += ("<li><div>" + allNotes[i].readNote().slice(0,20) + "</div></li>");
    }
    string += "</ul>";
    return string;

  }


  exports.NoteListView = NoteListView;

})(this);

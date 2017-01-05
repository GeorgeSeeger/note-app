'use strict';

(function(exports) {
  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list;
  };

  NoteList.prototype.saveNote = function(note) {
    note.id = this._list.length;
    this._list.push(note)
  };

  exports.NoteList = NoteList;

})(this);

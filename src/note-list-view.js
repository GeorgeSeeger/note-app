var noteListView = function() {
  this.notelist = new noteList();
}

noteListView.prototype.htmlString = function() {
  return "<ul></ul>"
}

noteListView.prototype.view = function() {
  var string = "<ul>"
     for(var i = 0; i < this.notelist.list.length; i++){
       string += "<li>" + this.notelist.list[i].text + "</li>"
     }
     return string + "</ul>";
}

noteListView.prototype.addNote = function(note) {
      this.notelist.storeNote(note);
    }

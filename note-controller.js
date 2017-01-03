function NoteController(){
  this.noteList = new NoteList();
}
NoteController.prototype.addFavDrink = function(){
  this.noteList.add(new Note("Favourite Drink: seltzer"));
}
NoteController.prototype.displayNotes = function(){
  document.getElementById('app').innerHTML = new NoteListHTML(this.noteList).view();
}

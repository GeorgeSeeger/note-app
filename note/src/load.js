window.onload = function(){
  var list = new NoteList;
  var controller = new NoteController(list);
  controller.insertHTML();

  window.addEventListener("hashchange", function(){
    controller.displaySingleNote(controller.getIdFromURL());
  });

  document.getElementById('return').addEventListener('click', function(clickEvent){
    controller.insertHTML();
  });

  window.addEventListener('submit', function(submitEvent){
    submitEvent.preventDefault();
    controller.newNote(submitEvent.srcElement[0].value);
    document.getElementById("text").value = "";
    controller.insertHTML();
  });

};

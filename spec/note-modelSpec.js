
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

(function() {
  var note = new Note(" ");
  assert.isTrue(note.text !== undefined)
})();

(function() {
  var note = new Note("Test number 1.");
  assert.isTrue(note.text === "Test number 1.")
})();

(function() {
  var note = new Note("Test number 2.");
  assert.isTrue(note.returnNote() === "Test number 2.")
})();

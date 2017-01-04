var assert = {
  isTrue: function(assertionToCheck) {
    if (assertionToCheck) {
      console.log('PASSED');
    }else{
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

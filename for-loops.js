
console.log("*** Initialize at five and add Increments of 10 until you reach 120***");

var max = 120;

for (var i = 5; i <= max; i+=10) {
  console.log("Result: " + i);
}


// ***********************************************************************************

console.log(" ");
console.log("*** Initialize at 4096, divide by 2, stop when counter variable is 1***")

for (var i = 4096; i >= 1 ; i /= 2) {
  console.log("Result: " + i);
}

// ***********************************************************************************



console.log(" ");
console.log("*** Create array of presidents, loop over using concatenation ***")

var presidents =["G. Washington", "J. Adams", "T. Jefferson"];

for (var i = 0; i < presidents.length; i++) {
  console.log("President #", i+1 , "was " + presidents[i]);
}

// ***********************************************************************************

console.log(" ");
console.log("*** Iterare over objects below and use console.log to output names below ***")

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies){
  console.log("Ant Species: " + prop);
}

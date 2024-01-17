//Create an array named myInstruments that contains the following instruments: flute, clarinet, saxophone, trumpet, and trombone
//Arrays can store each data item instead of just const = clarinet, const = flute, etc.
const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
//The following code transforms it. Push and Splice are examples of an array manipulation. 
myInstruments.push("tuba", "bassoon"); //Push adds an item to the array.
myInstruments.splice(2, 1); //The splice() method adds and/or removes array elements. The splice() method overwrites the original array.
myInstruments.unshift("saxophone"); //Unshift method adds new elements to the beginning of an array, and overwrites the original array.
//The shift() method removes the first item of an array. The shift() method changes the original array. The shift() method returns the shifted element.
/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the first instrument
 */
function getFirstInstruments(instruments) {
    return instruments[0];//returns the first instrument.
}/**
 * @param {string[]} instruments an array of instruments
 * @returns {string} the last instrument
 */
function getLastInstrument(instruments) {
    return instruments[instruments.length - 1];
  }//Returns the last item. Minus 1 means the array, but singling out 1 of the items.
  
  function getFirstandLastInstruments(instruments){
    const output = [];//In JavaScript, const is a keyword used to declare a variable that cannot be reassigned a new value. It is similar to let , but the value of a const variable cannot be changed once it has been declared.
    output.push(instruments[0]);//Singles out the first array. 
    output.push(instruments[instruments.length - 1]);//Singles out the last array.
    return output;//Shows the results of the code above.
  }
  // Some other ways to do this:
  // return [instruments[0], instruments[instruments.length - 1]];
  // OR
  // return [instruments[0], instruments.at(-1)];
  // OR
  // return [getFirstInstrument(instruments), getLastInstrument(instruments)];
function getFirstThreeInstruments(myInstruments){
    const output = []; //i is the iterator. '++' << Adds one to the variable. '+' << adds strings.
  for (let i = 0; i < 3; i++) { //i = 0, the first item in the array. '<' - defines the condition for the loop to run (i must be less than 3).
    output.push(instruments[i]);
  }
  return output;
}//Here, the for statement declares the variable i and initializes it to 0. It checks that i is less than the number of options in the <select> element, performs the succeeding if statement, and increments i by 1 after each pass through the loop.
function getTInstruments(instruments){
    const output = [];
    for (let i = 0; i < instruments.length; i++) {
    const instruments = instruments[i];
    //Lucy, you can also use string indexes! 
    if (instrument[0] === "t") { //The === operator means "is exactly equal to," matching by both value and data type. The == operator means "is equal to," matching by value only.
        output.push(instrument);
      }
    }
    return output;
  } 
  function getLongestNamedInstrument(instruments){ //Returns the longest name.
    let longestInstrument = "";
    //Here, I'm using a for..of loop as syntactic sugar for the index loop.
    for (const instrument of instruments){
        if (instrument.length > longestInstrument.length){
            longestInstrument = instrument;
        }
        }
    }


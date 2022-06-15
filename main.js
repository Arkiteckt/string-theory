//function xify(str){
   // let newStr = "";
    
    //for (let i = 0; i < str.length; i++){
        //newStr = newStr + "x";
    //}
    //return newStr;
   // }
    //console.log(xify("hello"));
   // console.log(xify("hi there"));



yellingChars
    //yellingChars` - returns the given string with an exclamation point after each character
  //Examples:
    // yellingChars('goodness') -> 'g!o!o!d!n!e!s!s!'
    //yellingChars('oh hello') -> 'o!h! !h!e!l!l!o!'
  //Hints:
// We can add more than one thing to the string each time through the loop. 
//In this case, it's the current character AND an exlamation point.

function yellingChars(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++)
    {
        newStr = newStr + "!" + exclamation [i];
}
return newStr;

}

console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

indexedChars

function indexedChars(str){

    let newStr = "";
    for(let i = 0; i < str.length; i++){
    newStr = newStr + i + str[i];
}
    return newStr;
}
console.log(indexedChars("hello"));
//@h1e2l3l4o
console.log(indexedChars("bye"));
//0b1y2e
//    indexedChars - adds the index of each character before that character in the given string
//Examples:
//indexedChars('hello') -> '0h1e2l3l4o'
//indexedChars('bye') -> '0b1y2e'
//Hints:
//We can add something BEFORE the current character as well!



// exclaim - returns the given sentence with every question mark 
// or period changed to an exclamation point
//Examples:
//exclaim('What are you doing? Are you a fool?') -> 'What are you doing! Are you a fool!'
//exclaim('This is fine.') -> 'This is fine!'


//function exclaim(str){
    let newStr = "";
    for (let i = 0; i < str.length; i ++)
//}
 //newStr = newStr + "Question +  "!"


console.log(exclaim('What are you doing?'));
console.log(exclaim('This is fine.'));

function yellingChars(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++)
    {
        newStr = newStr + "!" 
}
return newStr;

}

console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));




//truncate - shortens a long string to 15 characters plus an ellipsis (...)
//Examples:
//truncate('The fault, dear Brutus, is not in our stars, but in ourselves.') -> 'The fault, dear...'
//truncate("Well, that's just, like, your opinion man.") -> "Well, that's ju..."

//function truncate(str)
//{
  //  let newStr = "";
  //  for (let i = 0; i < str.length; i --);
//}


//ciEmailify - creates an email from a two-part name
//Examples:
//ciEmailify('colin jaffe') -> 'colin.jaffe@codeimmersives.com'
//ciEmailify('Anthony DeRosa') -> 'anthony.derosa@codeimmersives.com'
function ciEmailify(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if(str[i]) === " "){
          newStr += ", "; // or newStr = newStr + str [i]
        } else {
        newStr += str[i];
        }
        //console.log(newStr);
}
return newStr;
}

// string format: "firstname lastname"
console.log(ciEmailify("firstname lastname"));
//firstname.lastname@codeimmersives.com

console.log(ciEmailify)("saul goodman");
//saul.goodman@codeimmersives.com


//reverse - reverses the given string
//Examples:
//reverse('colin') -> 'niloc'
//reverse('mesuara') -> 'arausem'





//onlyVowels - returns only the vowels from a word
//Examples:
//onlyVowels('Colin Jaffe') -> 'oiae'
//onlyVowels('quickly') -> 'ui'
//onlyVowels('Anthony DeRosa') -> 'Aoeoa


//ciEmailify code  below

function ciEmailify(str){
  let newStr = "";

  for(let i = 0; i < str.length; i++){
      if(str[i] === " "){
          //add period to the code
          newStr += "."; //OR newStr = newStr + "."
      } else {
          newStr += str[i]; //OR newStr = newStr + str[i]
      }        
      //console.log(newStr);
  }
  
  return newStr + "@codeimmersives.com";
}
//string format: "firstname lastname" 

console.log(ciEmailify("firstname lastname")); 
//firstname.lastname@codeimmersives.com

console.log(ciEmailify("saul goodman"));
//saul.goodman@codeimmersives.com 


//YelliingChars code below

function yellingChars(str){
  let newStr = "";
  for (let i = 0; i < str.length; i++)
  {
      newStr = newStr + "!" + exclamation [i];
}
return newStr;
}
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));
// Interaction – alert, prompt

//prompt - prompt("query", "");
let age = prompt("How old are you?(numeric value)", ""); 
// If using IE we need to add a second parameter (Q, "")

//console.log(age);
//confirm - confirm("query");
let check = confirm("Are you sure?");
//console.log(check);

let year = new Date();

//alert - alert("query")
let outcome = alert(`You were born around ${year.getFullYear()-age}`);
//console.log(outcome);


// Create an age verification system, using an 
// If Statement and a combination of prompt, confirm and alert - OK = true, Cancel = false

/* if ( value == true) {
    code x - would execute through the questions
      confirm("question");
  } else if (value == false){
    code w - ask the user if they are sure
    if (value == false) {
      we want to give the user the chance to re-enter their age
    } else {
      we want to prevent the user from continuing
    }
} else {
  code y - would prevent the user from continuing.
} */

//ageCheck();
function ageCheck(){
let userAge = prompt("Please give your current age (Numerical Value):");// "56" 56
console.log(userAge);
if ( Number(userAge) >= 18){
 let userReply = confirm("Do you have ID to confirm your age?");
 console.log(userReply);

  if (userReply === true){
    let userAge2 = prompt("Please give your current age:");

    if (userAge2 == userAge){
      alert("Fantastic! We have approved your age and purchase");
      }
    else {
      alert("We are very sorry, but you must be 18 or over and have proof of ID");
      };

  } else {
    alert("We are very sorry, but we must have proof of ID before we can allow purchase");
    };

} else {
  alert("We are very sorry, but you must be 18 or over");
};
};
//ageCheck();









/*https://www.surveymonkey.co.uk/r/W2ZDF7P*/







// For, while, foreach, do-while loop

//for - loops through a block of code a number of times
//while - loops through a block of code while a specified condition is true
//do/while - also loops through a block of code while a specified condition is true












/* for (statement 1; statement 2; statement 3) {
  // code block to be executed //
};
Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.
*/

//NB: If we replaced let with var in the code below then the value get redefined. 


//let i = 3; // this value would be redefined 

for (let i = 0; i <= 10; i++){
  console.log(i);
}; // 5,6,7,8,9

//x=0, check that against condition (x < 10), if true, console.log(x), then increment and repeat



const fruits = ["apple", "banana", "pear", "grapes", "cherries", "plum", "pineapple"];
let data="";//empty string
for (let fruit in fruits) {
  console.log(fruit); // prints the index value
  data += fruits[fruit] + " "; //fruits[0]
  console.log(data);
};
console.log(data);
//document.getElementById("fruit").innerText = data;
//let fruit = fruits[x]; - created a variable that is the value of each array as it increments


/*for (i=0; i < fruits.length; i++ ){
  console.log(fruits[i]);
};*/



//forEach
const fruitsA = ["apple", "banana", "pear", "grapes", "cherries", "plum", "pineapple"];
fruitsA.forEach(fruitsB);

function fruitsB(item) {
  let text = "I chose a" + " " + item;
  console.log(text);
};



//for of
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
  console.log(text);
}




//While Loop 
let i=0; // variable
let content="The number"; // content variable
while (i < 5) { // Number of lives in a game
  content = " " + i + " is less than 15";
  i++;// incrementing inside the while loop
  console.log(content);
};


let userResponse = true;
while (userResponse){

  userResponse = confirm("Are you finished with the program?");
  if (userResponse == true){
    console.log("What do you want to do?");
  }
  else {
    console.log("Exiting the program");
  }
}

let x = "password";
let userguess = prompt("Guess the safe word");
console.log(userguess)
while (x != userguess){ // runs until x and guess are the same

  userguess = prompt("Guess the safe word");

}













//Set up below - will list items one by one. Above - will add on to exsisting string.
 let z = 0;
while (z <= 5) { 
  let content2 = z;
  z++;
 // incrementing inside the while loop
  console.log(content2);
}; // if z 15 == then the code won't run






//Do-While loop
let contentB = "the number ";
let b = 0; // because of code order do loop will ALWAYs run once (may give unexpected result)
let lives = Number(prompt("How many lives would you like?"))
do {
  contentB += b + " is less than 15 ";
  b++;
  console.log(contentB);
}
while (b <= lives); // false it will stop running

// ALL loops will run while condition == true, once false they will stop




/*Task 1// Create a for loop where the output will display only the array item that strictly matches 
the username(array) .value(array-items) */
/*Example:
const username= ["item1", "item2", "item3", "item4", "item5", "item6"];

for(condition){

  switch(username): 
  
  case "item 1":
        console.log(`Welcome ${username[0]}!`);
        break;

  default:
    sorry that's incorrect we don't have that username registered
    break;

  check username //filter
  console item(s) that match
}*/


const usernames= ["item1", "item2", "item3", "item4", "item5", "item6"];

for(let username in usernames){
  switch(usernames[username]){
  
    case "item1":
      console.log(`Welcome ${usernames[0]}!`);
      break;

    case "item2":
      console.log(`Welcome ${usernames[1]}!`);
      break;
        
    default:
      console.log("Sorry We don't have that name registered")
      break;
  };
};

/*Task 2// Check if a string contains the letter 'y'. Print 'yes' if it does and 'no' if it does not
for
//Example: 
let string2 ="don't know why";
//example ouput = "yes"*/
let string2 ="don't know why";
 for (letter in string2){
    if (string2[letter] == "y"){
      console.log("yes")
    }
    else{
      console.log(`The character "${string2[letter]}", isn't y`)
    }
 }

/*
// Task 3
Write code that prints the Fibonacci sequence (0,1,1,2,3,5,8,13) 
Example:
function fibonacci(n){
var n1=0;
var n2=1;
var count=2;
var n3;
console.log(n1,n2);
while loop (count<n){
} // figure out the while loop
}
 fibonacci(4) // 0,1,1,2,3,5,8,13,21
*/





/*Fibonacci Soltion*/
function fibonacci(n){
  var n1=0;
  var n2=1;
  var count=n;
  var n3;
  console.log(n1,n2);
  while(count<=n3){
    console.log(n3);

    n1 = n2;
    n2 = n3;
    n3 = n1 + n2;
  } 
  };
  




  /*
  const usernames1= ["item1", "item2", "item3", "item4", "item5", "item6"];
  const userInput1= document.getElementById("username").value ;

  for(let username in usernames){
    switch(userInput1 === usernames[username]){
    
      case true:
          console.log(`Welcome ${userInput1}!`);
          break;

      default:
            console.log("Sorry We don't have that name registered")
            break;
  };
  };
  */


/*
  let guess = Number(
    prompt(
      "I'm thinking of a number between 1 and 10 inclusive. Can you guess what it is?"
    )
  );
  guessAttempts = 0;
  let rand = Math.ceil(Math.random() * 10);
  while (guess != rand && guessAttempts < 3) {
    console.log(`Incorrect. The number was ${rand}`);
    guessAttempts++
    guess = Number(
      prompt(
        "I'm thinking of a number between 1 and 10 inclusive. Try Again?"
      )
    );
  }
*/
//Arrow Function in JavaScript - 2015

//Allow us to write shorter functions
//function we have seen before:

//Simple function example from last week -

let totalPrice = till(3,15); // 45

function till(x, y) {
  return  x*y
};

console.log(totalPrice); // 3 * 15 = 45

/*   --------------------------------------------------------------------------------------------------------   */
// => (EQUALS SIGN + GREATER THAN SYMBOL) 

// Same function as above, but as an ARROW Function:
// RULES:
// can pass parameters as above, can create variables in same way as above. 
// can only write the function inside {}
let totalPrice2 = (x,y) => x*y; // ARROW FUNCTION

let a =Number(prompt("Give a number between 0 - 20:"));
let b =Number(prompt("Give a number between 0 - 20:"));

console.log(totalPrice2(a,b)); // OUTPUT 2 * 6 = 12

//WHY USE ARROW FUNCTION INSTEAD OF A FUNCTION? 
// https://www.geeksforgeeks.org/when-should-one-use-arrow-functions-in-es6/

// TASK - CREATE 2 OF YOU OWN ARROW FUNCTIONS, USE EXAMPLE ABOVE AND ARTICLE FOR INSPIRATION!



//THIS

function thisFunction(id){
  console.log(id); // value of the id
  if (id === "text"){
  console.log("Success!");
  } else {
  console.log("Sorry it didn't work!");
  }
};


function myFunction(id){
  switch(id){
    case "p1":
            console.log("para1")
            break;
    case "p2":
            console.log("para2")
            break;
    case "p3":
            console.log("para3")
            break;
    case "p4":
            console.log("para4")
            break;
    case "p5":
            console.log("para5")
            break;
    default:
      console.log("Sorry an error has happened")
  }
}



// Coverted to Arrow Function

let thisFunction2 = (id) => id === "text2" ? console.log("Success!") : console.log("Sorry it didn't work!"); 


//Portfolio Check Up








//Math Object in JavaScript

/* Syntax = Math.property/method
 Math 
// TASK - FOR EACH BELOW PRECEED WITH "Math" E.G. -->Math.PI, Math.min() etc.
//CHOOSE YOU OWN VALUES
Properties - these are a selection of those avaliable: (Total 8)
.PI // property - returns value of pi (3.14 ... to 15th d.p.)
.SQRT2 // returns square root of two
.SQRT1/2 // returns square root of a half

Methods that can be applied include - these are a selection of those avaliable:
.min()    // used to find lowest value in list of arguments e.g. (0,150,-200,-50,50) would return -200
.max()    // used to find highest value in list of arguments e.g. (0,150,-200,-50,50) would return 150
.round()  // returns the value of (x) where x is a number rounded to the nearest integer (whole number) 3.4, 3.5
.sqrt()   // used to return the square root of a number (x) rounded to the nearest integer (whole number) 
.pow()    // takes (x, y), returns value of x to the power of y (e.g. pow(43,)= 3 x 3 x 3 x 3 = 81)
.floor()  // takes (x), rounds value of x down to nearest integer (e.g. 4.7 -> 4 or 8.6 -> 8)
.random() // returns random number between 0-1
.cos()    // takes x, returns the cosine of an angle in radians**, value between -1 and 1
.sin()    // takes x, returns the sine of an angle in radians**, value between -1 and 1
.ceil()   // takes x, returns value of x rounded up to nearest integer (e.g. 4.4 -> 5)

** Angle in radians = Angle in degrees x PI / 180
** Angle in degrees = Angle in radians x 180 / PI
//extra info on radians for the curious ---> https://www.mathsisfun.com/geometry/radians.html

https://www.tutorialrepublic.com/javascript-reference/javascript-math-object.php
https://codehs.com/tutorial/ryan/math-object-in-javascript
*/
console.log(Math.PI);

//Task: using what we've previously learnt.
// PART 1: Ask user for number of people attending the party

/* ideas: button(book a party) - runs code on click.
    may run a way to gain user input for number of attendees*/


  function ask() {
    alert("Hi Welcome to our site! If you wish to book please click the 'BOOK VENUE' button");
  };

  let book = setTimeout(ask, 30000) //30secs - this will run from landing on the page

  function booking(id){ // runs when button is clicked
    if(id === "venue"){  // checks id using 'this.id' on an onclick in HTML
      clearTimeout(book);
      let popup = prompt('How many people will be attending the party?(Numerical Value)'); //34
      console.log(popup);
      //tableFive(popup);
      // .value
      let price = "£" + tableFive(popup);//34 Return value = //738
      alert(price);
      // .value 
      // Create <input>, give an id, name,<p> £ <label> (cost) for:id/name. 
      // using DOM we link to the input and target value
      return
    } else {
      book;
      return
    }

  };

// PART 2: Calculate and log how many people will not be at a full table of 5
 /* May take the value received from part1, and use it to figure
 out table sizes*/

function tableFive(people){ // x = 34 6, 1 - 4 people
  if (Number(people) % 5 === 0){ //25
    let tables = people / 5; // divide user input by 5 a round up to whole number 
    return costPerTable(tables); // cost per table price
  } 
  else {
    return costPerHead(people);//738
  }; 
  // Using modulus as it tells me how many will be left over from the number we are dividing by (5)
};


// PART 3: Calculate and return the total cost of the party to the user
/* may also take value from part 2 and figure out the cost per head and per table */


function costPerHead(person){ // y = 34     (34 * 7) + 500 //OUTPUT = 738 - 500 = 238 
  let perHead = Number(person) * 7; //77
  let venueCost = 500;
  return perHead + venueCost; // 77 + 500 = 577 //738
};

function costPerTable(tables){
  let perTableCost = tables * 10; //5, 50
  let venueCost = 500;
  return perTableCost + venueCost; // 50+500 = 550
};




/* Walkthrough Projects - add your own flair to it by adding some of the external css sites to it
 Maths Game : Integrates HTML, CSS and JS - 
 https://javascript.plainenglish.io/build-a-math-game-with-javascript-8271f162b887
 

 Calculator: Integrates HTML, CSS and JS - 
 https://harsh-blogs.medium.com/how-to-make-a-calculator-using-html-css-and-js-252c1c2c135d


 Creating Games:
 https://www.codewizardshq.com/javascript-games/


 Weekly Timetable (example shows food planner):
 https://demo.mobiscroll.com/javascript/timeline/meal-planner


 Project Ideas:
 https://www.geeksforgeeks.org/top-10-projects-for-beginners-to-practice-html-and-css-skills/
 You may be able to apply some JS to improve the usability of these sites.
 */


/*
I want to pick up a user input so that I can return a price.

prompt = user input
variable =  to store prompt value

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text);


//jQuery
// taking a array of items (.cssP and #venue) and then changing multiple css properties
let changes = [".cssP", "#venue"];
/*
$(changes.join(', ')).css({
  "color":"red",
  "background":"aqua",
  "border":"darkred solid 2px" 
});

// taking a array of items (.cssP and #venue) and then changing multiple css properties

let event2 = () => console.log(3*4);
$('#eventBtn').mouseover(event2);

 $('#venue').css('backgroundColor','blue'); 
 // targets one item (#venue) and changes one css property.

 // $('#venue') = document.getElementByID("venue");
 // .css(property, value) = item.style.property = value

 $('#venue').mouseover(function(){
  $('#venue').css('fontFamily', 'Impact')
 }).mouseleave(function(){
  $('#venue').css('fontFamily', 'Arial')
 } );
// Adding a event to an item and then changing a css property

let item2 = $('.test1').get(1);
$(item2).css('color', 'blue'); // class
let item1 = $('h2').get(2); 
$(item1).css('color', 'red');
console.log($('h2').get(2));// tag

//#venue.mouseover().mouseleave()
//Below is similar event code to the jQuery above
let test = document.getElementById("venue");
test.addEventListener('mouseover', function run(){
  test.style.fontWeight = ('700');
}); 
test.addEventListener('mouseleave', function run(){
  test.style.fontWeight = ('200');
});

// Task - Target an id on a HTML document using jQuery.
//   Write in jQuery a program that shows and hides that element when a button is clicked
// #eventBtn









//target an id -> give it something that listens -> write code that tells it to hide or show 

$('#btn').click(
    function(){
      $('#cohort').toggle() // switch between hide and show
    }
  );


$('#btn').click(function(){
  if($('#cohort').css("display") != "none"){
    $('#cohort').hide(); // equivilant to changing display property to none
  } 
  else {
    $('#cohort').show(); // equivilant to changing display property to block
  }
});

// .css("display", "none"); / .css("display", "block");


function partySize(){
    let partySize = Number(prompt("How many people are going to the party?",""));
    console.log("You have chosen to have a party for", partySize);
};*/
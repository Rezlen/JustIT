const usernames = ["item1", "item2", "item3", "item4", "item5", "item6"];

for (let username in usernames) {
  switch (usernames[username]) {
    case "item1":
      console.log(`Welcome ${usernames[0]}!`);
      break;

    case "item2":
      console.log(`Welcome ${usernames[1]}!`);
      break;

    default:
      console.log("Sorry We don't have that name registered");
      break;
  }
}


/////////////
// for (let i = 2; i <= 6; i++) {
//   return i % 2 == 0 ? "even" : "odd";
// }

// var item = [1,2,3,4]
// function functionName(item) {
//   console.log(item % 2 == 0 ? "even" : "odd")
// }
// return FunctionName(item);
//


var item1 = [1,2,3,4]

function functionName(item) {
    result = item % 2 == 0 ? "even" : "odd"
  console.log(result)
    return 
}

for (i in item1) {
  functionName(i)
}

//// just accessing a HTML line by JS/DOM
let main = document.getElementById("inOne");
console.log('line 51', main)
////




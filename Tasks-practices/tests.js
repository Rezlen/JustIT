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
for (let i = 2; i <= 6; i++) {
  return i % 2 == 0 ? "even" : "odd";
}





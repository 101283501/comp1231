// remember the developer tools? open the "console" tab and have a look
// at what's there. the console.log you see below allows us to print info
// out to the console
console.log("it works! BUT MAKE SURE YOU RENAME THE FILE HERE AND UPDATE THE HTML SCRIPT TAG");


// DO NOT CHANGE
let randomBoolean = Math.random() >= 0.5
// LEAVE ALONE

if (randomBoolean) {
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const hour = new Date().getHours();
    let fullDate = `The time is ${minute} minutes, ${second} seconds, and ${hour} hours.`;
    console.log(fullDate)
} else {
  // DO NOT CHANGE
  let randomNumber = Math.floor(Math.random() * 100)
  // Leave alone
  
  // if (randomNumber) {}
  if (randomNumber) {
      console.log(`The number is ${randomNumber}`);
  }
}
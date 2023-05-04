const raisinAlarm = function(cookie) {
  for (const emoji of cookie) {
    if (emoji === "🍇") {
      return "Raisin alert!";
    }
  }

  return "All good!";
  // Put your solution here
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // All good!

const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.

let usernames = [];

gameInfo.forEach(item => {
    usernames.push(`${item.username}!`)
});

console.log('Usernames with "!":\n' + usernames);

// Create an array using forEach that contains the usernames of all players with a score bigger than 5. 

let highest_scores = [];

gameInfo.forEach(item => {
if (item.score > 5) {
    highest_scores.push(item.username);
}
});

console.log('Users with score bigger that 5:\n' + highest_scores);

// Find and display the total score of the users. (Hint: The total score is 71)

let totalScore = gameInfo.reduce((total, item) => { return total + item.score }, 0);

console.log('Total score of all users: ' + totalScore);
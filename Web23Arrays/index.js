//Declare an array containing the names of your fav movies and then print it.


let favMovies = ["Baby Driver" , "JohnWick", "Fast and Furious", "Terminator"]
console.log(favMovies);

console.log(favMovies.length);

let train_names = ["Rajdhani Express", "Duronto", "Chennail Express", "Gareeb Rath", "Shatabdi"]

//How many trains are there?
console.log(train_names.length);

//Print the name of last train.

console.log(train_names[(train_names.length)-1])

//Print the train names using loop

for(let i = 0; i<= train_names.length; i++) {
  console.log(train_names[i])
}

//Spread Operator
let a = [1,2,3];
let b = [...a]
console.log(b)


let movies = ["Batman", "Pushpa", "Ghajini", "RRR", "Avengers"]

for(let i = 0; i <= movies.length; i++) {
  if(i == 1 || i == 2) {
    continue;
  }
  console.log(movies[i]);
}
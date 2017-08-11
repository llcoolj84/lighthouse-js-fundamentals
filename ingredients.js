var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

console.log("\n** That's all the ingredients! **\n");
// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\n** That's all the ingredients! **\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
//Write a loop under each comment in the file. Under the first, write a while loop that prints out each item of ingredients. Under the second, write a for loop that does

for (var i = 7; i > 0; i--) {
  console.log(ingredients[i]);
}
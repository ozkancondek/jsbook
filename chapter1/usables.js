//=>get last element of array
const arr = [3, 5, 0, 7];
const lastElement = arr.at(-1);

//=>if I use functions with objects, we get methods.All js objects has some methods. arr.pop() is an example

//=>remove whitespaces in string
const name = "Hello from PC";
const removedWhiteSpaces = name.replace(/\s/g, "");

//=>convert string to array
const string = "word";

// Option 1
string.split("");

// Option 2
[...string];

// Option 3
Array.from(string);
//=>str*num

const strTimeNum = "ozkan".repeat(2);

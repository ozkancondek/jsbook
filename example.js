let book = {
  topic: "js",
  edition: 7,
};
let accessProperty = book.topic || book["edition"];
//create properties
book.author = "Flanagan";
book.contents = {};
//Conditional access
let conditional = book.contents?.ch01?.sect1;

//sample class
class Point {
  constructor(x, y) {
    this.horizontal = x;
    this.vertical = y;
  }

  distance() {
    return Math.sqrt(
      this.horizontal * this.horizontal + this.vertical * this.vertical
    );
  }
}

const p = new Point(1, 1);

console.log(p.distance());

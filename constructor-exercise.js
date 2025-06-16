/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */
class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }
  getSummary() {
    return `The book ${this.title} was published in ${this.year} and it is a ${this.genre} book`;
  }

  isClassic() {
    return new Date().getFullYear() - this.year > 50;
  }
  updateYear(newYear) {
    return `Publication year updated to ${(this.year = newYear)}`;
  }
  changeGenre(newGenre) {
    return `Genre updated to ${(this.genre = newGenre)}`;
  }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");

console.log(book1.getSummary());
console.log(book1.isClassic());
console.log(book1.updateYear(1969));
console.log(book1.getSummary());
console.log(book1.changeGenre("Non Fiction"));
console.log(book1.getSummary());

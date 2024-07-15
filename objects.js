// let myBook = {
//     title:"The Story of Tau",
//     author:"Will Alex",
//     numberOfPages: 250,
//     isAvailable:true
// };

// let bookTitle = myBook.title;
// let bookPages = myBook.numberOfPages;

// console.log(bookTitle);
// console.log(bookPages);

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages
    }
}

let myBook = new Book ("The Story of Tau", "Will Alex", 250);

console.log(myBook);
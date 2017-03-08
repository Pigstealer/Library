
var Lib = function () {
 };

 Lib.prototype.myBookArray = new Array();

// Functions to manipulate library below here
Lib.prototype.addBook = function(book){
  if (this.myBookArray.length > 0) {
    for (var i = 0; i < this.myBookArray.length; i++) {
      if (this.myBookArray[i].title.indexOf(book.title) < 0){
        this.myBookArray.push(book);
        return true;
      } else
      {
      return false;
      };
    };
  } else
  {
    this.myBookArray.push(book);
    return true;
  };
};

Lib.prototype.removeBookByTitle = function (bookTitle) {
  for (i=0; i<this.myBookArray.length; i++) {
      if (this.myBookArray[i].title == bookTitle) {
      var indexNum = i;
    } else
    {
      return false;
    }
  };
    this.myBookArray.splice(indexNum, 1);
    return true;
};

Lib.prototype.removeBookByAuthor = function (bookAuthor) {
  for (i=0; i<this.myBookArray.length; i++) {
    if (this.myBookArray[i].author == bookAuthor) {
    var indexNum = i;
    }
    else
    {
      return false;
    }
  };
    this.myBookArray.splice(indexNum, 1);
    return true;
};

Lib.prototype.getRandomBook = function () {
  // Return a random number between 1 and 10:
  // Math.floor((Math.random() * 10) + 1);
  var indexValue = Math.floor((Math.random() * this.myBookArray.length));
  if (this.myBookArray.length == 0) {
    return null;}
  else
  {
    return this.myBookArray[indexValue];
  };
};
// not to spec
Lib.prototype.getBookByTitle = function (bookTitle) {
  for (i=0; i<this.myBookArray.length; i++) {
    var bookIndex = this.myBookArray[i].title;
      if (bookIndex == bookTitle) {
      var indexNum = i;
      };
  };
    return this.myBookArray[indexNum];
};
//not to spec
Lib.prototype.getBookByAuthor = function (bookAuthor) {
  for (i=0; i<this.myBookArray.length; i++) {
      if (this.myBookArray[i].author == bookAuthor) {
      var indexNum = i;
      };
  };
     return this.myBookArray[indexNum];
};

Lib.prototype.addBooks = function (books) {
  var bookCount = 0;
  for (i=0; i<books.length; i++) {
    this.myBookArray.push(books[i]);
  bookCount++;
  };
  return bookCount;
};

Lib.prototype.getAuthors = function () {
  var authorArray = new Array();
  if (this.myBookArray.length == 0){
    return authorArray;
  }
  else
  {
    for (i=0; i<this.myBookArray.length; i++) {
      if (authorArray.indexOf(this.myBookArray[i].author) < 0){
        authorArray.push(this.myBookArray[i].author);
      };
    };
    return authorArray;
  };
};

Lib.prototype.getRandomAuthorName = function () {
  var indexValue = Math.floor((Math.random() * this.myBookArray.length));
  if (this.myBookArray.length == 0) {
    return null;}
  else
  {
    var authorName = this.myBookArray[indexValue].author;
    return authorName;
  };
};

// Functions to manipulate library above here
// Function
function Book(oData){
   this.title = oData.title;
   this.author = oData.author;
   this.numberOfPages = oData.numberOfPages;
   this.publishDate = oData.publishDate;
};

// $(function)(){      // document ready jquery  -  needed if moved to the top
// Instance
//  vv needed if moved to the top
//window.book1 = new Book({title: "title1", author: "author1", numberOfPages: 309, publishDate: "September 8, 1981"});
var book1 = new Book({title: "title1", author: "author1", numberOfPages: 309, publishDate: "September 8, 1981"});
var book2 = new Book({title: "title2", author: "author2", numberOfPages: 291, publishDate: "December 15, 1991"});
var book3 = new Book({title: "title3", author: "author3", numberOfPages: 431, publishDate: "October 20, 1989"});
var book4 = new Book({title: "title4", author: "author4", numberOfPages: 374, publishDate: "November 14, 1983"});
var book5 = new Book({title: "title5", author: "author4", numberOfPages: 374, publishDate: "November 14, 1983"});
// console.log(this.book1,this.book2);
var library1 = new Lib();
var newBookArray = new Array(book1, book2, book3);
// });

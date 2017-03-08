 // $(function initialCreate () {
    //  this.gMyBook1 = new BookInfo({ title: "book11", author: "author1", numberOfPages: 1, publishDate: "11/11/1111" });
    //  this.gMyBook2 = new BookInfo({ title: "book22", author: "author2", numberOfPages: 2, publishDate: "22/22/2222" });
   var gbook1 = new BookInfo({ title: "book11", author: "author1", numberOfPages: 111, publishDate: "11/11/1111"});
   var gbook2 = new BookInfo({ title: "book22", author: "author2", numberOfPages: 222, publishDate: "22/22/2222"});
   var gbook3 = new BookInfo({ title: "book33", author: "author3", numberOfPages: 333, publishDate: "33/33/3333"});
   var gbook4 = new BookInfo({ title: "book44", author: "author4", numberOfPages: 444, publishDate: "44/44/4444"});
  //  this.library1 = new Lib();
  //  console.log(gbook1);
  //  console.log(this.library1);
 // });

// var BookInfo = function(obj)

 function BookInfo(oData) {
    this.title = oData.title;
    // console.log(oData.title);
    this.author = oData.author;
    this.page = oData.numberOfPages;
    this.date = oData.publishDate;

 return this;
// console.log(this.title);
 }
 var myBookArray = [gbook1, gbook2, gbook3];

  // var Lib = function () {
// ////function bookList(oData) {
 // ////BookInfo.prototype.myBookArray =  new Array();
    //////  this.myBookArray =  new Array();
    //  this.myBookArray.push(this.gbook1);
    //  this.myBookArray.push(this.gbook2);
    //  this.myBookArray.push(this.gbook3);
    //  console.log(this.gbook1);
    // console.log(this.myBookArray);
    // console.log(this.myBookArray[0].title);
 // };

    // this.myBookArray = new Array(oData); //[{title:Programming, Author:Someone, numPages: 40, date: dateObject}]

 BookInfo.prototype.addBook = function () {
    //  console.log(window.library1.myBookArray[2].title);
    // >>this.myBookArray.push(window.gbook4);
    myBookArray.push(window.gbook4);
    //Use below chunk VVVVVVVVVVVV
//  Lib.prototype.addBook = function () {
    // myBookArray.push(glib);
    // console.log(window.library1.myBookArray[3].title);
      console.log(myBookArray);
 };
//stop here

// Lib.prototype.removeBookByTitle = function (title) {
    //loop through array elements matching on title and remove
    BookInfo.prototype.removeBookByTitle = function (bookTitle) {
      // console.log(window.library1.myBookArray[2].title);
      for (i=0; i<window.library1.myBookArray.length; i++) {
        var bookIndex = window.library1.myBookArray[i].title;
        // if (window.library1.myBookArray[i].title: == bookTitle) {
        // console.log(bookIndex);
        // console.log(bookTitle);
          if (bookIndex == bookTitle) {

          var indexNum = i;
        };
      };
      // var indexNum = window.library1.myBookArray.indexOf(bookTitle, 0);
        // console.log(window.library1.myBookArray[2].title);
        window.library1.myBookArray.splice(indexNum, 1);
        // console.log(indexNum);
      //  window.library1.myBookArray.push(window.gbook4);
      //  console.log(window.library1.myBookArray);
    };
// };

// Lib.prototype.removeBookByAuthor = function (author) {
    //same as above except match on author
    BookInfo.prototype.removeBookByAuthor = function (bookAuthor) {
    for (i=0; i<window.library1.myBookArray.length; i++) {
      var bookIndex = window.library1.myBookArray[i].author;

        if (bookIndex == bookAuthor) {

        var indexNum = i;
      };
    };
      window.library1.myBookArray.splice(indexNum, 1);
     console.log(window.library1.myBookArray);
  };
// };

// Lib.prototype.getRandomBook = function () {
    // generate random number and index into array and delete
  BookInfo.prototype.getRandomBook = function (bookAuthor) {

    // Return a random number between 1 and 10:
    // Math.floor((Math.random() * 10) + 1);
    var indexValue = Math.floor((Math.random() * window.library1.myBookArray.length));
    console.log(window.library1.myBookArray[indexValue]);
};

// Lib.prototype.getBookByTitle = function (title) {
    // loop through library and return the book that matches the title

// };

// Lib.prototype.getBooksByAuthor = function (author) {
    // loop through and display all books by matching author

// };

// Lib.prototype.addBooks = function (books) {
    // stick books at the end of the array
// };

// Lib.prototype.getAuthors = function (authors) {
    // create a list of authors by searching the array

// };

// Lib.prototype.getRandomAuthorName = function () {
//Jump into the array in a random place and return the authors name
// };
//End of project ===========================================


// var storeBook = function () {
//     if (typeof (Storage) !== "underfined") {
//         //store data for one session
//         sessionStorage.setItem()
//     } else {
//         return false;
//     }
// }

// var retrieveBook = function () {
//     if (typeof (Storage) !== "underfined") {
//         //store data for one session
//         document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//     } else {
//         return false;
//     }
// }





// console.log(book1);
//
//
//constructor
// function newBook (title, author, downloadable,soldout ){

	//properties
	// this.title = title;
	// this.author = author;

	//events
	// this.downloadable = downloadable ;
	// this.soldout = soldout;

	//methods
	// this.opens=function(){
		//opens to table of contents
		// alert("page1");
	// }

// }

//declaring variables and assigning new instances of our newBook class
// var book1 = new newBook("The Giver","Erik R.", true, false);
// var book2 = new newBook("Harry Potter","J.K R.", false, false);

// console.log(book1,book2);

// uses open method
// book1.opens()

// Different stuff ====================================
//

// var myBook = new BookInfo(title, author, page, date);

//  Basics below here
//
// function BookInfo(oDate) {
        //    this.title = oData.title;
        //    this.author = oData.author;
        //    this.page = oData.page;
        //    this.date = oData.date;

        ////    console.log(this);
        // return this;
    //    }
//                      Creates new object
    // var firstbook = new Book({title: "Cujo", author: "Steve", page: 8, date: "dateobject"})
//
//===========================try and make it look ike this================================================
// function BookInfo (title){};
// constructor where we set our global to scope of Libary
// var Lib = function() { //
// this.mybookarray = new array(); //title:programing, Author: John DOe, NumPages:50, date:
// this.mybookArray = new Array ();
// }
// var bookLib = function (newBook){
// };
// Lib.prototype.addBook = function(book) {//accepts back object you create
//logic
// };
// Lib.prototype.removeBookByTitle=function(title){//accepts string
// };
// Lib.prototype.removeBookByAuthor= function(authorName) {//accepts string
// };
// Lib.prototype.getRandomBook= function(){
// };
// Lib.prototype.getBookByTitle = function(title) {//accepts string
// };
// Lib.prototype.getBooksByAuthor= function (authorName) {//accepts string
// };
// Lib.prototype.addBooks = function (books) {

// };
// Lib.prototype.getAuthors = function() {

// }.
// Lib.prototype.getRandomAuthorName = function() {

// };
// this.functionBook =
//declaring variables and assigning new instances of our newBook class
// var book1 = horror horrorBook("Cujo","Stephen King", "309", "September 8, 1981");
// var book2 = horror horrorBook("Pet Cemetary","Stephen King", "291", "December 15, 1991");
// var book2 = horror horrorBook("The Dark Half","Stephen King", "431", "October 20, 1989");
// var book2 = horror horrorBook("On Writing","Stephen King", "374", "November 14, 1983");
// console.log(book1,book2,);
// uses open method
// book1.opens()
// Function
// function Book(oDataJSON){
// assign variable that is undefined = making it a form
  //  this.title = oDataJSON.title;
  //  this.author = oDataJSON.author;
// this.numberOfPages = oDataJSON.numberOfPages;
// this.publishDate = oDataJSON.publishDate;
// this.testkey = oDataJSON.testkey;
// return this;
// };
// Instance
// var firstbook = new Book({title: "Cujo", author: "Stephen King", numberOfPages: 309, publishDate: "September 8, 1981", testkey: "testscript"});
// var secondbook = new Book({title: "On Writing", author: "Stephen King", numberOfPages: 291, publishDate: "December 15, 1991",testkey: "testscript"});
// var thirdbook= new Book({title: "The Dark Half", author: "Stephen King", numberOfPages: 431, publishDate: "October 20, 1989",testkey: "testscript"});
// var fourthbook= new Book({title: "Pet Cemetary", author: "Stephen King", numberOfPages: 374, publishDate: "November 14, 1983",testkey: "testscript"});
// console.log(this.firstbook,this.secondbook);

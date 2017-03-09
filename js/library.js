//Book Class
function Book(oData) {
	this.title= oData.title,
	this.author= oData.author,
	this.numPages= oData.pages,
	this.publishDate= oData.publishDate
}
//instances of Book
var book1 = new Book({title:"Eloquent JS", author: "John Doe", pages:300, publishDate:"03/20/2000"});
var book2 = new Book({title:"JS The Great Parts", author: "John Doe2", pages:100, publishDate:"07/25/2002"});
var book3 = new Book({title:"JS the Weird Parts", author: "John Doe3", pages:245, publishDate:"01/15/1999"});
var book4 = new Book({title:"JS for Dummies", author: "John Doe4", pages:458, publishDate:"10/28/2001"});



//Library Class
var Lib = function(){

};

Lib.prototype.arr1=[];

Lib.prototype.addBook = function(newBook){
	this.arr1.push(newBook);
	return this.arr1;
};

Lib.prototype.removeBookByTitle = function(str){

};

//instance of Library Class
var gLib = new Lib();


other way to do it
array[other.array.indexOf(variable)]


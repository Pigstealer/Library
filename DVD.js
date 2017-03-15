var Lib = function () {
};



Lib.prototype.init = function(){
  this.myDVDArray = this.retrieveLocal();
  console.log(this.myDVDArray);
};



Lib.prototype.localStorage = function(){
      if (typeof (Storage) !== "undefined"){
        // localStorage["collection"] = JSON.stringify(this.myDVDArray);
        localStorage.setItem('collection', JSON.stringify(this.myDVDArray));
      }
      else {
        return false;
      }
      };

Lib.prototype.retrieveLocal = function(){
  if (typeof (Storage) !== "undefined") {
    // return JSON.parse(localStorage.getItem("collection"));
    var retrievedObject = localStorage.getItem('collection');
    // console.log(retrievedObject);
    if (retrievedObject != null){
      console.log(this.myDVDArray);
      this.myDVDArray = JSON.parse(retrievedObject);
    };
    

  }
    else {
    return false;
};
};

//=====================================Check into this stuff============================
// Storage.prototype.setObject = function(key, value) {
//     this.setItem(key, JSON.stringify(value));
// }

// Storage.prototype.getObject = function(key) {
//     var value = this.getItem(key);
//     return value && JSON.parse(value);
// }
// //===================================================================================
// var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// // Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));



(function(){
  window.library = new Lib();
  window.library.init();
})();


Lib.prototype.myDVDArray = new Array();

// var collection = new newBook()

// function newBook(title, author, numberOfPages, Published) {
//     //properties
//     this.title = title;
//     this.author = author;
//     this.numberOfPages = numberOfPages;
//     this.Published = Published;
// };

// $(function(){
//   window.glibrary = new library();
//   window.glibrary.init();
// });
// var library = function () {
// }; //array
// library.prototype.init = function(){
//   this._bindEvents();
// };
// library.prototype._bindEvents = function(){
//   $("#add-book").on("click", $.proxy(this._addBook, this));
// };
// library.prototype._myBookArray = new Array();



//



 // Lib.prototype.myDVDArray = new Array();


$("#submitButton0").on("click", function(){
    // alert("The button was clicked.");
    Lib.prototype.validateInput0();
});

$("#submitButton1").on("click", function(){
    // alert("The button was clicked.");
    Lib.prototype.validateInput0();
    Lib.prototype.validateInput1();
});

$("#submitButton2").on("click", function(){
    // alert("The button2 was clicked.");
    Lib.prototype.validateInput0();
    Lib.prototype.validateInput1();
    Lib.prototype.validateInput2();
});

Lib.prototype.validateInput0 = function(){
  var newTitle = $("#title0").val();
  var newStudio = $("#studio0").val();
  var newRunningTime = $("#runningtime0").val();
  var newReleaseYear = $("#releaseyear0").val();
  if (newTitle && newStudio && newRunningTime && newReleaseYear){
    // console.log(newTitle, newStudio, newRunningTime, newReleaseYear + " are valid");
    // var DVD1 = new Lib.prototype.DVD({title: newTitle, studio: newStudio, runningTime: newRunningTime,releaseYear:  newReleaseYear, dateAdded: window.fdate});
     //     VV should have worked
    // Lib.prototype.DVD1 = new Lib.prototype.DVD({title: newTitle, studio: newStudio, runningTime: newRunningTime,releaseYear:  newReleaseYear, dateAdded: window.fdate});
    // console.log(Lib.DVD1);
    Lib.prototype.createDVD(newTitle, newStudio, newRunningTime, newReleaseYear);
    
  } 
  else{
    alert("Please fill out all fields");

  };
};

Lib.prototype.validateInput1 = function(){
  var newTitle = $("#title1").val();
  var newStudio = $("#studio1").val();
  var newRunningTime = $("#runningtime1").val();
  var newReleaseYear = $("#releaseyear1").val();
  if (newTitle && newStudio && newRunningTime && newReleaseYear){
    // console.log(newTitle, newStudio, newRunningTime, newReleaseYear + " are valid");
    // var DVD1 = new Lib.prototype.DVD({title: newTitle, studio: newStudio, runningTime: newRunningTime,releaseYear:  newReleaseYear, dateAdded: window.fdate});
     //     VV should have worked
    // Lib.prototype.DVD1 = new Lib.prototype.DVD({title: newTitle, studio: newStudio, runningTime: newRunningTime,releaseYear:  newReleaseYear, dateAdded: window.fdate});
    // console.log(Lib.DVD1);
    Lib.prototype.createDVD(newTitle, newStudio, newRunningTime, newReleaseYear);
    
  } 
  else{
    alert("Please fill out all fields");

  };
};

Lib.prototype.validateInput2 = function(){
  var newTitle = $("#title2").val();
  var newStudio = $("#studio2").val();
  var newRunningTime = $("#runningtime2").val();
  var newReleaseYear = $("#releaseyear2").val();
  if (newTitle && newStudio && newRunningTime && newReleaseYear){
    // console.log(newTitle, newStudio, newRunningTime, newReleaseYear + " are valid");
    // var DVD1 = new Lib.prototype.DVD({title: newTitle, studio: newStudio, runningTime: newRunningTime,releaseYear:  newReleaseYear, dateAdded: window.fdate});
     //     VV should have worked
    // Lib.prototype.DVD1 = new Lib.prototype.DVD({title: newTitle, studio: newStudio, runningTime: newRunningTime,releaseYear:  newReleaseYear, dateAdded: window.fdate});
    // console.log(Lib.DVD1);
    Lib.prototype.createDVD(newTitle, newStudio, newRunningTime, newReleaseYear);
    
  } 
  else{
    alert("Please fill out all fields");

  };
};
Lib.prototype.createDVD = function(newTitle, newStudio, newRunningTime, newReleaseYear){
  Lib.prototype.DVD1 = new Lib.prototype.DVD({title: newTitle, studio: newStudio, runningTime: newRunningTime,releaseYear:  newReleaseYear, dateAdded: Lib.prototype.fdate});

  // console.log("Creating DVD " + library.DVD1);
  library.addDVD(library.DVD1);
};


Lib.prototype.DVD = function(oData){
  // console.log("Constructor " + oData.title);
  // console.log("Local storage " + library.isLocalStorageAvailable)
  var date = new Date();
    this.title = oData.title;
    this.studio = oData.studio;
    this.runningTime = oData.runningTime;
    this.releaseYear = oData.releaseYear;
    this.dateAdded = date.toDateString();
};



// var DVD1 = new DVD({title: "Zelig", studio: "Metro Goldwyn Mayor", runningTime: 79, releaseYear: "1983", dateAdded: fDate});
// Functions to manipulate library below here

//takes object name as input (DVD1) adds to array
Lib.prototype.addDVD = function(DVD1){
  if (this.myDVDArray.length > 0) {
    for (i=0; i<this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].title.indexOf(library.DVD1.title) >= 0){
        document.getElementById("content").innerHTML = ("This DVD has not been added to your collection");
        return false;        
      };
    };
    this.myDVDArray.push(library.DVD1);
    document.getElementById("content").innerHTML = ("You have added: " + library.DVD1.title + " to your collection");
    this.localStorage();
    this.displayArray();
    return true;
  } else
  {
    this.myDVDArray.push(library.DVD1);
    document.getElementById("content").innerHTML = ("You have added: " + library.DVD1.title + " to your collection");
    this.localStorage();
    this.displayArray();
    return true;
  };
};





//Local storage
// //Lib.prototype.storeBook = function() {
//   if (typeof (Storage)) !== "undefined")) {
// localStorage["collection"] = JSON.stringify(this.myBookArray);

// }
// else {
//   return false;
// }
// }






$("#submitButtonRemoveTitle").on("click", function(){
    // alert("The button was clicked.");
    var removeTitle = $("#removeTitle").val();
    if (removeTitle){
    } 
    else{
    alert("Please enter a title")};
    Lib.prototype.removeDVDByTitle(removeTitle);
});



//Takes DVD title as input and removes it from array
Lib.prototype.removeDVDByTitle = function (dvdTitle) { 
  // console.log(dvdTitle);
  for (i=0; i<this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].title == dvdTitle) {
        this.myDVDArray.splice(i, 1);
        document.getElementById("content").innerHTML = ("DVD: " + dvdTitle +" has been removed from your collection");
          this.localStorage();
      return true;
    };
  };
  return false;
};

$("#submitButtonRemoveStudio").on("click", function(){
    // alert("The button was clicked.");
    var removeStudio = $("#removeStudio").val();
    if (removeStudio){
    } 
    else{
    alert("Please enter a studio name")};
    Lib.prototype.removeDVDByStudio(removeStudio);
});

//Takes studio name as input and removes the object from the array
Lib.prototype.removeDVDByStudio = function (DVDStudio) {    
  for (i=0; i<this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].studio == DVDStudio) {
      this.myDVDArray.splice(i, 1);
      document.getElementById("content").innerHTML = ("DVD: " + DVDStudio +" has been removed from your collection");
        this.localStorage();
        this.displayArray();
      return true;
    };
  };
  console.log("False");
  return false;
};


$("#submitButtonRandomDVD").on("click", function(){
    // alert("The button was clicked.");

    Lib.prototype.getRandomDVD();
});
// $(".content").html(msg + xhr.status + " " + xhr.statusText);

//Takes no input and returns a random DVD
Lib.prototype.getRandomDVD = function () {      
  // Return a random number between 1 and 10:
  // Math.floor((Math.random() * 10) + 1);
  var indexValue = Math.floor((Math.random() * this.myDVDArray.length));
  if (this.myDVDArray.length == 0) {
    return null;}
  else
  {
    // $(".content").html(this.myDVDArray[indexValue]);
    document.getElementById("content").innerHTML = (this.myDVDArray[indexValue].title);
    return this.myDVDArray[indexValue];
  };
};


// $("#submitButtonGetByTitle").on("click", function(){
//     // alert("The button was clicked.");
//     var getTitle = $("#getByTitle1").val();
//     Lib.prototype.getDVDByTitle(getTitle);
// });
//Takes partial title as input and returns a list of DVD titles
Lib.prototype.getDVDByTitle1 = function (DVDTitle) {    
  var titleArray = new Array();
  for (i=0; i<this.myDVDArray.length; i++) {
    var DVDIndex = this.myDVDArray[i].title.toLowerCase();
    var searchString = DVDTitle.toLowerCase();
    if (DVDIndex.search(searchString) >= 0){
      if (titleArray.indexOf(this.myDVDArray[i].title) < 0){
        titleArray.push(this.myDVDArray[i].title);
      };
    };
  };
  // console.log("Got title " + this.titleArray[])
 // $(".content").html(this.titleArray);
   return titleArray;
};

$("#submitButtonGetByTitle").on("click", function(){
    // alert("The button was clicked.");
    var getTitle = $("#getByTitle").val();
    if (getTitle){
    } 
    else{
    alert("Please enter a DVD title")};
    Lib.prototype.getDVDByTitle(getTitle);
});
//not to spec
//Takes full title as input and returns DVD information
Lib.prototype.getDVDByTitle = function (DVDTitle) {
  var indexNum;
  for (i=0; i<this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].title == DVDTitle) {
    indexNum = i;
    };
  };
  var message1 = (this.myDVDArray[indexNum].title + " " + this.myDVDArray[indexNum].studio);
  var message2 = (this.myDVDArray[indexNum].runningTime + " " + this.myDVDArray[indexNum].releaseYear);
  document.getElementById("content").innerHTML = (message1 + " " + message2 + " " + this.myDVDArray[indexNum].dateAdded);
  // $("#content").html(this.myDVDArray[indexNum]);
  return this.myDVDArray[indexNum];
};

//Takes partial studio name as input and returns a list of studios
Lib.prototype.getDVDByStudio1 = function (DVDStudio) {    
  var studioArray = new Array();
  for (i=0; i<this.myDVDArray.length; i++) {
    var DVDIndex = this.myDVDArray[i].studio.toLowerCase();
    var searchString = DVDStudio.toLowerCase();
    if (DVDIndex.search(searchString) >= 0){
      if (studioArray.indexOf(this.myDVDArray[i].studio) < 0){
        studioArray.push(this.myDVDArray[i].studio);
      };
    };
  };

  return studioArray;
 };


$("#submitButtonGetByStudio").on("click", function(){
    // alert("The button was clicked.");
    var getStudio = $("#getByStudio").val();
    if (getStudio){
    } 
    else{
    alert("Please enter a studio")};
    Lib.prototype.getDVDByStudio(getStudio);
});
//not to spec
//Takes full studio name as input and returns DVD information
Lib.prototype.getDVDByStudio = function (DVDStudio) {
  var indexNum; 
  for (i=0; i<this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].studio == DVDStudio) {
      indexNum = i;
    };
  };
  var message1 = (this.myDVDArray[indexNum].title + " " + this.myDVDArray[indexNum].studio);
  var message2 = (this.myDVDArray[indexNum].runningTime + " " + this.myDVDArray[indexNum].releaseYear);
  document.getElementById("content").innerHTML = (message1 + " " + message2 + " " + this.myDVDArray[indexNum].dateAdded);
  return this.myDVDArray[indexNum];
};

//Not to spec
//Takes array name of new DVD array and adds to library without checking for dups used during testing
Lib.prototype.addDVDsOld = function (DVDs) {    
  var DVDCount = 0;
  for (i=0; i<DVDs.length; i++) {
    this.myDVDArray.push(DVDs[i]);
    DVDCount++;
    };
  return DVDCount;
};

//Takes array name of new DVD array and adds to library skipping duplicates
Lib.prototype.addDVDs = function (DVDs) {   
  var DVDCount = 0;
  var addIt = true;
  for (i=0; i<DVDs.length; i++) {
    addIt = true;
      for (j=0; j<this.myDVDArray.length; j++) {
        if (DVDs[i] == this.myDVDArray[j]) {
          addIt = false;
        };
      };
      if (addIt == true) {
        this.myDVDArray.push(DVDs[i]);
        DVDCount++;
      };
    };
    console.log("Added some DVDS");
        document.getElementById("content").innerHTML = ("You have added " + DVDCount + " DVDs");
  return DVDCount;
};




$("#submitButtonGetStudios").on("click", function(){
    // alert("The button was clicked.");
    // var getStudio = $("#getByStudio").val();
    Lib.prototype.getStudios();
});
//Takes no input and returns a list of studios from the library
Lib.prototype.getStudios = function () {  
  var studioArray = new Array();
  if (this.myDVDArray.length == 0){
    document.getElementById("content").innerHTML = ("Sorry, no studios found. Are there DVDs in the collection?");
    return studioArray;
  }
  else
  {
    for (i=0; i<this.myDVDArray.length; i++) {
      if (studioArray.indexOf(this.myDVDArray[i].studio) < 0){
        studioArray.push(this.myDVDArray[i].studio);
      };
    };
    library.displayArray(studioArray);
    return studioArray;
  };
};



$("#submitButtonRandomStudio").on("click", function(){
    // alert("The button was clicked.");
    // var getStudio = $("#getByStudio").val();
    Lib.prototype.getRandomStudio();

});
//Takes no input and returns the info on a random DVD from the library
Lib.prototype.getRandomStudio = function () {   
  var indexValue = Math.floor((Math.random() * this.myDVDArray.length));
  if (this.myDVDArray.length == 0) {
    return null;}
  else
  {
    var studioName = this.myDVDArray[indexValue].studio;
    document.getElementById("content").innerHTML = (this.myDVDArray[indexValue].studio);
    return studioName;
  };
};

//Takes < or > operator and an integer as input and returns a list of DVDs meeting the criteria

// Found this looking for that function Kyle spoke of but I don't understand it so I will have to 
//    study up on it before I put it in.
// var math_it_up = {
    // '+': function (x, y) { return x + y },
    // '-': function (x, y) { return x - y }
// }​​​​​​​;

// math_it_up['+'](1, 2) == 3;

Lib.prototype.getDVDsByRunningTime = function (symbol, time) {   
  var byTimeArray = new Array();
  if (symbol == "<") {
    for (i=0; i<this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].runningTime < time) {
        byTimeArray.push(this.myDVDArray[i].title);
      };
    };
  };
  if (symbol == ">") {
    for (i=0; i<this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].runningTime > time) {
        byTimeArray.push(this.myDVDArray[i].title);
      };
    };
  };
  library.displayArray(byTimeArray);
  return byTimeArray;
};

Lib.prototype.displayArray = function(inArray){
//==========================================================
$( "#displayTable" ).empty();
$.each(this.myDVDArray, function(index, val){ 
  $( "#displayTable" ).append(
  "<tr>",
  "<td> " + val.title + "</td>",
  "<td> " + val.studio + "</td>",
  "<td> " + val.runningTime + "</td>",
  "<td> " + val.releaseYear + "</td>",
  "</tr>"
  )
});
};

//========================================================================
  // return this.myDVDArray[indexNum];


// Functions to manipulate library above here

// function DVD(oData){
//     this.title = oData.title;
//     this.studio = oData.studio;
//     this.runningTime = oData.runningTime;
//     this.releaseYear = oData.releaseYear;
//     this.dateAdded = oData.dateAdded;
// };


// $(function)(){      // document ready jquery  -  needed if moved to the top
// Instance
//  vv needed if moved to the top
//window.DVD1 = new DVD({title: "title1", studio: "studio1", runningTime: 309, releaseYear: "September 8, 1981"});
// var DVD1 = new DVD({title: "Zelig", studio: "Metro Goldwyn Mayor", runningTime: 79, releaseYear: "1983", dateAdded: fDate});
// var DVD2 = new DVD({title: "Being John Malkovich", studio: "Universal Studios", runningTime: 113, releaseYear: "1999", dateAdded: fDate});
// var DVD3 = new DVD({title: "Half Baked", studio: "Universal Studios", runningTime: 83, releaseYear: "1998", dateAdded: fDate});
// var DVD4 = new DVD({title: "Logans Run", studio: "Warner Brothers", runningTime: 118, releaseYear: "1976", dateAdded: fDate});
// var DVD5 = new DVD({title: "Nuns on the Run", studio: "20th Century Fox", runningTime: 92, releaseYear: "1990", dateAdded: fDate});
// var DVD6 = new DVD({title: "Twelve Monkeys", studio: "Universal Studios", runningTime: 130, releaseYear: "1995", dateAdded: fDate});
// var DVD7 = new DVD({title: "Reel Horror", studio: "Peacock Films", runningTime: 1, releaseYear: "1985", dateAdded: fDate});
// var DVD8 = new DVD({title: "Young Frankenstein", studio: "20th Century Fox", runningTime: 106, releaseYear: "1974", dateAdded: fDate});
// var DVD9 = new DVD({title: "Evolution", studio: "Dreamworks Pictures", runningTime: 102, releaseYear: "2001", dateAdded: fDate});

// var library1 = new Lib();

// var newDVDArray = new Array({title: "Cube", studio: "Lionsgate", runningTime: 80, releaseYear: "1997", dateAdded: fDate},
//  {title: "Kick-Ass", studio: "Lionsgate", runningTime: 117, releaseYear: "2010", dateAdded: fDate},
//   {title: "Spaceballs", studio: "Metro Goldwyn Mayor", runningTime: 96, releaseYear: "1987", dateAdded: fDate}, 
//   {title: "Galaxy Quest", studio: "Dreamworks Pictures", runningTime: 102, releaseYear: "1999", dateAdded: fDate}, 
//   {title: "Dr Strangelove", studio: "Columbia Pictures", runningTime: 95, releaseYear: "1964", dateAdded: fDate}, 
//   {title: "Tank Girl", studio: "United Artists", runningTime: 103, releaseYear: "1995", dateAdded: fDate}, 
//   {title: "Sin City", studio: "Troublemaker Studios", runningTime: 124, releaseYear: "2005", dateAdded: fDate}, 
//   {title: "Mystery Men", studio: "Universal Studios", runningTime: 122, releaseYear: "1999", dateAdded: fDate});

// });


//Local storage
// //Lib.prototype.storeBook = function() {
//   if (typeof (Storage)) !== "undefined")) {
// localStorage["collection"] = JSON.stringify(this.myBookArray);

// }
// else {
//   return false;
// }
// }

// //Lib.prototype.retrieveBook = function(){
//   if (typeof (Storage)) !== "undefined")) {
// return JSON.parse(localStorage.getItem("collection"))}
// }
// else {
//   return false;
// }
// }

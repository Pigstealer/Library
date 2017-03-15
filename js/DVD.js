
$(function () {
  window.library = new Lib();
  window.library.init();
});

var Lib = function () {
  this.myDVDArray = this.retrieveLocal();
  this.displayArray();
};

Lib.prototype.init = function () {
  this._bindEvents();
  // this.myDVDArray = new Array();
};

Lib.prototype._bindEvents = function () {
  $("#submitButton0").on("click", $.proxy (this.validateInput0,this));
  $("#submitButton1").on("click", $.proxy (this.validateInput0,this));
  $("#submitButton1").on("click", $.proxy (this.validateInput1,this));
  $("#submitButton2").on("click", $.proxy (this.validateInput0,this));
  $("#submitButton2").on("click", $.proxy (this.validateInput1,this));
  $("#submitButton2").on("click", $.proxy (this.validateInput2,this));
  $("#submitButtonRemoveTitle").on("click", $.proxy (this.removeDVDByTitle,this));
  $("#submitButtonRemoveStudio").on("click", $.proxy (this.removeDVDByStudio,this));
  $("#submitButtonGetByStudio").on("click", $.proxy (this.getDVDByStudio,this));
  $("#submitButtonRandomDVD").on("click", $.proxy (this.getRandomDVD,this));
  $("#submitButtonGetByTitle").on("click", $.proxy (this.getDVDByTitle,this));
  $("#submitButtonGetStudios").on("click", $.proxy (this.getStudios,this));
  $("#submitButtonRandomStudio").on("click", $.proxy (this.getRandomStudio,this));
};

// Lib.prototype.myDVDArray = new Array();

Lib.prototype.retrieveLocal = function () {
  if (typeof (Storage) !== "undefined") {
    var retrievedObject = localStorage.getItem('collection');
    if (retrievedObject != null) {
      return JSON.parse(retrievedObject);
    };
  }
  else {
    return false;
  };
};

Lib.prototype.localStorage = function () {
  if (typeof (Storage) !== "undefined") {
    localStorage.setItem('collection', JSON.stringify(this.myDVDArray));
  }
  else {
    return false;
  }
};

Lib.prototype.validateInput0 = function () {
  var newTitle = $("#title0").val();
  var newStudio = $("#studio0").val();
  var newRunningTime = $("#runningtime0").val();
  var newReleaseYear = $("#releaseyear0").val();
  if (newTitle && newStudio && newRunningTime && newReleaseYear) {
    Lib.prototype.createDVD(newTitle, newStudio, newRunningTime, newReleaseYear);
  }
  else {
    alert("Please fill out all fields");
  };
};

Lib.prototype.validateInput1 = function () {
  var newTitle = $("#title1").val();
  var newStudio = $("#studio1").val();
  var newRunningTime = $("#runningtime1").val();
  var newReleaseYear = $("#releaseyear1").val();
  if (newTitle && newStudio && newRunningTime && newReleaseYear) {
    Lib.prototype.createDVD(newTitle, newStudio, newRunningTime, newReleaseYear);
  }
  else {
    alert("Please fill out all fields");
  };
};

Lib.prototype.validateInput2 = function () {
  var newTitle = $("#title2").val();
  var newStudio = $("#studio2").val();
  var newRunningTime = $("#runningtime2").val();
  var newReleaseYear = $("#releaseyear2").val();
  if (newTitle && newStudio && newRunningTime && newReleaseYear) {
    Lib.prototype.createDVD(newTitle, newStudio, newRunningTime, newReleaseYear);
  }
  else {
    alert("Please fill out all fields");
  };
};

Lib.prototype.createDVD = function (newTitle, newStudio, newRunningTime, newReleaseYear) {
  Lib.prototype.DVD1 = new Lib.prototype.DVD({ title: newTitle, studio: newStudio, runningTime: newRunningTime, releaseYear: newReleaseYear, dateAdded: Lib.prototype.fdate });
  library.addDVD(library.DVD1);
};

Lib.prototype.DVD = function (oData) {
  var date = new Date();
  this.title = oData.title;
  this.studio = oData.studio;
  this.runningTime = oData.runningTime;
  this.releaseYear = oData.releaseYear;
  this.dateAdded = date.toDateString();
};

//takes object name as input (DVD1) adds to array
Lib.prototype.addDVD = function (DVD1) {
  if (this.myDVDArray.length > 0) {
    for (i = 0; i < this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].title.indexOf(library.DVD1.title) >= 0) {
        document.getElementById("content").innerHTML = ("This DVD has not been added to your collection");
        return false;
      };
    };
    this.myDVDArray.push(library.DVD1);
    document.getElementById("content").innerHTML = ("You have added: " + library.DVD1.title + " to your collection");
    this.localStorage();
    this.displayArray();
    return true;
  } else {
    this.myDVDArray.push(library.DVD1);
    document.getElementById("content").innerHTML = ("You have added: " + library.DVD1.title + " to your collection");
    this.localStorage();
    this.displayArray();
    return true;
  };
};

//Takes DVD title as input and removes it from array
Lib.prototype.removeDVDByTitle = function () {
  var removeTitle = $("#removeTitle").val();
  if (removeTitle) {
  }
  else 
  {
    alert("Please enter a title");
    return false;
  };
  for (i = 0; i < this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].title == removeTitle) {
      this.myDVDArray.splice(i, 1);
      document.getElementById("content").innerHTML = ("DVD: " + removeTitle + " has been removed from your collection");
      this.localStorage();
      this.displayArray();
      return true;
    };
  };
  return false;
};

//Takes studio name as input and removes the object from the array
Lib.prototype.removeDVDByStudio = function () {
    var removeStudio = $("#removeStudio").val();
    if (removeStudio) {
    }
    else 
    {
      alert("Please enter a studio name")
      return false
    };
  for (i = 0; i < this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].studio == removeStudio) {
      var title = this.myDVDArray[i].title;
      this.myDVDArray.splice(i, 1);
      document.getElementById("content").innerHTML = ("DVD: " + title + " has been removed from your collection");
      this.localStorage();
      this.displayArray();
      return true;
    };
  };
  return false;
};

//Takes no input and returns a random DVD
Lib.prototype.getRandomDVD = function () {
  if (this.myDVDArray.length == 0) {
    document.getElementById("content").innerHTML = ("Sorry, no DVDs found. Are there DVDs in the collection?");
  };
  var indexValue = Math.floor((Math.random() * this.myDVDArray.length));
  if (this.myDVDArray.length == 0) {
    return null;
  }
  else {
    document.getElementById("content").innerHTML = (this.myDVDArray[indexValue].title);
    return this.myDVDArray[indexValue];
  };
};

//Takes partial title as input and returns a list of DVD titles
Lib.prototype.getDVDByTitle1 = function () {
  var titleArray = new Array();
  for (i = 0; i < this.myDVDArray.length; i++) {
    var DVDIndex = this.myDVDArray[i].title.toLowerCase();
    var searchString = DVDTitle.toLowerCase();
    if (DVDIndex.search(searchString) >= 0) {
      if (titleArray.indexOf(this.myDVDArray[i].title) < 0) {
        titleArray.push(this.myDVDArray[i].title);
      };
    };
  };
  return titleArray;
};

//Takes full title as input and returns DVD information
Lib.prototype.getDVDByTitle = function (DVDTitle) {
  var getTitle = $("#getByTitle").val();
  if (getTitle) {
  }
  else 
  {
    alert("Please enter a DVD title");
    return false;
    };
  var indexNum;
  for (i = 0; i < this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].title == getTitle) {
      indexNum = i;
    };
  };
  var message1 = (this.myDVDArray[indexNum].title + " " + this.myDVDArray[indexNum].studio);
  var message2 = (this.myDVDArray[indexNum].runningTime + " " + this.myDVDArray[indexNum].releaseYear);
  document.getElementById("content").innerHTML = (message1 + " " + message2 + " " + this.myDVDArray[indexNum].dateAdded);
  return this.myDVDArray[indexNum];
};

//Takes partial studio name as input and returns a list of studios
Lib.prototype.getDVDByStudio1 = function (DVDStudio) {
  var studioArray = new Array();
  for (i = 0; i < this.myDVDArray.length; i++) {
    var DVDIndex = this.myDVDArray[i].studio.toLowerCase();
    var searchString = DVDStudio.toLowerCase();
    if (DVDIndex.search(searchString) >= 0) {
      if (studioArray.indexOf(this.myDVDArray[i].studio) < 0) {
        studioArray.push(this.myDVDArray[i].studio);
      };
    };
  };
  return studioArray;
};

//Takes full studio name as input and returns DVD information
Lib.prototype.getDVDByStudio = function (DVDStudio) {
  var getStudio = $("#getByStudio").val();
  if (getStudio) {
  }
  else 
  {
    alert("Please enter a studio");
    return false;
  };
  var indexNum;
  for (i = 0; i < this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].studio == getStudio) {
      indexNum = i;
    };
  };
  var message1 = (this.myDVDArray[indexNum].title + " " + this.myDVDArray[indexNum].studio);
  var message2 = (this.myDVDArray[indexNum].runningTime + " " + this.myDVDArray[indexNum].releaseYear);
  document.getElementById("content").innerHTML = (message1 + " " + message2 + " " + this.myDVDArray[indexNum].dateAdded);
  return this.myDVDArray[indexNum];
};

//Takes no input and returns a list of studios from the library
Lib.prototype.getStudios = function () {
  var studioArray = new Array();
  if (this.myDVDArray.length == 0) {
    document.getElementById("content").innerHTML = ("Sorry, no studios found. Are there DVDs in the collection?");
    return studioArray;
  }
  else {
    for (i = 0; i < this.myDVDArray.length; i++) {
      if (studioArray.indexOf(this.myDVDArray[i].studio) < 0) {
        studioArray.push(this.myDVDArray[i].studio);
      };
    };
    document.getElementById("content").innerHTML = ("Studios: " + studioArray);
    return true;
  };
};

//Takes no input and returns the info on a random DVD from the library
Lib.prototype.getRandomStudio = function () {
  var indexValue = Math.floor((Math.random() * this.myDVDArray.length));
  if (this.myDVDArray.length == 0) {
    document.getElementById("content").innerHTML = ("Sorry, no studios found. Are there DVDs in the collection?");
  };
  if (this.myDVDArray.length == 0) {
    return null;
  }
  else {
    var studioName = this.myDVDArray[indexValue].studio;
    document.getElementById("content").innerHTML = (this.myDVDArray[indexValue].studio);
    return studioName;
  };
};

Lib.prototype.getDVDsByRunningTime = function (symbol, time) {
  var byTimeArray = new Array();
  if (symbol == "<") {
    for (i = 0; i < this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].runningTime < time) {
        byTimeArray.push(this.myDVDArray[i].title);
      };
    };
  };
  if (symbol == ">") {
    for (i = 0; i < this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].runningTime > time) {
        byTimeArray.push(this.myDVDArray[i].title);
      };
    };
  };
  library.displayArray(byTimeArray);
  return byTimeArray;
};

Lib.prototype.displayArray = function () {
  $("#displayTable").empty();
  $.each(this.myDVDArray, function (index, val) {
    $("#displayTable").append(
      "<tr>",
      "<td> " + val.title + "</td>",
      "<td> " + val.studio + "</td>",
      "<td> " + val.runningTime + "</td>",
      "<td> " + val.releaseYear + "</td>",
      "</tr>"
    )
  });
};
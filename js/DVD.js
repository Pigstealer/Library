
var Lib = function () {
 };

 Lib.prototype.myDVDArray = new Array();

// Functions to manipulate library below here
Lib.prototype.addDVD = function(DVD){
  if (this.myDVDArray.length > 0) {
    for (var i = 0; i < this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].title.indexOf(DVD.title) < 0){
        this.myDVDArray.push(DVD);
        return true;
      } else
      {
      return false;
      };
    };
  } else
  {
    this.myDVDArray.push(DVD);
    return true;
  };
};

Lib.prototype.removeDVDByTitle = function (dvdTitle) {
  for (i=0; i<this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].title == dvdTitle) {
        this.myDVDArray.splice(i, 1);
      return true;
    };
  };
  return false;
};

Lib.prototype.removeDVDByStudio = function (DVDStudio) {
  for (i=0; i<this.myDVDArray.length; i++) {
    if (this.myDVDArray[i].studio == DVDStudio) {
      this.myDVDArray.splice(i, 1);
      return true;
    };
  };
  return false;
};

Lib.prototype.getRandomDVD = function () {
  // Return a random number between 1 and 10:
  // Math.floor((Math.random() * 10) + 1);
  var indexValue = Math.floor((Math.random() * this.myDVDArray.length));
  if (this.myDVDArray.length == 0) {
    return null;}
  else
  {
    return this.myDVDArray[indexValue];
  };
};

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

   return titleArray;
 };

//not to spec
Lib.prototype.getDVDByTitle = function (DVDTitle) {
  for (i=0; i<this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].title == DVDTitle) {
      var indexNum = i;
      };
  };
     return this.myDVDArray[indexNum];
};

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

//not to spec
Lib.prototype.getDVDByStudio = function (DVDStudio) {
  for (i=0; i<this.myDVDArray.length; i++) {
      if (this.myDVDArray[i].studio == DVDStudio) {
      var indexNum = i;
      };
  };
     return this.myDVDArray[indexNum];
};

//Not to spec
Lib.prototype.addDVDsOld = function (DVDs) {
  var DVDCount = 0;
  for (i=0; i<DVDs.length; i++) {
    this.myDVDArray.push(DVDs[i]);
    DVDCount++;
    };
  return DVDCount;
};

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
  return DVDCount;
  };

Lib.prototype.getStudios = function () {
  var studioArray = new Array();
  if (this.myDVDArray.length == 0){
    return studioArray;
  }
  else
  {
    for (i=0; i<this.myDVDArray.length; i++) {
      if (studioArray.indexOf(this.myDVDArray[i].studio) < 0){
        studioArray.push(this.myDVDArray[i].studio);
      };
    };
    return studioArray;
  };
};

Lib.prototype.getRandomStudio = function () {
  var indexValue = Math.floor((Math.random() * this.myDVDArray.length));
  if (this.myDVDArray.length == 0) {
    return null;}
  else
  {
    var studioName = this.myDVDArray[indexValue].studio;
    return studioName;
  };
};

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
  return byTimeArray;
};

// Functions to manipulate library above here
function DVD(oData){
    this.title = oData.title;
    this.studio = oData.studio;
    this.runningTime = oData.runningTime;
    this.releaseYear = oData.releaseYear;
    this.dateAdded = oData.dateAdded;
};

var date = new Date(); 
var fDate = date.toDateString()
// $(function)(){      // document ready jquery  -  needed if moved to the top
// Instance
//  vv needed if moved to the top
//window.DVD1 = new DVD({title: "title1", studio: "studio1", runningTime: 309, releaseYear: "September 8, 1981"});
var DVD1 = new DVD({title: "Zelig", studio: "Metro Goldwyn Mayor", runningTime: 79, releaseYear: "1983", dateAdded: fDate});
var DVD2 = new DVD({title: "Being John Malkovich", studio: "Universal Studios", runningTime: 113, releaseYear: "1999", dateAdded: fDate});
var DVD3 = new DVD({title: "Half Baked", studio: "Universal Studios", runningTime: 83, releaseYear: "1998", dateAdded: fDate});
var DVD4 = new DVD({title: "Logans Run", studio: "Warner Brothers", runningTime: 118, releaseYear: "1976", dateAdded: fDate});
var DVD5 = new DVD({title: "Nuns on the Run", studio: "20th Century Fox", runningTime: 92, releaseYear: "1990", dateAdded: fDate});
var DVD6 = new DVD({title: "Twelve Monkeys", studio: "Universal Studios", runningTime: 130, releaseYear: "1995", dateAdded: fDate});
var DVD7 = new DVD({title: "Reel Horror", studio: "Peacock Films", runningTime: 1, releaseYear: "1985", dateAdded: fDate});
var DVD8 = new DVD({title: "Young Frankenstein", studio: "20th Century Fox", runningTime: 106, releaseYear: "1974", dateAdded: fDate});
var DVD9 = new DVD({title: "Evolution", studio: "Dreamworks Pictures", runningTime: 102, releaseYear: "2001", dateAdded: fDate});
// var DVD10 = new DVD();
// var DVD11 = new DVD();
// var DVD12 = new DVD();
// var DVD13 = new DVD();
// var DVD14 = new DVD();

var library1 = new Lib();

var newDVDArray = new Array({title: "Cube", studio: "Lionsgate", runningTime: 80, releaseYear: "1997", dateAdded: fDate},
 {title: "Kick-Ass", studio: "Lionsgate", runningTime: 117, releaseYear: "2010", dateAdded: fDate},
  {title: "Spaceballs", studio: "Metro Goldwyn Mayor", runningTime: 96, releaseYear: "1987", dateAdded: fDate}, 
  {title: "Galaxy Quest", studio: "Dreamworks Pictures", runningTime: 102, releaseYear: "1999", dateAdded: fDate}, 
  {title: "Dr Strangelove", studio: "Columbia Pictures", runningTime: 95, releaseYear: "1964", dateAdded: fDate}, 
  {title: "Tank Girl", studio: "United Artists", runningTime: 103, releaseYear: "1995", dateAdded: fDate}, 
  {title: "Sin City", studio: "Troublemaker Studios", runningTime: 124, releaseYear: "2005", dateAdded: fDate}, 
  {title: "Mystery Men", studio: "Universal Studios", runningTime: 122, releaseYear: "1999", dateAdded: fDate});

// });

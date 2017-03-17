$(function () {
   window.mapMeetup = new meetups();
   window.mapMeetup.init();
});

var meetups = function () {
  this.locationArray = new Array();
};

meetups.prototype.init = function () {
  this.initMap(39.7426537, -104.9923159);
  this._bindEvents();
};

meetups.prototype._bindEvents = function () {
  $("#zipCodeBtn").on("click", $.proxy (this.createMeetupAjax,this));
  $("#nextButton").on("click", $.proxy (this.nextGroup,this));
};

// meetups.prototype.submitQuery = function() {
//       console.log(searchZip);
//   if (this.validateInput) {
//     if(meetups.prototype.createMeetupAjax(this.searchZip)) {
//       // meetups.prototype.createPage(latitude, Longitude);
//     }
//   }
// };

meetups.prototype.validateInput = function () {
  var searchZip = $("#zipCode").val();
  if (!searchZip && searchZip == NaN && !searchZip.length == 5) {
    alert("Please enter a valid zip code");
    return false;}
  else
  {
    return true;
  }
};


meetups.prototype.createMeetupAjax = function(){
    var zipCode = $("#zipCode").val();
   var _self = this;
  $.ajax({
   url: "https://api.meetup.com/2/cities",
   type: "GET",
   data: {query:zipCode},
   dataType: "jsonp"
  }).done(function(data) {
    console.log(data.results);
   _self.startMapping(data.results);
   // _self.getDataFields(date.results);
    return true;
  }).fail(function() {
    alert("Dang! something went wrong. Go ahead and try again.");
    return false;
  }).always(function() {
  // what in the heck do I do in this function?
  });

};

meetups.prototype.startMapping = function(oData) {
  this.meetupLongitude = oData[0].lon;
  this.meetupLatitude = oData[0].lat;
  console.log(this.meetupLatitude);
  this.initMap(this.meetupLatitude, this.meetupLongitude);
};

meetups.prototype.initMap = function(latitude, longitude) {

    // console.log("init map" + latitude);
    var here = {lat: latitude, lng: longitude};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: here
    });
    var marker = new google.maps.Marker({
      position: here,
      map: map
    });

};

// meetups.prototype.getDataFields = function(oData) {
//    this.id = oData[0].id;
//    this.member_count = oData[0].member_count;
//    this.city = oData[0].city;
//    this.state = oData[0].state;
//    this.country = oData[0].country;
//    this.localized_country_name = oData[0].localized_country_name;
//    this.zip = oData[0].zip;
//    this.lat = oData[0].lon;
//    this.meetupLongitude = oData[0].lat;
//    this.lon = oData[0].lon;
//    document.getElementById("countMessage").innerHTML = ("There are " + this.groupCount + "groups in the area"
//    document.getElementById("content").innerHTML = ("The group you have chosen has " +
//    this.member_count + " members, is located about " + 
//    this.distance + " miles from you in the city of " + this.city
//    + ". "It is ranked " + this.ranking + " in the state of" +  
//    this.state + " which is in " +  this.country
//    + " locally known as " + this.localized_country_name" + ". 
//    In case you need it the group id is " + this.id + ". You selected " + 
//    this.zip + " which is centered on latitude " + 
//    this.lat + " and longitude " + this.lon
//    + ". Have a great time and hope you meet lots of intereting people. Good luck!");

//  };


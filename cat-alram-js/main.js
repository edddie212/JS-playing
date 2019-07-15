var wakeUpTime = 7;
var noon = 12;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime;
var evening = 18;


//show the current time 
var showCurrentTime = function(){

  //display the string on the page
  var clock = document.getElementById('clock');
  
  var currentTime = new Date();
  var hour = currentTime.getHours();
  var min = currentTime.getHours();
  var sec = currentTime.getHours();
  var meridian = 'AM';
  
  //Set Hours
  if(hour >= noon)meridian = 'PM';
  if(hour > noon)meridian = hour -12;
   
  //Set Minutes
  if(min < 10)min = '0' +  min ;

  //Set Seconds
  if(sec < 10)sec = '0' + sec;

  //Putting toghter full clock display
   var clockTime = hour + ':' + min + ':' +
    sec + ' ' + meridian; 

   clock.innerText = clockTime;
} ; 

// Getting the clock to increment on its own and,
// change out messages and pictures.

var updateClock = function(){

var time = new Date();
var msgTxt;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

var timeEventJs = document.getElementById('timeEvent');
var lolcatImageJs = document.getElementById('locatImage');

if (time == partyTime)
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
  msgTxt = "Let's party!";
}
else if (time == wakeUpTime)
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  msgTxt = "Wake up!";
}
else if (time == lunchTime)
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  msgTxt = "Let's have some lunch!";
}
else if (time == napTime)
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  msgTxt = "Sleep tight!";
}
else if (time < noon)
{
  image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
  msgTxt = "Good morning!";
}
else if (time >= evening)
{
  image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
  msgTxt = "Good evening!";
}
else
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
  msgTxt = "Good afternoon!";
}

console.log('Cat Clock says : ', msgTxt);
timeEventJs.innerText = msgTxt;
lolcatImage.src = image;

showCurrentTime();
};
updateClock();

function showTime(){
  var date = new Date();
  var hou = date.getHours(); // 0-23
  var min = date.getMinutes(); //0-59
  var sec = date.getSeconds();  //0-59
  var sess = 'AM';

   if(hou == 0){
    hou = 12;
   }
   
   if(hou > 12){
    hou = hou-12;
    sess = "PM";
   }
   
   hou = (hou < 10) ? "0" + hou : hou;
   min = (min < 10) ? "0" + min : min;
   sec = (sec < 10) ? "0" + sec : sec;


  var time = hou + ":" + min + ":" + sec + " " + sess;
  document.getElementById("clockDisplay").innerText = time;
  document.getElementById("clockDisplay").textContent = time;

}

setTimeout(showTime, 1000);
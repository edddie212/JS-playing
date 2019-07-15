var btn = document.querySelector('.start');
var txt = document.querySelector('.machine');

 btn.addEventListener('click', updateBtn);

 function updateBtn(){

  if(btn.textContent === 'Start Machine'){
  btn.textContent = 'Stop Machine';
  txt.textContent = 'The machine has strated';

  }else {
  btn.textContent = 'Start Machine';
  txt.textContent = 'The machine has stopped';

   }

 }

 var button = document.querySelector('.press');

 button.onclick = function(){
  var name = prompt('What is your name?');
  alert('Hello' + ' ' + name + ' ' + ',nice to meet you');

 }

var browserType = 'mozila';
browserType += browserType.length;

var ramData = 'Hello from ramData!!!!';

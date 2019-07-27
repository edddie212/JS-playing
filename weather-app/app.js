window.addEventListener('load', () =>{
let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');
let iconCanvas = document.querySelector('.icon');
let degreeSection = document.querySelector('.temperature');
let degreeSpan = document.querySelector('.temperature span');

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(postion =>{
   long = postion.coords.latitude;
   lat = postion.coords.longitude;
  
  const proxy = 'https://cors-anywhere.herokuapp.com/'; 
  const api = `${proxy}https://api.darksky.net/forecast/88dfc254e57a8b31ba372fe551d7f29c/${lat},${long}`; 
  fetch(api).then(res => {return res.json();})
  .then(data => {
    //console.log(data);
    const {temperature, summary, icon} = data.currently;
    //Set DOM Elements from the API
    temperatureDegree.textContent = temperature;
    temperatureDescription.textContent = summary;
    locationTimezone.textContent = data.timezone;
    //Formula for celsius
    let celius = (temperature - 32 ) * (5/9);


    //Set icon function
    setIcons(icon, iconCanvas);
    

    //Change from F to C 
    degreeSection.addEventListener('click', () => {
     if(degreeSpan.textContent ==="F"){
         degreeSpan.textContent = "C";
          temperatureDegree.textContent = Math.floor(celius);
        }  else {
        degreeSpan.textContent = "F";  
        temperatureDegree.textContent = temperature; 
    } 
        });

      });
    });
  }

function setIcons(icon, iconId){
 const skycons = new Skycons({color: "white"});   
 const currentIcon = icon.replace(/-/g, "_").toUpperCase();
 skycons.play();
 return skycons.set(iconId, Skycons[currentIcon] );
}


}); 
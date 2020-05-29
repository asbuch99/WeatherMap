

var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var main2 = document.querySelector('#name2');
var temp2 = document.querySelector('.temp2');
var desc2 = document.querySelector('.desc2');
var clouds2 = document.querySelector('.clouds2');
var button= document.querySelector('.submit');


function initMap() {
        var directionsRenderer = new google.maps.DirectionsRenderer;
        var directionsService = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsRenderer.setMap(map);
        directionsRenderer.setPanel(document.getElementById('right-panel'));

        var control = document.getElementById('floating-panel');
        control.style.display = 'block';
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

       
      calculateAndDisplayRoute(directionsService, directionsRenderer);
        button.addEventListener('click', function() {
          calculateAndDisplayRoute(directionsService, directionsRenderer);
        });
        
      }

      function calculateAndDisplayRoute(directionsService, directionsRenderer) {
        var start = document.getElementById('start').value;
        var end = document.getElementById('end').value;
        var selectedMode = document.getElementById('mode').value;

        directionsService.route({
          origin: start,
          destination: end,
          travelMode: google.maps.TravelMode[selectedMode]
        }, function(response, status) {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

button.addEventListener('click', function(name){
  var input = document.getElementById("start");
    var input2 = document.getElementById("end");

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=fcd4408ebf12150e241e77139dd345d3&units=imperial')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "  "+descValue;
  temp.innerHTML = "  "+tempValue + "&#x2109" ;

})
.catch(err => alert("Wrong city name!"));
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input2.value+'&appid=fcd4408ebf12150e241e77139dd345d3&units=imperial')
.then(response => response.json())
.then(data => {
  var tempValue2 = data['main']['temp'];
  var nameValue2 = data['name'];
  var descValue2 = data['weather'][0]['description'];

  main2.innerHTML = nameValue2;
  desc2.innerHTML = "  "+descValue2;
  temp2.innerHTML = "  "+tempValue2+ "&#x2109";

})
.catch(err => alert("Wrong city name!"));
})





function initMap() {
     var location = {lat: 51.536424, lng: -0.130464};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 10,
       center: location
     });
     var marker = new google.maps.Marker({
       position: location,
       map: map
     });
   }

//Positioning of the map on the contact page

// // This example requires the Places library. Include the libraries=places
// // parameter when you first load the API. For example:
// // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
// let map;
// let service;
// let infowindow;
// let markerMaker = null;
//
// function initMap() {
//   const sydney = new google.maps.LatLng(-33.867, 151.195);
//   infowindow = new google.maps.InfoWindow();
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: sydney,
//     zoom: 15,
//   });
//   const request = {
//     query: "Museum of Contemporary Art Australia",
//     fields: ["name", "geometry"],
//   };
//   service = new google.maps.places.PlacesService(map);
//   service.findPlaceFromQuery(request, (results, status) => {
//     if (status === google.maps.places.PlacesServiceStatus.OK && results) {
//       for (let i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//       map.setCenter(results[0].geometry.location);
//     }
//   });
//
//   google.maps.event.addListener(map, "click", function () {
//     infowindow.close();
//   });
//
//   google.maps.event.addListener(map, "click", function (event) {
//     //call function to create marker
//     if (markerMaker) {
//       markerMaker.setMap(null);
//       markerMaker = null;
//     }
//     markerMaker = createMarker(
//       event.latLng,
//       "name",
//       "<b>Location</b><br>" + event.latLng
//     );
//   });
// }
//
// // function createMarker(place) {
// //   if (!place.geometry || !place.geometry.location) return;
// //   const marker = new google.maps.Marker({
// //     map,
// //     position: place.geometry.location,
// //   });
// //   google.maps.event.addListener(marker, "click", () => {
// //     infowindow.setContent(place.name || "");
// //     infowindow.open(map);
// //   });
// // }
//
// // A function to create the marker and set up the event window function
// function createMarker(latlng, name, html) {
//   let contentString = html;
//   let marker = new google.maps.Marker({
//     position: latlng,
//     map: map,
//     zIndex: Math.round(latlng.lat() * -100000) << 5,
//   });
//
//   google.maps.event.addListener(marker, "click", function () {
//     infowindow.setContent(contentString);
//     infowindow.open(map, marker);
//   });
//   google.maps.event.trigger(marker, "click");
//   return marker;
// }

function initMap() {
  const myLatlng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatlng,
  });
  // const marker = new google.maps.Marker({
  //   position: myLatlng,
  //   map,
  //   title: "Click to zoom",
  // });
  // Create the initial InfoWindow.
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });
  infoWindow.open(map);
  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
    // placeMarkerAndPanTo(mapsMouseEvent.latLng, map);
  });
}

// function placeMarkerAndPanTo(latLng, map) {
//   new google.maps.Marker({
//     position: latLng,
//     map: map,
//   });
//   map.panTo(latLng);
// }

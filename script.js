function initMap() {
    const uluru = { lat: 24.5843023, lng: 73.7006269 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
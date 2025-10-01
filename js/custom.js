// Load reusable components
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-placeholder', 'includes/header.html');
    loadComponent('footer-placeholder', 'includes/footer.html');
});

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


// display current year

function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();

    document.querySelector("#displayDate").innerHTML = currentYear;
}
displayYear();

// client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    navText: [],
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navText: ['<span class="fa fa-arrow-left "></span>', '<span class="fa fa-arrow-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        991: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
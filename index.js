
const container = document.querySelector('.container-services');
const cards = document.querySelectorAll('.services');

document.querySelector('.container-services').addEventListener('click', function() {
this.classList.toggle('centered');
});




document.querySelector('.circle-header').addEventListener('click', function () {
    var headerContainer = document.getElementById('headerContainer');
    var overlay = document.getElementById('overlay');
    headerContainer.style.display = 'flex';
    overlay.style.display = 'block';
    setTimeout(function () {
        headerContainer.classList.add('active');
    }, 10);
});
document.getElementById('closeImage').addEventListener('click', function () {
    var headerContainer = document.getElementById('headerContainer');
    var overlay = document.getElementById('overlay');
    overlay.style.opacity = 0;
    headerContainer.classList.remove('active');
    setTimeout(function () {
        headerContainer.style.display = 'none';
        overlay.style.display = 'none';
    }, 500);
});
document.getElementById('overlay').addEventListener('click', function () {
    var headerContainer = document.getElementById('headerContainer');
    this.style.opacity = 0;
    headerContainer.classList.remove('active');
    setTimeout(function () {
        headerContainer.style.display = 'none';
        this.style.display = 'none';
    }.bind(this), 500);
});
document.getElementById('homeLink').addEventListener('click', function () {
    var socialLinks = document.getElementById('socialLinks');
    if (socialLinks.style.display === 'none') {
        socialLinks.style.display = 'block';
    } else {
        socialLinks.style.display = 'none';
    }
});
window.addEventListener('click', function (event) {
    var headerContainer = document.getElementById('headerContainer');
    if (!headerContainer.contains(event.target) && !document.querySelector('.circle-header').contains(event.target)) {
        headerContainer.classList.remove('active');
        setTimeout(function () {
            headerContainer.style.display = 'none';
        }, 500);
    }
});


// Path: index.html


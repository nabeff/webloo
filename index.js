
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


// Path: story.html

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        const activeBox = document.querySelector('.active');
        if (this !== activeBox) {
        
            const clickedBoxRect = this.getBoundingClientRect();
            const activeBoxRect = activeBox.getBoundingClientRect();
            let deltaX;

            if (clickedBoxRect.left > activeBoxRect.left) {
               
                deltaX = clickedBoxRect.left - activeBoxRect.left - (activeBoxRect.width - clickedBoxRect.width);
            } else {
            
                deltaX = clickedBoxRect.left - activeBoxRect.left;
            }

            activeBox.style.transform = `translateX(${deltaX}px)`;

            setTimeout(() => {
              
                activeBox.classList.remove('active');
                this.classList.add('active');

                const allContents = document.querySelectorAll('.box .content');
                allContents.forEach(content => {
                    content.style.opacity = 0;
                });

      
                setTimeout(() => {
                    const newActiveContent = this.querySelector('.content');
                    newActiveContent.style.opacity = 1;

                  
                    activeBox.style.transform = '';
                }, 150);  
            }, 100);  
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the initial active box content is visible
    const activeContent = document.querySelector('.box.active .content');
    activeContent.style.opacity = 1;
});
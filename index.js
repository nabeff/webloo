
// Path: services.html

document.getElementById('services').addEventListener('click', function() {
    this.classList.toggle('centered');
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
            }, 250);  
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the initial active box content is visible
    const activeContent = document.querySelector('.box.active .content');
    activeContent.style.opacity = 1;
});

// Path: cardContent.html

document.querySelectorAll('#cardContent .box').forEach((box, index) => {
    
    box.style.zIndex = 100 - index;

    box.addEventListener('click', function() {
   
        document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
        
      
        this.classList.add('active');
    });
});

 // Path: face.html

 document.querySelectorAll('.box').forEach((box, index) => {
    // Initialize the z-index inversely related to their order to maintain the stacking context
    box.style.zIndex = 100 - index;

    box.addEventListener('click', function() {
        // Remove 'active' class from all boxes
        document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
        
        // Add 'active' class to the clicked box
        this.classList.add('active');
    });
});

// Path: brand.html

document.getElementById('brand').addEventListener('click', function() {
    var absolute = document.querySelector('.absolute');
    var absoluteBottom = document.querySelector('.absoluteBottom');
    
    if (absolute.style.top === '0%') {
        absolute.style.top = '-55%';
        absoluteBottom.style.top = '0%';
    } else {
        absolute.style.top = '0%';
        absoluteBottom.style.top = '-55%';
    }
});

// Path: loop.html

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('#loop .container');
    const contentWidth = container.offsetWidth;
    const firstChild = container.firstElementChild;

    function recycleElement() {
        const firstElementWidth = firstChild.offsetWidth;
        // Check if the first element has completely left the view
        if (Math.abs(container.getBoundingClientRect().left) >= firstElementWidth) {
            container.appendChild(firstChild);  // Move the first element to the end of the container
            container.style.transition = 'none';  // Disable transition to reset position instantly
            container.style.transform = 'translateX(0)';  // Reset transform to initial state
            // Force reflow
            void container.offsetWidth;
            container.style.transition = 'transform 8s linear';  // Re-enable transitions
        }

        requestAnimationFrame(recycleElement);  // Loop this function
    }

    recycleElement();  // Start the looping function
});

// Path: range.html

const navbar = document.querySelector('.navbar ul'); 
const contentImage = document.querySelector('.content img'); 
let sectorsData = [];

function updateImageForActiveSector(activeItem) {
    const sectorData = sectorsData.find(sector => sector.sector === activeItem.dataset.sector);
    if (sectorData) {
        contentImage.classList.add('fading');
        setTimeout(() => {
            contentImage.src = sectorData.image;  
            contentImage.alt = sectorData.sector + " Image";  
            contentImage.classList.remove('fading'); 
        }, 400); 
    }
}

fetch('range.json')
    .then(response => response.json())
    .then(data => {
        sectorsData = data;  // Store the fetched data into sectorsData
        updateImageForActiveSector(navbar.querySelector('.active')); // Update initially active sector image
    })
    .catch(error => console.error('Error loading the JSON data:', error));

navbar.addEventListener('click', function(event) {
    const clickedItem = event.target.closest('li'); // Ensuring we're handling the click on the li element
    if (clickedItem && !clickedItem.classList.contains('active')) {
        navbar.querySelector('.active').classList.remove('active');  // Remove active class from currently active list item
        clickedItem.classList.add('active');  // Set the clicked list item as active
        updateImageForActiveSector(clickedItem);  // Update the image according to the newly active sector
    }
});

// Path: creativity.html

const shows = document.querySelectorAll(".show");
  const pageIndicator = document.querySelector(".page p");
  let currentIndex = 0;
  let showing = false;

  const updatePageIndicator = () => {
    if (currentIndex === 0) {
      pageIndicator.style.opacity = "0";
    } else {
      pageIndicator.style.opacity = "1";
      pageIndicator.textContent = `${String(currentIndex).padStart(2, '0')}/04`;
    }
  };

  updatePageIndicator();

  document.querySelector(".content").addEventListener("click", () => {
    if (!showing) {
      if (currentIndex < shows.length) {
        shows[currentIndex].style.right = "0";
        currentIndex++;
        updatePageIndicator();
      } else {
        showing = true;
      }
    } else {
      for (let i = 0; i < shows.length; i++) {
        shows[i].style.right = "-100%";
      }
      currentIndex = 0;
      showing = false;
      updatePageIndicator();
    }
  });

  
// Path: navbar.html

const circleHeader = document.querySelector('.circle-header');
const menuButton = document.getElementById('menuButton');
const headerContainer = document.getElementById('headerContainer');
const overlay = document.getElementById('overlay');
const closeImage = document.getElementById('closeImage');

function openHeaderContainer() {
    headerContainer.style.display = 'flex';
    overlay.style.display = 'block';
    setTimeout(() => {
        headerContainer.classList.add('active');
        overlay.style.opacity = '1';
    }, 10);
}

function closeHeaderContainer() {
    overlay.style.opacity = '0';
    headerContainer.classList.remove('active');
    setTimeout(() => {
        headerContainer.style.display = 'none';
        overlay.style.display = 'none';
    }, 500);
}

circleHeader.addEventListener('click', openHeaderContainer);
menuButton.addEventListener('click', openHeaderContainer);
closeImage.addEventListener('click', closeHeaderContainer);
overlay.addEventListener('click', closeHeaderContainer);

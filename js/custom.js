
$('.slider').owlCarousel({
    loop:false,
    nav:true,
    dots: false,
    responsiveClass: true,
    navText: ["<img class='green-arrow-hover' src='./images/icons/left-arrow.svg'>","<img class='green-arrow-hover' src='./images/icons/right-arrow.svg'>"],
    responsive:{
        0:{
            items:1
        }
    }
})





$(window).on('resize',function() {
    $('.pd-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navigation: true,
        responsiveClass: true,
        navText: ["<img class='green-arrow-hover' src='./images/icons/left-arrow.svg'>","<img class='green-arrow-hover' src='./images/icons/right-arrow.svg'>"],
        responsive:{
            0:{
                items:1
            },
            600:{
              items:2
            },
            1000:{
                items:3
            },
            1200:{
              items:4
            },
        }
      })
    })
$(document).ready(function() {
    $(window).trigger('resize');
});



$('.review-slider').owlCarousel({
    loop:true,
    margin:39,
    nav:true,
    center: true,
    autoplay: true,
    dots:false,
    navigation: true,
    responsiveClass: true,
    navText: ["<img class='green-arrow-hover' src='./images/icons/left-arrow.svg'>","<img class='green-arrow-hover' src='./images/icons/right-arrow.svg'>"],
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
         
        },
        1000:{
            items:3,
            
        }
    }
  });



// Duplicate Images

document.addEventListener('DOMContentLoaded', function() {
    // Select all images within the .pd-images container
    const images = document.querySelectorAll('.pd-images img');
    
    images.forEach(function(image) {
        // Clone the image
        const clonedImage = image.cloneNode(true);
        
        // Add a new class to the cloned image
        clonedImage.classList.add('image-blur');
        
        // Append the cloned image to the parent node
        image.parentNode.appendChild(clonedImage);
    });
});


// Refresh Tab 

$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
    $(".pd-slider").trigger('refresh.owl.carousel');
    });



// TAB Margin Remove
    document.addEventListener('DOMContentLoaded', () => {
        const detailsContainer = document.querySelector('.pd-category-deatils');
      
        const updateMargin = () => {
          const activePane = document.querySelector('.nav-link.active').getAttribute('data-bs-target');
          const isEmpty = !document.querySelector(`${activePane} .item`)?.innerHTML.trim();
          detailsContainer.classList.toggle('empty', isEmpty);
        };
      
        // Initial check
        updateMargin();
      
        // Listener for tab changes
        document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
          tab.addEventListener('shown.bs.tab', updateMargin);
        });
      
        // Example of handling dynamic content
        document.addEventListener('click', event => {
          if (event.target.matches('#add-new-item-button')) {
            // Code to add new items...
            setTimeout(updateMargin, 0); // Recheck margin after adding items
          }
        });
      });
      


    //   Tooltip

      document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.tooltip-button');
        
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Toggle the active state of the clicked button
                const isActive = button.classList.toggle('active');
                
                // Handle tooltip content visibility
                document.querySelectorAll('.tooltip-content').forEach(content => {
                    content.style.display = 'none';
                    content.classList.remove('active');
                });
                
                const tooltipContent = button.nextElementSibling;
                if (tooltipContent && tooltipContent.classList.contains('tooltip-content')) {
                    tooltipContent.style.display = isActive ? 'block' : 'none';
                    tooltipContent.classList.toggle('active', isActive);
                }
                
                // Handle tab content visibility
                const targetId = button.dataset.tab;
                if (targetId) {
                    document.querySelectorAll('.tooltip-button').forEach(btn => btn.classList.remove('active'));
                    document.querySelectorAll('.tooltip-content').forEach(content => content.classList.remove('active'));
                    
                    button.classList.add('active');
                    const targetContent = document.getElementById(targetId);
                    if (targetContent) targetContent.classList.add('active');
                }
                
                // Handle tooltip item active state
                document.querySelectorAll('.tooltip-item').forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        document.querySelectorAll('.tooltip-item').forEach(i => i.classList.remove('active'));
                        item.classList.add('active');
                    });
                });
            });
        });
    });
    





//Menu

  document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
});

document.querySelector('.btn-close').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
});




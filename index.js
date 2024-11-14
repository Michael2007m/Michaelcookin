// Get the modal
var modal = document.getElementById("donate-modal");

// Get the button that opens the modal
var btn = document.getElementById("donateBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const projects = document.querySelectorAll('.project');
    let currentIndex = 0;

    function showProject(index) {
      projects.forEach((project, i) => {
        project.classList.toggle('active', i === index);
      });
    }

    document.querySelector('.left-arrow').addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
      showProject(currentIndex);
    });

    document.querySelector('.right-arrow').addEventListener('click', () => {
      currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
      showProject(currentIndex);
    });

    // Initial display
    showProject(currentIndex);
    

/*
document.addEventListener("DOMContentLoaded", function() {
  // Initially hide the navbar
  const bar = document.querySelector("header");
  bar.style.display = "none"; // Hide navbar

  // Countdown of 2 seconds
  setTimeout(function() {
    bar.style.display = "block"; // Show navbar after 2 seconds
    // After showing the navbar, add the animate-nav class after an additional 4 seconds (6 seconds total)
    setTimeout(function() {
      bar.classList.add('animate-nav');
    }); // 4000 milliseconds = 4 seconds after showing
  }, 4000); // 2000 milliseconds = 2 seconds

  // Add the animate-heading class when the page loads
  const heading = document.getElementById('animated-heading');
  heading.classList.add('animate-heading');
  
  
    const element = document.querySelector('.hero');
    element.style.marginTop = '0'; // Change margin to 50px
});
*/


document.addEventListener("DOMContentLoaded", function() {
  // Initially hide the navbar
  const bar = document.querySelector("header");
  bar.style.display = "none"; // Hide navbar

  // Countdown of 4 seconds to show the navbar
  setTimeout(function() {
    bar.style.display = "block"; // Show navbar after 4 seconds
    // After showing the navbar, add the animate-nav class
    setTimeout(function() {
      bar.classList.add('animate-nav');
    }); // 4000 milliseconds = 4 seconds after showing
  }, 3000); // 4000 milliseconds = 4 seconds

  // Add the animate-heading class when the page loads
  const heading = document.getElementById('animated-heading');
  heading.classList.add('animate-heading');

  // Change margin-top after the animate-heading animation (3 seconds)
  setTimeout(function() {
    const element = document.querySelector('.hero');
    element.style.marginTop = ''; // Change margin-top to 0
  }, 3000); // 3000 milliseconds = 3 seconds
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const viewer = document.createElement('spline-viewer');
        viewer.setAttribute('url', 'https://prod.spline.design/h7JAMRTZgy30N5RE/scene.splinecode');
        viewer.classList.add('dd');
        document.getElementById('spline-placeholder').appendChild(viewer);
        setTimeout(function() {
         viewer.classList.add('animate-dd');
      });
    }, 4000); // 4 seconds delay
});

document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.querySelector('.arrow2');
    arrow.style.display = "none";
    
    setTimeout(function() {
        const arrow = document.querySelector('.arrow2');
        arrow.style.display = "block";
            setTimeout(function(){
                arrow.classList.add('animate-dd');
            })
       
    }, 4000);
});



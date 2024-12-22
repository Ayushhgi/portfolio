function revealToSpan () {
  document.querySelectorAll('.reveal').forEach(function (elem) {
    var parent = document.createElement('span')
    var child = document.createElement('span')
 
    parent.classList.add('parent')
    child.classList.add('child')

    child.innerHTML = elem.innerHTML
    parent.appendChild(child)

    elem.innerHTML = ''
    elem.appendChild(parent)
  })
}
revealToSpan()

function loaserAnimation () {
  var tl = gsap.timeline()
  tl.to(' #loader .parent .child', {
    y: '-100%',
    duration: 1,
    delay: 1,
    ease: Circ.easeInOut
  })

    .to('#loader', {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut
    })
    .to('#green', {
      height: '100%',
      top: 0,
      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut
    })
    .to('#green', {
      height: '0%',
      duration: 0.9,
      delay: -0.5,
      ease: Circ.easeInOut
    })
    .from('#home .parent .child', {
      y: '-100%',
      duration: 1,

      ease: Circ.easeInOut
    })
}
loaserAnimation()


function cardshow() {
  const projects = document.querySelector('.projects');
  const overlay = document.querySelectorAll('.overlay');
  const random = document.querySelector('.random-stuff');
  // Add hover effect to each image
  overlay.forEach((img) => {
    img.addEventListener('mouseover', () => {
      console.log(img.dataset);
      if(img.dataset.index==0){
        projects.style.backgroundColor = 'rgba(204, 201, 245 )'; // Change to desired color
        random.style.backgroundColor = 'rgba(204, 201, 245, 0.66)';
      }
      if(img.dataset.index==1){
        projects.style.backgroundColor = 'rgb(243, 175, 136 )'; // Change to desired color
        random.style.backgroundColor = 'rgba(252, 228, 214, 1)';
      }
      if(img.dataset.index==2){
        projects.style.backgroundColor = 'rgba(152, 216, 198, 1)'; // Change to desired color
        random.style.backgroundColor = 'rgba(152, 216, 198, 0.64)';
      }
      if(img.dataset.index==3){
        projects.style.backgroundColor = 'rgba(212, 140, 144, 1)'; // Change to desired color
        random.style.backgroundColor = 'rgba(212, 140, 143, 0.63)';
      }
       // Change to desired color
      img.style.opacity = '1'; 
    });

    img.addEventListener('mouseout', () => {
      projects.style.backgroundColor = ''; // Revert to original color
      random.style.backgroundColor = '';
      img.style.opacity = ''; 
    });
  });
}


cardshow();


function lineAnimation() {
  const h3Elements = document.querySelectorAll('.skill h3');

  h3Elements.forEach((h3) => {
    // Add smooth transition in CSS dynamically
    h3.style.transition = 'border-bottom 0.3s ease';

    h3.addEventListener('mouseover', () => {
      h3.style.borderBottom = '4px solid black'; // Add border on hover
    });

    h3.addEventListener('mouseout', () => {
      h3.style.borderBottom = 'none'; // Remove border when hover ends
    });
  });
}

lineAnimation();

function msgAnimation() {
  const msgElement = document.querySelector('.msg');
  const msgText = document.querySelector('.msg h2');

  // Add event listener for mouseover
  msgElement.addEventListener('mouseover', () => {
    msgElement.style.backgroundColor = 'white';
  
    msgText.style.color = 'black'; // Change text color to black
  });

  // Add event listener for mouseout
  msgElement.addEventListener('mouseout', () => {
    msgElement.style.backgroundColor = ''; 
    msgText.style.color = ''; // Revert text color (default)
  });
}

// Call the function to apply the effects
msgAnimation();

function socialsAnimation() {
  const socialElements = document.querySelectorAll('.socials');

  socialElements.forEach((social) => {
    // Add event listener for mouseover
    social.addEventListener('mouseover', () => {
      social.style.backgroundColor = '#14cf93'; // Change background color
      social.style.gap = '30px'; // Add left padding
      // social.style.marginRight = '100px'; // Add right padding
      social.style.transition = 'all 0.3s ease';
      social.style.borderTop = 'none'; // Smooth transition
    });

    // Add event listener for mouseout
    social.addEventListener('mouseout', () => {
      social.style.backgroundColor = ''; // Revert background color
      social.style.gap = ''; // Remove left padding
      social.style.borderTop = '3px solid white'; 
    });
  });
}

// Call the function to apply the effects
socialsAnimation();

function toggleDataScrollOnResize() {
  const elements = document.querySelectorAll('[data-scroll-original]'); // Select elements with custom marker attribute
  
  if (window.innerWidth <= 480) {
    elements.forEach((element) => {
      // Remove scroll-related attributes on small screens
      element.removeAttribute('data-scroll');
      element.removeAttribute('data-scroll-speed');
      element.removeAttribute('data-scroll-direction');
    });
  } else {
    elements.forEach((element) => {
      // Re-add scroll-related attributes when screen is larger
      element.setAttribute('data-scroll', '');
      element.setAttribute('data-scroll-speed', element.getAttribute('data-scroll-original-speed'));
      element.setAttribute('data-scroll-direction', element.getAttribute('data-scroll-original-direction'));
    });
  }
}

// Add markers for original values on page load
function addOriginalDataScrollMarkers() {
  const elements = document.querySelectorAll('[data-scroll]');
  elements.forEach((element) => {
    element.setAttribute('data-scroll-original', 'true'); // Marker to identify original elements
    element.setAttribute('data-scroll-original-speed', element.getAttribute('data-scroll-speed') || '1'); // Store original speed
    element.setAttribute('data-scroll-original-direction', element.getAttribute('data-scroll-direction') || 'vertical'); // Store original direction
  });
}

// Initialize the markers and handle responsive behavior
addOriginalDataScrollMarkers();
toggleDataScrollOnResize();

// Run toggle function on window resize
window.addEventListener('resize', toggleDataScrollOnResize);

// Function to check screen width and show/hide content accordingly
function adjustForMobile() {
  const paragraph = document.getElementById('intro-paragraph');
  const mobileSection = document.getElementById('mobile-section');
  
  // If screen width is 480px or less, remove <p> and show mobile section
  if (window.innerWidth <= 480) {
    if (paragraph) {
      paragraph.style.display = 'none';  // Hide the <p> tag
    }
    if (mobileSection) {
      mobileSection.style.display = 'block';  // Show the mobile section
    }
  } else {
    // Restore the <p> tag and hide the mobile section for larger screens
    if (paragraph) {
      paragraph.style.display = 'block';  // Show the <p> tag again
    }
    if (mobileSection) {
      mobileSection.style.display = 'none';  // Hide the mobile section
    }
  }
}

// Run function on page load
adjustForMobile();

// Run function on window resize to adjust the content dynamically
window.addEventListener('resize', adjustForMobile);



const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  lerp: 0.05
})

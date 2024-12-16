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
        projects.style.backgroundColor = 'rgb(204, 201, 245 ,1)'; // Change to desired color
        random.style.backgroundColor = 'rgba(204, 201, 245, 1)';
      }
      if(img.dataset.index==1){
        projects.style.backgroundColor = 'rgba(252, 228, 214, 1)'; // Change to desired color
        random.style.backgroundColor = 'rgba(252, 228, 214, 1)';
      }
      if(img.dataset.index==2){
        projects.style.backgroundColor = 'rgba(152, 216, 198, 1)'; // Change to desired color
        random.style.backgroundColor = 'rgba(152, 216, 198, 1)';
      }
      if(img.dataset.index==3){
        projects.style.backgroundColor = 'rgba(212, 140, 144, 1)'; // Change to desired color
        random.style.backgroundColor = 'rgba(212, 140, 144, 1)';
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



const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  lerp: 0.02
})

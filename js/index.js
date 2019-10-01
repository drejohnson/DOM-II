// Your code goes here
const body = document.querySelector('body')
const header = document.querySelector('.main-navigation')
const logo = document.querySelector('.logo-heading')
const nav = document.querySelector('.nav')
const navLink = document.querySelectorAll('.nav-link');
const imgContent = document.querySelectorAll('.img-content img')
const destImg = document.querySelector('.content-destination img')
const inverseSection = document.querySelector('.inverse-content')
const textContent = document.querySelector('.inverse-content .text-content')
const destination = document.querySelectorAll('.destination')

window.addEventListener("load", () => {
  console.log("The page has been loaded");
});

window.addEventListener('scroll', () => {
  window.scrollY > 200 
    ? (
        header.style.backgroundColor = 'yellow',
        header.style.transition = 'all 0.5s'
      )
    : (
        header.style.backgroundColor = '',
        header.style.transition = 'all 0.5s'
      )
})

window.addEventListener('resize', () => {
  window.innerWidth < 800
  ? body.style.backgroundColor = 'indianred'
  : body.style.backgroundColor = ''
})

logo.addEventListener('dblclick', e => {
  
  function reverseLogoText(str) {
    return str.split('').reverse().join('')
  }
  e.target.textContent = reverseLogoText(e.target.textContent)  
})

nav.addEventListener("mouseover", e => {   
  e.target.style.color = "teal"
  e.target.style.transition = 'all 0.5s'

  setTimeout(() => {
    e.target.style.color = ''
    e.target.style.transition = 'all 0.5s'
  }, 500)
})

navLink.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    e.target.style.borderBottom = '1px solid teal'
    e.target.style.transition = 'all 1.5s'

    setTimeout(() => {
      e.target.style.borderBottom = ''
      e.target.style.transition = 'all 2.5s'
    }, 500)
  });
});

imgContent.forEach(img => {
  img.addEventListener('mouseenter', e => {
    e.target.style.transform = 'scale(1.2)'
    e.target.style.transition = 'transform 0.5s'
  })
  img.addEventListener('mouseleave', e => {
    e.target.style.transform = 'scale(1)'
    e.target.style.transition = 'transform 0.5s'
  })
})

inverseSection.addEventListener('click', e => {
  inverseSection.style.backgroundColor = 'purple'
})

textContent.addEventListener('click', e => {
  e.stopPropagation()
  textContent.style.backgroundColor = 'green'
})

destImg.addEventListener('dragstart', e => {
  alert(`Umm... this element isn't draggable`)
},
false
);

window.addEventListener('keydown', e => {
  e.keyCode === 32
    ? alert(`You pressed the space bar`)
    : alert(`You pressed the ${e.key} key`);
})

// Stretch task

destination.forEach(dest => {
  dest.addEventListener('mouseenter', (e) => {
    TweenMax.to(dest, 1, {
      scale: 1.3,
      rotation: 360,
      ease: Power2.easeOut
    })
  })
  dest.addEventListener('mouseleave', (e) => {
    TweenMax.to(dest, 1, {
      scale: 1,
      rotation: 0,
      ease: Power2.easeOut
    })
  })
}
)
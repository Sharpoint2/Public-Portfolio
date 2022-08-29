let first_name = document.querySelector('#first-name');
let last_name = document.querySelector('#last-name');
let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
let message = document.querySelector('#message');

validation = () =>
{
    let inputs = document.querySelectorAll('input');
    inputs.forEach('input')
    {
        if (input.value === ' ')
        {
            alert('Please Make Sure All Fields are Filled');
            return;
        };
    };

    let emailRegex = /^\S+@\S+\.\S+$/;
    let nameRegex =/^[a-zA-Z\s]+$/;


    if (emailRegex.test(first_name) === false || emailRegex.test(last_name) === false) 
    {
      alert('Please enter a valid name');
      return;
    }

    if (emailRegex.test(email) === false)
    {
      alert('Please enter a valid email address');
      return;
    }
}

textSlide = () =>
{
    
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true}) //loops through the header, animating each letter to be typed in
//achieves this by creating object literals of the letter to add, using whatever character and line is currently in the loop
  .add({ //special animation for first character
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10], //uses queryselectors to loop through all letters in the header for the hero banner
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({ //special annimation and addition notation for the last character
    targets: '.ml11 .letter', 
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({ //special loop addition and animation for the part after the last character
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
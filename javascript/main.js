const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  // Replace this with your login functionality
  alert("You clicked the login button!");
});









// Get the elements
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// Get the "Read More" button
var readMoreBtn = document.querySelector('#buyers-say .btn');

// Add a click event listener to the button
readMoreBtn.addEventListener('click', function(event) {
  // Prevent the default behavior of the button (i.e. following the link)
  event.preventDefault();

  // Redirect the user to the "buyers-say.html" page
  window.location.href = 'buyers-say.html';
});



// Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});





// Read more link
const readMoreLink = document.querySelector('.read-more');
const aboutUs = document.querySelector('.about-us');

readMoreLink.addEventListener('click', (e) => {
  e.preventDefault();
  aboutUs.classList.toggle('expanded');
});
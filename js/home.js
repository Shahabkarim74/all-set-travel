function changeImage() {
    var image = document.querySelector('.imgp');
    image.src = 'imagbox/pexels-james-wheeler-1486974.jpg'; // Update the image path 
  }
  function visitPage() {
    // for visit input button
    window.location.href = "gallery.html";
  }
// ..........icons

window.onload = function() {
  var icons = document.querySelectorAll('.social-icons a');
  for (var i = 0; i < icons.length; i++) {
    switch(icons[i].getAttribute('href')) {
      case 'https://www.facebook.com/':
        icons[i].innerHTML = '<i class="fab fa-facebook"></i>';
        break;
      case 'https://www.instagram.com/':
        icons[i].innerHTML = '<i class="fab fa-instagram"></i>';
        break;
      case 'https://www.twitter.com/':
        icons[i].innerHTML = '<i class="fab fa-twitter"></i>';
        break;
      case 'https://www.linkedin.com/':
        icons[i].innerHTML = '<i class="fab fa-linkedin"></i>';
        break;
      case 'https://www.twitch.tv/':
        icons[i].innerHTML = '<i class="fab fa-twitch"></i>';
        break;
    }
  }
}
// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form data
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  // Validate form data
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  
}

// Add event listener to form
const form = document.querySelector("#contactForm");
form.addEventListener("submit", handleFormSubmit);

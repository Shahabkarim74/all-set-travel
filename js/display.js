// window.onload = function() {
//      const urlp = new URLSearchParams(window.location.search);
//      const JsonData = urlp.get("JsonString");
//      const obj = JSON.parse(JsonData);
 
//      document.getElementById("name").innerHTML += obj.txtfirstN;
//      document.getElementById("last-name").innerHTML += obj.txtlastN;
//      document.getElementById("email").innerHTML += obj.txtEmail;
 
     
//      alert("Page loaded successfully!");
//  };
const urlp = new URLSearchParams(window.location.search);
const JsonData = urlp.get("JsonString");
const obj = JSON.parse(JsonData);

document.getElementById("name").innerHTML += obj.txtfirstN;
document.getElementById("last-name").innerHTML += obj.txtlastN;
document.getElementById("email").innerHTML += obj.txtEmail;
// ................rating data......................
// function collectRatingData() {
//     const stars = document.querySelectorAll('.stars input[type="radio"]');
//     let ratingValue = 0;
  
//     stars.forEach(star => {
//       if (star.checked) {
//         ratingValue = parseInt(star.value);
//       }
//     });
  
//     console.log('Rating value:', ratingValue);
//   }
  
//   document.querySelectorAll('.stars input[type="radio"]').forEach(star => {
//     star.addEventListener('change', collectRatingData);
//   });
  
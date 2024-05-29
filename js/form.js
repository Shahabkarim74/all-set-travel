function myfn()
{
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    
    var formData = {
      txtfirstN: firstName,
      txtlastN: lastName,
      txtEmail: email,
    };
    
    let dataString = JSON.stringify(formData);

    let URL="../responsive/display.html?JsonString="+ dataString;

    window.location.href=URL;
    
}  

document.getElementById("emailInput").addEventListener("input", validateEmail);

function validateEmail() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let email = document.getElementById("emailInput").value.trim();
  try { 
    if (email === "") throw "is empty";
    if (!isValidEmail(email)) throw "is not a valid email address";
  }
  catch(err) {
    window.alert("Email " + err);
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}




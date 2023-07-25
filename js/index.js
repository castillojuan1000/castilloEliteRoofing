function toggleInsuranceClaim() {
  var text = document.getElementById("insurance_claim");
  var toggleLink = document.getElementById("toggle_link");
  text.classList.toggle("visible");
  
  // Change the link text based on the visibility of the div
  if (text.classList.contains("visible")) {
    toggleLink.textContent = "Show less";
  } else {
    toggleLink.textContent = "Learn more";
  }
}


function toggleRoofReplacement() {
  var text = document.getElementById("roof_replacement");
  var toggleLink = document.getElementById("toggle_link_roof_replacement");
  text.classList.toggle("visible");
  
  // Change the link text based on the visibility of the div
  if (text.classList.contains("visible")) {
    toggleLink.textContent = "Show less";
  } else {
    toggleLink.textContent = "Learn more";
  }
}


function toggleRoofRepair() {
  var text = document.getElementById("roof_repair");
  var toggleLink = document.getElementById("toggle_link_roof_repair");
  text.classList.toggle("visible");
  
  // Change the link text based on the visibility of the div
  if (text.classList.contains("visible")) {
    toggleLink.textContent = "Show less";
  } else {
    toggleLink.textContent = "Learn more";
  }
}


//FORM 

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'castillo_elite_roofing';
   const templateID = 'castillo_elite_roofing';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      // alert('Sent!');
      showToast('Success! Message sent.', true); // Green Toast
    }, (err) => {
      btn.value = 'Send Email';
      // alert(JSON.stringify(err));
      showToast('Error! Something went wrong.', false); // Red Toast
    });
});

function showToast(message, isSuccess = true) {
  var toast = document.getElementById("toast");

  if (isSuccess) {
      toast.className = "success show";
  } else {
      toast.className = "error show";
  }

  toast.innerText = message;
  setTimeout(function() { toast.className = toast.className.replace("show", ""); }, 3000);
}
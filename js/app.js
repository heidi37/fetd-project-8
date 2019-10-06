fetch('https://randomuser.me/api/?results=12&nat=us')
  .then(response => response.json())
  .then(data => console.log(data.results))

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var card = document.getElementsByClassName("card");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the card, open the modal
for ( let i = 0; i < card.length; i++) {
  card[i].onclick = function() {
    modal.style.display = "block";
  }
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





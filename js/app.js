// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var card = document.getElementsByClassName("card");
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the card, open the modal
// for ( let i = 0; i < card.length; i++) {
//   card[i].onclick = function() {
//     modal.style.display = "block";
//   }
// }

btn.onclick = function() {
  modal.style.display = "block";
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


const container = document.getElementsByClassName("container")[1];

fetch('https://randomuser.me/api/?results=12&nat=us')
  .then(checkStatus)
  .then(response => response.json())
  // .then(data => console.log(data.results[10]))
  .then(data => generateCards(data.results))
  .catch(error => console.log('Looks like there was a problem', error))


function generateCards(data) {
  for ( let i = 0; i < 13; i++) {
  let html =
  `<div class="card">
  <img class="profile-image" src='${data[i].picture.large}' alt='${data[i].name.first} ${data[i].name.last}' />
  <div class="profile-text">
  <h3>${data[i].name.first} ${data[i].name.last}</h3>
  <p>${data[i].email}</p>
  <p>${data[i].location.city}</p>
  </div>
  </div>`;
  container.innerHTML += html;
  } 
}


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------


function checkStatus(response) {
  if(response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
    









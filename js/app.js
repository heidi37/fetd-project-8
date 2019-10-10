const container = document.getElementsByClassName("container")[1];

// Get the modal
var modal = document.getElementById("myModal");


var card = document.getElementsByClassName("card");



  

fetch('https://randomuser.me/api/?results=12&nat=us')
  .then(checkStatus)
  .then(response => response.json())
  .then(function (data) {
    generateCards(data.results);
    generateModals(data.results);
  })
  .catch(error => console.log('Looks like there was a problem', error))

  window.addEventListener('load', function () {
    container.addEventListener('click', (e) => {
      if (e.target.parentElement.parentElement.className === "card"
      || e.target.parentElement.className === "card"
      || e.target.className === "card") {
      
          modal.style.display = "block";
          //cardDiv.classList.add(`card-${id}`);
      }
    });
  });

  // Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


function generateCards(data) {
  for ( let i = 0; i < data.length; i++) {
  let html =
  `
  <div class="card">
  <img class="profile-image" src='${data[i].picture.large}' alt='${data[i].name.first} ${data[i].name.last}' />
  <div class="profile-text">
  <h3>${data[i].name.first} ${data[i].name.last}</h3>
  <p>${data[i].email}</p>
  <p>${data[i].location.city}</p>
  </div>
  </div>
  `;
  container.innerHTML += html;
  } 
};

function generateModals(data) {
  let i = 1;
  let html =
   `<div class="modal-content">
    <span class="close">&times;</span>
    <img class="profile-image" src='${data[i].picture.large}' alt='${data[i].name.first} ${data[i].name.last}' />
    <h3>${data[i].name.first} ${data[i].name.last}</h3>
    <p>${data[i].email}</p>
    <p>${data[i].location.city}</p>
    <hr>
    <p>${data[i].cell}</p>
    <p>${data[i].dob.date}</p>
    <p>${data[i].street} ${data[i].city}, ${data[i].state} ${data[i].postcode}</p>
    </div>
    </div>
  `;
  modal.innerHTML += html;
  
};




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
    









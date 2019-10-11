const container = document.getElementsByClassName("container")[1];

var card = document.getElementsByClassName("card");

var cardIndex;

// Get the modal
var modal = document.getElementById("myModal");
// var modalContent = document.getElementsByClassName("modal-content")[0];
// console.log(modalContent);

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
        if(e.target.id !== '') {
          cardIndex = e.target.id;
          return cardIndex;
        }
        if(e.target.parentElement.id !== '') {
          cardIndex = e.target.parentElement.id;
          return cardIndex;
        }
        if(e.target.parentElement.parentElement.id !== '') {
          cardIndex = e.target.parentElement.parentElement.id;
          return cardIndex;
        }
      }
    });
  });


  window.addEventListener('load', function () {
    container.addEventListener('click', (e) => {
      if (e.target.parentElement.parentElement.className === "card"
      || e.target.parentElement.className === "card"
      || e.target.className === "card") {
            modal.style.display = "block";
            // console.log(modal.children[cardIndex]);
            // modal.children.hide();
            // modal.children[cardIndex].show();
      }
    });
  });


//   Get the <span> element that closes the modal
// When the user clicks on <span> (x), close the modal

window.addEventListener('DOMContentLoaded', (event) => {
  modal.onclick = function() {
    modal.style.display = "none";
  };
});



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
  <div class="card" id="${[i]}">
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
  for ( let i = 0; i < data.length; i++) {
    let html =

   `<div class="modal-content">
    <span class="close">&times;</span>
    <img class="profile-image" src='${data[i].picture.large}' alt='${data[i].name.first} ${data[i].name.last}' />
    <h3>${data[i].name.first} ${data[i].name.last}</h3>
    <p>${data[i].email}</p>
    <p>${data[i].location.city}</p>
    <hr>
    <p>${data[i].cell}</p>
    <p>Birthday: ${data[i].dob.date.substring(5, 7)}/${data[i].dob.date.substring(8, 10)}/${data[i].dob.date.substring(0, 4)} </p>
    <p>${data[i].location.street.number} ${data[i].location.street.name}, ${data[i].location.city}, ${data[i].location.state} ${data[i].location.postcode}</p>
    </div>
    </div>
  `;
  modal.innerHTML += html;
  }
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
    









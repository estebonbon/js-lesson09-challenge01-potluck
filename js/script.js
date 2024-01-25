// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// This button is for the assign items
const assignButton = document.querySelector("assign");

//
const assignItems = document.querySelector("assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    addToList(guest);
  }
  updateGuestCount(); // calls on a function to calculate the total number of guests
  clearInput(); // calls on a function outside of itself
});

const clearInput = function () {
  guestInput.value = ""; // This is triggered for every knew guest input value, and returns it to _blank without disrupting the function.
};

const addToList = function (guest) {
  const listItem = document.createElement("li"); // In this function guest input is turned into the list
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  let guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide"); // Will cuase the button to dissapear.
    guestInput.classList.add("hide"); // Will no longer allow for information to be processed!
    guestInputLabel.classList.add("hide"); // Guest rid of the "ADD GUEST" text
    guestFull.classList.remove("hide"); // Removing the hide will show the alert pop-up
  }
};

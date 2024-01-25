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
const assignButton = document.querySelector(".assign");
//
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  //console.log(guest);
  const guest = guestInput.value;
  if (guest !== "") {
    addToList(guest);
    updateGuestCount(); // calls on a function to calculate the total number of guests
    clearInput(); // calls on a function outside of itself
  }
});

const addToList = function (guest) {
  const listItem = document.createElement("li"); // In this function guest input is turned into the list
  listItem.innerText = guest;
  guestList.append(listItem);
};

const clearInput = function () {
  guestInput.value = ""; // This is triggered for every knew guest input value, and returns it to _blank without disrupting the function.
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    addGuestButton.classList.add("hide"); // Will cuase the button to dissapear.
    guestInput.classList.add("hide"); // Will no longer allow for information to be processed!
    guestInputLabel.classList.add("hide"); // Guest rid of the "ADD GUEST" text
    guestFull.classList.remove("hide"); // Removing the hide will show the alert pop-up
  }
};

const assignItems = function () {
  // This is the list of items for the putlock
  const potluckItems = [
    "pasta",
    "hot dogs",
    "wedges",
    "tacos",
    "chilli",
    "stir fry",
    "salad",
    "watermelon",
    "meatballs",
    "rice",
    "strawberry shortcake",
    "soft drinks",
  ];

  const allGuests = document.querySelectorAll(".guest-list li"); // Try taking out the All after! This is extracting the names of the guest tha were inputed in the addToList.

  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length); // try taking out the .length
    let randomPotluckItem = potluckItems[randomPotluckIndex]; // In the value, add the item from the potluckItems array at the index position of randomPotluckIndex.

    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`; // The reason the inner text is being used is so it extract the actual text content, and no just the name of its html placeholder
    assignedItems.append(listItem); // assignedItems is linked to the html document responsible for displaying the list of assigned items.

    potluckItems.splice(randomPotluckIndex, 1); // Inside the method, remove the item at the randomPotluckIndex so it won’t be assigned to someone else:
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
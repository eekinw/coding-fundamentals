// When you click the Add button, the notification will pop up and notify the user that the item has been added.
// When clicking exit, the popup will disappear

const button = document.querySelector(".add__button");
const notification = document.querySelector(".notification")
const show = document.querySelector(".show")
const cta = document.querySelector(".cta__button");

// Event listener: Add popup button
button.addEventListener("click", openPopUp)

// Feature: Add pop up
// .notification will be added
function openPopUp() {
    // e.preventDefault()
   notification.classList.add("show");
}

// // Event listener for close button
cta.addEventListener("click", closePopUp)


// // Feature: close the pop up
function closePopUp() {
    // e.preventDefault()
    notification.classList.remove("show")
}
// When clicking on CTRL + K, command palette will open/close
const wrapper = document.querySelector(".wrapper")
const palette = document.querySelector(".palette")

// if the wrapper is displayed, hide it
// if not displayed, display block

// if display block, fade in
// if display none, fade out

document.addEventListener("keydown", (event) => {
  console.log("keydown", event)

  if(event.ctrlKey && event.key === "k"){
    event.preventDefault();
    wrapper.classList.replace("hidden","display")
    // palette.classList.replace("fade-out", "fade-in")
    palette.classList.toggle("fade-out")
    palette.classList.add("fade-in")

} else {
  wrapper.classList.replace("display", "hidden")
  palette.classList.toggle("fade-in")

}
}
)



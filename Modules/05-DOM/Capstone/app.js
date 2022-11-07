// Select the header element

const header = document.querySelector(".header")

// Step 1: check Scroll height of user on the website (done)
// Step 2: if user scrolled down after a certain height, hide nav bar, else show the header (done)
// Step 3: if user hovers around the top area, show the header (done)


// Event listener: Scroll 
window.addEventListener("scroll", () => {
    const reachHeader = header.scrollHeight;
    const scrolled = window.scrollY;
//height of header is 116 pixels
    // console.log(reachHeader)
    // console.log(headerHeight)
    if(scrolled > 116) {
        header.classList.add("hide")
    } else {
        header.classList.remove("hide")
    }
})


window.addEventListener("mousemove", e => {

    const height = e.clientY;


    console.log(height);
    if(height >= 105) {
        header.classList.add("appear")
    } else {
        header.classList.remove("appear")
    }
})

            




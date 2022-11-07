// When clicking the button, a new quote appears

const newQuote = document.querySelector(".quote")
const button = document.querySelector(".button")
const author = document.querySelector(".author")


const SOURCEAPI = "https://api.quotable.io/random"

// fetch the quotes from the API

async function getQuote() {
   const response = await fetch(SOURCEAPI)
   const data = await response.json()

   return data
   // newQuote.textContent = data.content
   // author.textContent = data.author

   
}

// window.addEventListener("load", async() => {
//    await getQuote()
// })

// button.addEventListener("click", async () => {
   
//    newQuote.textContent =  await getQuote()
//    // newQuote.innerHTML = randomQuote

// })

button.addEventListener("click", getQuote)

const nameText = document.querySelector("#name")
const ageText = document.querySelector("#age")
const hobbiesList = document.querySelector("#hobbies")
const button = document.querySelector(".button")

const SOURCEAPI = "https://gist.githubusercontent.com/eekinw/a54126c8473e1c32b3359ba37dfc7e17/raw/e04c19b1c48d613b7b3053e24931317c7ef1d306/me.json"

async function getData() {
    const response = await fetch(SOURCEAPI)
    const data = await response.json()

    // return JSON.parse(data.files["me.json"].content)
    return data
}

function displayData({name, age, hobbies }) {
    nameText.textContent = name
    ageText.textContent = age
    hobbies.forEach(hobby => {
        hobbiesList.innerHTML += `
        <li>${hobby}</li>
        `
    }) 
}

button.addEventListener("click", async () => {
    const data = await getData()

    displayData(data)
}, { once: true })




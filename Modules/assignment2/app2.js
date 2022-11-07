const API = "https://api.github.com/users/"

const image = document.querySelector("#user-image")
const userName = document.querySelector("#user-name")
const userBio = document.querySelector("#user-bio")
const joinDate = document.querySelector("#join-info")
const getForm = document.querySelector("#get-form")
const button = document.querySelector(".button")


getForm.addEventListener("click", async function(e) {
    e.preventDefault()

    const username = document.getElementById("text-input").value

    await fetch(API + username)
    .then((response) => response.json())
    .then((data) => {
        image.src = data.avatar_url
        userName.textContent = data.login

        if(data.bio === "") {
            userBio.textContent = "NULL"
        } else {
            userBio.textContent = data.bio
        }
        joinDate.textContent = `Joined on ${data.created_at.slice(0, 10)}`
    })

    .catch((error) => {
        console.log("Error")
    })




})




const API = "https://api.thecatapi.com/v1/breeds"


fetch(API).then((response) => {
    // console.log(data)

    return response.json()
}).then((completedata) => {
    // console.log(completedata);

    let data1 = "";
    completedata.map((data)=> {
        let catImage = data.image;
        let imageURL = "";
        if(catImage) {
            imageURL = catImage.url
        } else {
            imageURL = "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
        }
        // console.log(data.image)

        // debug by using console.log!!!
        data1 += ` 
        <div class="card">
        <img class="images" src="${imageURL}" alt="">
        <h2 class="name">${data.name}</h2>
        <p class="description">${data.description}</p>
        <button id="btn">
        <a href="${data.url}">Profile</a>
        </button>
    </div> `
    })

    document.getElementById("cards").innerHTML = data1;

}).catch((error) => {
    console.log(error)
})
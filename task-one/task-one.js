const button = document.querySelector("button");
const image = document.querySelector(".image-container")
button.onclick = () => {
    console.log("click")
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(reply => reply.json())
        .then(reply => {
            console.log(reply)
            image.innerHTML= `<img style="width: 500px; height: 500px; object-fit: contain;" src="${reply.message}">`
        })
}
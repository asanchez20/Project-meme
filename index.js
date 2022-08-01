document.addEventListener('DOMContentLoaded', () => {


const url = "http://localhost:3000/memes"

fetch(url)
.then(resp => resp.json())
.then(memes => renderMeme(memes))

const main = document.getElementById('main')

 // render function
 function renderMeme(memeArray){
    memeArray.forEach(meme => {
       const image = document.createElement("img")
       image.src = meme.image
       main.append(image) 
    })
 }
})
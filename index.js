document.addEventListener('DOMContentLoaded', () => {


const url = "https://api.imgflip.com/get_memes"

fetch(url)
.then(resp => resp.json())
.then(data => renderMeme(data.data))

const main = document.getElementById('main')

 // render function
 function renderMeme(memeArray){
    memeArray.forEach(meme => {
       const image = document.createElement("img")
       image.src = meme.url
       main.append(image) 
    })
 }
})
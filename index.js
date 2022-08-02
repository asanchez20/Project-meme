document.addEventListener('DOMContentLoaded', () => {


const url = "http://localhost:3000/memes"

fetch(url)
.then(resp => resp.json())
.then(memes => renderMeme(memes))

const main = document.getElementById('main')

 // render function
 function renderMeme(memeArray){
    memeArray.forEach(meme => {
      //create meme parts
      const memeHouse = document.createElement('div')
      const memeName = document.createElement('h2')
       const image = document.createElement("img")
       const upvoteBtn = document.createElement('button')
       const upvoteNum = document.createElement("p")
       const downvoteBtn = document.createElement('button')
       const downvoteNum = document.createElement("p")

       memeHouse.className = "card"
       memeName.textContent = meme.name 
       image.src = meme.image
       upvoteBtn.textContent = "Upvote"
       upvoteNum.textContent = meme.upVote
       downvoteBtn.textContent = "Downvote"
       downvoteNum.textContent = meme.downVote

       //Append to Dom
       upvoteNum.append(upvoteBtn)
       downvoteNum.append(downvoteBtn)
       memeHouse.append(memeName, image, upvoteNum, downvoteNum)
       main.append(memeHouse) 
    })
 }
})
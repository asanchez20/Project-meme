document.addEventListener('DOMContentLoaded', () => {


const url = "http://localhost:3000/memes"

fetch(url)
.then(resp => resp.json())
.then(memes => renderMeme(memes))

const main = document.getElementById('main')

 // render function
 function renderMeme(memeArray){
    memeArray.forEach(meme => {
      //Create Meme Parts
      const memeHouse = document.createElement('div')
      const memeName = document.createElement('h2')
       const image = document.createElement("img")
       const upvoteBtn = document.createElement('button')
       const upvoteNum = document.createElement("p")
       const downvoteBtn = document.createElement('button')
       const downvoteNum = document.createElement("p")
       const commentList = document.createElement('ul')

       //Comment Form
       const commentForm = document.createElement("form")
       const formLabel = document.createElement('label')
       formLabel.for = "comment"
       formLabel.textContent = "Add a Comment:"
       const formInput = document.createElement('input')
       formInput.type = "text"
       const submitBtn = document.createElement('button')
       submitBtn.label = "submit"
       submitBtn.textContent = "Submit"
       commentForm.append(formLabel, formInput, submitBtn)
       
      //Add Content
       memeHouse.className = "card"
       memeName.textContent = meme.name 
       image.src = meme.image
       upvoteBtn.textContent = "Upvote"
       upvoteNum.textContent = meme.upVote
       downvoteBtn.textContent = "Downvote"
       downvoteNum.textContent = meme.downVote

       //Button Event Listeners

       

       //Append to Dom
       upvoteNum.append(upvoteBtn)
       downvoteNum.append(downvoteBtn)
       memeHouse.append(memeName, image, upvoteNum, downvoteNum, commentList, commentForm)
       main.append(memeHouse) 
    })
 }
})
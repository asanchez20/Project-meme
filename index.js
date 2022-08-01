const url = "https://api.imgflip.com/get_memes"

fetch(url)
.then(resp => resp.json())
.then(console.log)
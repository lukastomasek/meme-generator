
const meme_name = document.getElementById('meme')
const meme_image = document.getElementById('meme-img')
const btn = document.getElementById('meme-btn')

const url = "https://api.imgflip.com/get_memes"

let id = 0


async function getRandomMeme(){
  try {
    let promise = await fetch(url)
    let content = await promise.json()

   
    if(content.success){
      meme_name.textContent = content.data.memes[id].name
      meme_image.src = content.data.memes[id].url
      id++
    }
  } catch (error) {
    console.log(error)
    return
  }
}


window.addEventListener('DOMContentLoaded', getRandomMeme)

btn.addEventListener('click', ()=>{
  getRandomMeme()
})
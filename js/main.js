import Utility from './classes/Utility.js'

const background = document.querySelector('main')
const meme_name = document.getElementById('meme')
const meme_image = document.getElementById('meme-img')
const btn = document.getElementById('meme-btn')

const url = "https://api.imgflip.com/get_memes"


// nullish coalescing operator
const name = null ?? "John"

console.log(name)

let id = 0

const Utils = new Utility()


async function getRandomMeme(){
  try {
    let promise = await fetch(url)
    let content = await promise.json()

   
    if(content.success){
      // meme_name.textContent = content.data.memes[id].name
      meme_image.src = content.data.memes[id].url
     
      id++
    }
  } catch (error) {
    console.log(error)
    return
  }
}

const randomColor = () =>{
  background.style.backgroundColor = Utils.getRandomPastelColor()
  background.style.color = Utils.getRandomColor()
  btn.style.backgroundColor = Utils.getRandomColor()
}


window.addEventListener('DOMContentLoaded', ()=>{
  getRandomMeme()
  randomColor()
})

btn.addEventListener('click', ()=>{
  getRandomMeme()
  randomColor()
})
class Utility{
  getRandomNum(maxNum){
    return Math.floor(Math.random() * maxNum)
  }
  getRandomColor(){
    const h = this.getRandomNum(360)
    const s = this.getRandomNum(100)
    const l = this.getRandomNum(100)

    return `hsl(${h}deg,${s}%,${l}%)`
  }
  getRandomPastelColor(){
    const h = this.getRandomNum(360)
    return `hsl(${h}deg,100%,90%)`
  }
  getRandomDarkColor(){
    const h = this.getRandomNum(360)
    return `hsl(${h}deg,50%,10%)`
  }
}

export default Utility
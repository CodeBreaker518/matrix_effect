const canvas = document.querySelector('#lienzo')
const canvasCtx = canvas.getContext('2d')

canvas.width = document.body.offsetWidth

const w = canvas.width
const h = canvas.height

canvasCtx.fillStyle = '#000'
canvasCtx.fillRect(0, 0, w, h)

const cols = Math.floor(w / 20) + 1
const position_y = Array(cols).fill(0)


const matrix = () => {
  canvasCtx.fillStyle = '#0001'
  canvasCtx.fillRect(0, 0, w ,h)

  canvasCtx.fillStyle = '#0f0'
  canvasCtx.font = '15pt monospace'
  position_y.forEach( (y, ind) => {
    const text = String.fromCharCode(Math.random() * 128)
    const x = ind * 20
    canvasCtx.fillText(text, x, y)
    if (y > 100 + Math.random() * 10000){
      position_y[ind] = 0
    }else{
      position_y[ind] = y + 20
    }
  })
}
setInterval(() => {
  matrix()
}, 50);
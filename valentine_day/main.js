import './style.css'

const buttonOk = `<button class="btn btn-danger btn-lg button-ok">Leszek</button>`
const buttonNever = `<button class="btn btn-secondary btn-lg button-never">Nem leszek</button>`
const label = '<h1 class="label-text">Leszel a valentinom?</h1>'

const newSpline = `<spline-viewer id="splineview" url="https://prod.spline.design/ZIpvESwQtwnlLLBi/scene.splinecode"></spline-viewer>`

const newGif = ` <div class="row gifLabel">
                  <div class="col" id="gif"></div>
                </div>`

var neverbtn = document.getElementById('neverbtn')
var okbtn = document.getElementById('okbtn')

document.getElementById('label').innerHTML = label;
document.getElementById('okbtn').innerHTML = buttonOk;
neverbtn.innerHTML = buttonNever;

neverbtn.firstChild.style.position = "fixed"
neverbtn.firstChild.style.right = "35%"

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function deleteSplineIcon() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      document.getElementById('splineview').shadowRoot.lastChild.children[3].remove()
    }, 250)
  }
}

//shadowRoot.lastChild.children[3].remove()
document.getElementById('splineview')

deleteSplineIcon()

neverbtn.firstChild.addEventListener("click", () => {
  neverbtn.firstChild.style.right = getRandomInt(90) + "%"
  neverbtn.firstChild.style.top = getRandomInt(90) + "%"
})

okbtn.firstChild.addEventListener("click", () => {
  document.getElementById('splineview').remove()
  document.body.innerHTML = newSpline + document.body.innerHTML
  deleteSplineIcon()
  document.getElementById('app').innerHTML = newGif

})







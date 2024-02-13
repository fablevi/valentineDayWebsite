import './style.css'

const buttonOk = `<button class="btn btn-danger btn-lg button-ok">Leszek</button>`
const buttonNever  = `<button class="btn btn-secondary btn-lg button-never">Nem leszek</button>`
const label = '<h1 class="label-text">Leszel a valentinom?</h1>'

//document.getElementById('app').innerHTML = label + buttonOk + buttonNever;

//buttonNever.style.position = "fixed"
//buttonNever.style.right = "40%"

var neverbtn = document.getElementById('neverbtn')

document.getElementById('label').innerHTML = label;
document.getElementById('okbtn').innerHTML = buttonOk;
neverbtn.innerHTML = buttonNever;

neverbtn.firstChild.style.position = "fixed"
neverbtn.firstChild.style.right = "35%"

var width, height;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//shadowRoot.lastChild.children[3].remove()
document.getElementById('splineview')

for (let i = 0; i < 5; i++) {
  try{
    setTimeout(() => {
      document.getElementById('splineview').shadowRoot.lastChild.children[3].remove()
    },500)
  }catch(e){

  }
}

neverbtn.firstChild.addEventListener("click", () => {
  neverbtn.firstChild.style.right = getRandomInt(90) +"%"
  neverbtn.firstChild.style.top = getRandomInt(90) +"%"
})




import './style.css'

const buttonOk = `<button class="btn btn-danger btn-lg button-ok">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hearts" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"/>
</svg>
Leszek
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hearts" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"/>
</svg>
</button>`
const buttonNever = `<button class="btn btn-secondary btn-lg button-never">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
  <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
</svg>
Nem leszek
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
  <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
</svg>
</button>`
const label = '<h1 class="label-text">Leszel a valentinom?</h1>'

const newSpline = `<spline-viewer id="splineview" url="https://prod.spline.design/ZIpvESwQtwnlLLBi/scene.splinecode"></spline-viewer>`

const newGif = ` <div class="row gifLabel">
                  <div class="col gifcol" id="gif">
                  <img src="./love.gif" class="gif" alt="This is an animated gif image, but it does not move"/>
                  <h1>
                  <svg xmlns="http://www.w3.org/2000/svg" style="fill:#ff2a2a"  width="32" height="32" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg>
                  Én is a tiéd
                  <svg xmlns="http://www.w3.org/2000/svg" style="fill:#ff2a2a"  width="32" height="32" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
                </svg>            
                  </h1>
                  </div>
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







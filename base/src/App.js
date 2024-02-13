import './App.css';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {

  }, [])

  const [right, setRight] = useState("35%");
  const [top, setTop] = useState();

  const [changeState,setChangeState] = useState(true);

  function neverbutton() {
    setRight(getRandomInt(90) + "%")
    setTop(getRandomInt(90) + "%")
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



  const firstState = <>
    <div id="app" class="container-fluid">
      <div class="row label">
        <div class="col" id="label">
          <h1 class="label-text">Leszel a valentinom?</h1>
        </div>

      </div>
      <div class="row buttonrow">
        <div class="col" id="okbtn">
          <button class="btn btn-danger btn-lg button-ok">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hearts" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358" />
            </svg>
            Leszek
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-hearts" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358" />
            </svg>
          </button>
        </div>
        <div class="col" id="neverbtn">
          <button class="btn btn-secondary btn-lg button-never" onClick={neverbutton} style={{ position: "fixed", right: right, top: top }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
              <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77" />
            </svg>
            Nem leszek
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heartbreak-fill" viewBox="0 0 16 16">
              <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </>


  return (
    <div className="App">
      {changeState?firstState:null}
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { Cards } from './components/Cards'
import { Profile } from './components/Profile'
import data from './data.json'

function App() {

  const bgColor = {
    Work: 'bg-Light__red',
    Play: 'bg-Soft_blue',
    Study: 'bg-Light_red',
    Exercise: 'bg-Lime_green',
    Social: 'bg-Violet',
    'Self-Care': 'bg-Soft_orange'
  }

  const [valor, setValor] = useState("weekly");

  function handleClick(e) {
    if (e.target.tagName === 'SPAN') {
      setValor(e.target.textContent.toLowerCase());
    }
  }

  return (
    <>
      <Profile
        img='./image-jeremy.png'
        name='Jeremy Robson'
        evento={handleClick}
        valor={valor}
      />
      {data.map((element) =>
        <Cards
          key={element.title}
          title={element.title.replace('-', ' ')}
          current={element.timeframes[valor].current}
          previous={element.timeframes[valor].previous}
          img={`./icon-${element.title.toLowerCase()}.svg`}
          bgColor={bgColor[element.title]}
          valor={valor}
        />
      )}
    </>
  )
}

export default App

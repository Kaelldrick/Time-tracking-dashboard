import '../styles/Cards.css'

export function Cards({ title, current, previous, img, bgColor, valor }) {
  function eleccion() {
    if (valor === 'daily') {
      return `Day`
    } else if (valor === 'weekly') {
      return `Week`
    } else {
      return `Month`
    }
  }

  return (
    <div className={`card ${bgColor}`} style={{ backgroundImage: `url(${img})` }}>
      <div className='card__content'>
        <div className='card__flex'>
          <h2 className='card__title' >{title}</h2>
          <img className='card__img' src="./icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <div className='card__numbers'>
          <p className='card__current'>{current}hrs</p>
          <p className='card__previous'>Last {eleccion()} - {previous}hrs</p>
        </div>
      </div>
    </div>
  )
}
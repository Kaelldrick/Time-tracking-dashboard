import { AnimatePresence, motion } from 'framer-motion';
import '../styles/Cards.css'

export function Cards({ title, current, previous, img, bgColor, valor }) {
  console.log(valor)

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
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            key={valor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`card__numbers ${title}`}
          >
            <p className='card__current'>{current}hrs</p>
            <p className='card__previous'>Last {eleccion()} - {previous}hrs</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div >
  )
}
import '../styles/Profile.css'

export function Profile({ img, name, evento, valor }) {
  return (
    <div className="profile">
      <div className='profile__content'>
        <img className='profile__img' src={img} alt="" />
        <p className='profile__name'>Report for <span>{name}</span></p>
      </div>
      <ul className='profile__list' onClick={evento}>
        <li className='profile__item'><span className={`${valor === 'daily' && 'active'}`}>Daily</span></li>
        <li className='profile__item'><span className={`${valor === 'weekly' && 'active'}`}>Weekly</span></li>
        <li className='profile__item'><span className={`${valor === 'monthly' && 'active'}`}>Monthly</span></li>
      </ul>
    </div>
  )
}

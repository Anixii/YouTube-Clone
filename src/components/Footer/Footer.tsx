import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={'footer'}>
        <div className={'footer__container'}> 
            <Link target='_blank' className='footer__link' to={'https://my-portfolio-anixii.vercel.app/'}>©Made by Anixii</Link>
        </div>
    </footer>
  )
}

export default Footer
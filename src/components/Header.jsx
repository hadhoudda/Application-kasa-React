import logo from '../assets/logo.webp'
import '../style/Header.css'

function Header(){
    return (
        <div className='header'>
            <img src={logo} className='logo' alt='logo de kasa' />
            <ul className='list-header'>
                <li><a href="home.html">Accueil</a></li>
                <li><a href="A-propos.html">A Propos</a></li>
            </ul>
        </div>
    )
}

export default Header
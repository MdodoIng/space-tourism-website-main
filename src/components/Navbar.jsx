import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoIcon from '../assets/shared/logo.svg'
import close from '../assets/shared/icon-close.svg'
import menu from '../assets/shared/icon-hamburger.svg'
import { navLinks } from "../content/data";


const Navbar = () => {
  const [navActive, setNaveActive] = useState('HOME')
  const [toggleOn, setToggleOn] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/')
    if (window.innerWidth <= 640) {
      setToggleOn(true)
    }
  }, []);

  const sates = (e) => {
    const value = e.target.id
    setNaveActive(value)
  }

  return (
    <nav className='navContainer'>
      <div className='navLogo'>
        <Link to='/'>
          <img src={logoIcon} alt="logo" />
        </Link>
      </div>
      <div>
        <div className={toggleOn ? 'none navBarMob' : 'navBarMob'} />
        <Link>
          <img className='menuBtn' onClick={() => setToggleOn(!toggleOn)} src={toggleOn ? menu : close} alt="" />
        </Link>
      </div>
      <div className={toggleOn ? "none  navLinks" : 'navLinks'}>
        {navLinks.map((item) => {

          const k = item.NavText === navActive
          return (

            <Link key={item.id} to={item.link}
              onClick={() => setToggleOn(true)}>
              <p id={item.NavText} className={k ? 'active navText' : 'navText'} onClick={sates}>
                <span className='naveSpan'>{item.span}</span>&nbsp;{item.NavText}</p>
            </Link>
          )
        }

        )}
      </div>
    </nav>
  )
};

export default Navbar;

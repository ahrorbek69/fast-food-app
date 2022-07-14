import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'reactstrap'
import logo from '../../assets/svg/fastFood001.svg'

const Header = () => {

        const nav__links = [
            {
                display: 'Home',
                paht: '/home'
            },
            {
                display: 'Foods',
                paht: '/foods'
            },
            {
                display: 'Cart',
                paht: '/cart'
            },
            {
                display: 'Contact',
                paht: '/contact'
            }
        ]


  return <header className="header">
    <Container>
        <div className="nav__wrapper">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <h5>Tasty treat</h5>
        </div>

        {/* ========== menu ========== */}
        <div className="navigation">
            <div className="menu">

                {
                    nav__links.map((i,index)=>(
                        <NavLink className='logo__svg' key={index} to={i.paht}>{i.display}</NavLink>
                    ))
                }

            </div>
        </div>

    </Container>
  </header>
}

export default Header
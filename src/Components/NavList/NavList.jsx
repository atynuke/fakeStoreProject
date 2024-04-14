import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavList.css'


const NavList = () => {
    // const 
    return (
        <div>

            <div className='NavDiv'>
                <h1 className='StoreName'> FaithStore </h1>

                <nav id='nav'>

                    <NavLink to={'/home'}>
                        <a href="">Home</a>
                    </NavLink>

                    <NavLink to={'/service'}>
                        <a href="">Service</a>
                    </NavLink>
                    <div id='img1'> 
                    <img src="./src/assets/account.png" alt="" height={15} width={20} />
                    </div>
                    <NavLink>
                        <a id='Acc' href="">Account</a>
                    </NavLink>
                    <div id='cart'> 
                    <img src="./src/assets/shopping-cart-svg-png-icon.png" alt="" height={15} width={20} />
                    </div>
                    <NavLink>
                        <a id='C' href="">Cart</a>
                    </NavLink>
                </nav>
            </div>


        </div>
    )
}

export default NavList

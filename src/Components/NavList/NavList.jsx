import React from 'react'
import { Link } from 'react-router-dom'

const NavList = () => {
    return (
        <div>

            <div className='NavDiv'>
                <h1 className='StoreName'> FaithStore </h1>

                <nav id='nav'>

                    <Link to={'/home'}>
                        <a href="">Home</a>
                    </Link>

                    <Link to={'/service'}>
                        <a href="">Service</a>
                    </Link>
                    <div id='img1'> 
                    <img src="./src/assets/account.png" alt="" height={15} width={20} />
                    </div>
                    <Link>
                        <a id='Acc' href="">Account</a>
                    </Link>
                    <div id='cart'> 
                    <img src="./src/assets/shopping-cart-svg-png-icon.png" alt="" height={15} width={20} />
                    </div>
                    <Link>
                        <a id='C' href="">Cart</a>
                    </Link>
                </nav>
            </div>


        </div>
    )
}

export default NavList

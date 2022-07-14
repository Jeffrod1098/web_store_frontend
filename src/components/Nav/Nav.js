import './Nav.css'
import 'bulma/css/bulma.css'
import { FaTshirt, FaShoppingCart} from 'react-icons/fa'

const Nav = () => {
    return (
        <div>
            <nav className='navbar is-warning is-fixed-top' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a href='/' className='navbar-item'>
                    <FaTshirt/>
                    TEE-CLUB
                    </a>

                    {/* <a class="navbar-item">
                    Explore
                    </a>

                    <a class="navbar-item">
                    Documentation
                    </a> */}

                    <a
                    role='button'
                    className={'navbar-burger burger'}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                    >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    </a>
                </div>
                <div id='navbarBasicExample' className='navbar-menu'>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-light">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                                <a>
                                    <FaShoppingCart/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
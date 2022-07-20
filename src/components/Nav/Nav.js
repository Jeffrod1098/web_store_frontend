import './Nav.css'
import 'bulma/css/bulma.css'
import { FaTshirt, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className='navbar is-warning is-fixed-top' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand'>
                    <a href='/' className='navbar-item'>
                    <FaTshirt/>
                    T-CLUB
                    </a>

                    <div class="navbar-item">
                    <Link to='/postT'>
                    POST A T
                    </Link>
                    </div>



                </div>
                <div id='navbarBasicExample' className='navbar-menu'>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <div className='button is-light'>
                                <Link to='/signUp'>
                                        <strong>Sign up</strong>
                                </Link>
                                </div>


                                    <div className="button is-light">
                                    <Link to='/login'>
                                        Log in
                                </Link>
                                    </div>
  
                                <div>
                                    <FaShoppingCart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
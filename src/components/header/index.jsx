import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/logoimg.png'
import '../../assets/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return(
        <Navbar className='bg-white position-sticky top-0 start-0 z-3'>
            <div className="container text-center bg-white">
                <div className="row w-100">
                    <div className="col-md-4">
                        <Nav className=''><a href="#" className='d-inline-block d-md-inline mx-auto mx-md-0'><img src={logo} alt="error" height={80}/></a></Nav>
                    </div>
                    <div className="col-md-4 text-center">
                        <Nav className='text-center d-block' href='#'><h4>Fresh Indian food</h4><p>Order online . Free delivery . 40-45min</p></Nav>
                    </div>
                    <div className="col-md-4 text-center">
                        <Nav className='text-end d-block pt-2'>
                            <FontAwesomeIcon icon={faCartShopping} color='blue' size='2x'/>
                        </Nav>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}
export default Header;
import { Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/logoimg.png'
import '../../assets/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const Header = ({ cart }) => {
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar className='bg-white position-sticky top-0 start-0 z-3'>
      <div className="container text-center bg-white">
        <div className="row w-100">
          <div className="col-md-4">
            <Nav><a href="#" className='d-inline-block d-md-inline mx-auto mx-md-0'>
              <img src={logo} alt="error" height={80}/>
            </a></Nav>
          </div>
          <div className="col-md-4 text-center">
            <Nav className='text-center d-block' href='#'>
              <h4>Fresh Indian food</h4>
              <p>Order online . Free delivery . 40-45min</p>
            </Nav>
          </div>
          <div className="col-md-4 text-center position-relative">
            <Nav className='text-end d-block pt-2 position-relative'>
              <FontAwesomeIcon icon={faCartShopping} color='blue' size='2x'/>
              {itemCount > 0 && (
                <span className="cart-count badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                  {itemCount}
                </span>
              )}
            </Nav>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
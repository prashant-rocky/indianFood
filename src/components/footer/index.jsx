import '../../assets/style.css'
import logo from '../../assets/logoimg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return(
        <footer>
            <div className="container py-3 text-center">
                <div className="row text-start">
                     <div className="col-md-3">
                        <div className="footerLogo">
                            <img src={logo} alt="error" height={80} />
                            <p className='text-white'>our company delever the food in 30 minutes. just one click and connect with us for quick delivery.</p>
                        </div>
                     </div>
                     <div className="col-md-3">
                        <h5 className='text-primary'>Quick link</h5>
                        <p><a href="#" className='text-white'>our menu</a></p>
                        <p><a href="#" className='text-white'>About Us</a></p>
                        <p> <a href="#" className='text-white'>Contact</a></p>
                     </div>
                     <div className="col-md-3 text-white">
                        <h5 className='text-primary'>Contact Info</h5>
                        <p>  <FontAwesomeIcon icon={faMailBulk}/> p3532490@gmail.com</p>
                        <p> <FontAwesomeIcon icon={faPhone}/> +91 9724863041</p>
                        <p>  <FontAwesomeIcon icon={faLocation}/> dwarka mor, new delhi</p>
                     </div>
                     <div className="col-md-3">
                        <h5 className='text-primary'>Legal</h5>
                        <p><a href="#" className='text-white'>Privacy Policy</a></p>
                        <p><a href="#" className='text-white'>Terms & condition</a></p>
                     </div>
                </div>
                <hr />
                <p className='text-white'>© 2025 India Food. All rights reserved. | Cash on Delivery Only</p>
            </div>
        </footer>
    )
}
export default Footer;
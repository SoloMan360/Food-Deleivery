import '../../css/FooterComponent.css'
import headerLogo from '../../assets/Images/darktheme-logo.png';
import mastercard from '../../assets/Images/mastercard.png';
import paypal from '../../assets/Images/paypal.png';
import visacard from '../../assets/Images/visacard.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
const FooterComponent = () => {
    return (
        <div className='footer-container'>
            <div className="row">
                <div className="col-md-4 footer-container-one">
                    <div>
                        <img src={headerLogo} alt="" />
                    </div>
                    <div>
                        <ul className='list-one'>
                            <li>
                                <span><LocationOnOutlinedIcon /></span>36 Hemberge, Newyork </li>
                            <li>
                                <span><HeadsetMicOutlinedIcon /></span>815-554-983</li>
                            <li>
                                <span><EmailOutlinedIcon /></span>santhoshvj@81gmail.com</li>
                            <li>
                                <span><AccessTimeOutlinedIcon /></span>10:00 - 18:00, Mon - Fri</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8 footer-container-two">
                    <div className='row'>
                        <div className="col-md-4">
                            <h6 className='list-header'>Account</h6>
                            <ul className='list-one link-list'>
                                <li>Login</li>
                                <li>View Cart</li>
                                <li>My Order</li>
                                <li>New Product</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6 className='list-header'>Company</h6>
                            <ul className='list-one link-list'>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Help</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6 className='list-header'>Payment Methods</h6>
                            <div className='payment-box'>
                                <img src={mastercard} alt="" />
                            </div>
                            <div className='payment-box'>
                                <img src={visacard} alt="" />
                            </div>
                            <div className='payment-box'>
                                <img src={paypal} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default FooterComponent;
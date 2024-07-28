import Dialog from '@mui/material/Dialog';
import { Button, Checkbox, IconButton } from '@mui/material';
import '../../css/SignUpDialog.css'
import Slider from 'react-slick';
import ggImage from '../../assets/Images/gg-png.png'
import headerLogo from '../../assets/Images/darktheme-logo.png';
import birayani from '../../assets/Images/briyani-logo-removebg.png'
import meals from '../../assets/Images/meals-text.png'
import pizza from '../../assets/Images/pizza-text.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';

const SignUpDialog = ({ handleSignupOpen, handleSignupClose, isDialogOpen }) => {
    const [isLoginPage, setIsLoginPage] = useState(true)
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000000,
    };
    const handleLoginToggle = () => {
        setIsLoginPage(!isLoginPage);
    };
    return (
        <div>
            <Dialog
                disableBackdropClick
                open={isDialogOpen}
                keepMounted
                onClose={handleSignupClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {/* <div>
                    <Dialog
                        disableBackdropClick
                        open={isDialogOpen}
                        keepMounted
                        onClose={handleSignupClose}
                        aria-describedby="alert-dialog-slide-description"
                        className={`signup-dialog ${isLoginPage ? 'login-page' : 'signup-page'}`}
                    >
                        <div className="signup-container">
                            <div className="signup-slider-container">
                                <Slider {...settings}>
                                    <div>
                                        <img src={birayani} alt="Image 1" style={{ width: '100%' }} />
                                    </div>
                                    <div>
                                        <img src={meals} alt="Image 2" style={{ width: '100%' }} />
                                    </div>
                                    <div>
                                        <img src={pizza} alt="Image 3" style={{ width: '100%' }} />
                                    </div>
                                </Slider>
                            </div>
                            <div className={`signup-content ${isLoginPage ? 'slide-out' : 'slide-in'}`}>
                                <div className='login-here-msg'>
                                    <span>Already have an account? </span> <span className='login-text' onClick={handleLoginToggle}>Login</span>
                                </div>
                                <div className='signup-form'>
                                    <h3>Create account</h3>
                                    <div className='field-container'>
                                        <label htmlFor="">Username</label>
                                        <input type="text" />
                                    </div>
                                    <div className='field-container'>
                                        <label htmlFor="">Lastname</label>
                                        <input type="text" />
                                    </div>
                                    <div className='field-container'>
                                        <label htmlFor="">Email</label>
                                        <input type="text" />
                                    </div>
                                    <div className='field-container'>
                                        <label htmlFor="">Enter password</label>
                                        <input type="password" />
                                    </div>
                                    <div className='field-container'>
                                        <label htmlFor="">Confirm password</label>
                                        <input type="password" />
                                    </div>
                                    <div className='checkbox-container'>
                                        <Checkbox />
                                        <span className='agree-message'><span style={{ opacity: '0.6' }}> I agree to the</span> <span className='term-message'>Terms & Conditions</span></span>
                                    </div>
                                    <Button variant="contained" className="create-account-btn">Create account</Button>
                                    <Button variant="outlined" className="google-button">
                                        <img src={ggImage} alt="google-image" /><span>Continue with Google</span>
                                    </Button>
                                    <Button variant="outlined" className="fb-button">
                                        <FacebookIcon /><span>Continue with Facebook</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </div> */}
                {isLoginPage === false ?
                    <div className={`signup-container row ${isLoginPage ? 'login-page' : 'signup-page'}`}>
                        <div className="signup-container-one col-md-6">
                            <div className='w-100 d-flex justify-content-start'>
                                <div className='logo-image-container'><img src={headerLogo} alt="Logo" style={{ height: '52px' }} /></div>
                            </div>
                            <Slider {...settings}>
                                <div>
                                    <img src={birayani} alt="Image 1" style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <img src={meals} alt="Image 2" style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <img src={pizza} alt="Image 3" style={{ width: '100%' }} />
                                </div>
                            </Slider>
                        </div>
                        <div className="signup-container-two col-md-6">
                            <div className='login-here-msg'>
                                <span>Already have an account? </span> <span className='login-text' onClick={handleLoginToggle}>Login</span>
                            </div>
                            <div className='sigunp-content'>
                                <h3>
                                    Create account
                                </h3>
                                <div className='d-flex field-container mt-3'>
                                    <div className='firstname-field'>
                                        <label htmlFor="">Username</label>
                                        <br />
                                        <input type="text" />
                                    </div>
                                    <div className='lastname-field'>
                                        <label htmlFor="">Lastname</label>
                                        <br />
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='mt-2 field-container'>
                                    <div className='firstname-field'>
                                        <label htmlFor="">Email</label>
                                        <br />
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='mt-2 d-flex field-container'>
                                    <div className='firstname-field'>
                                        <label htmlFor="">Enter password</label>
                                        <br />
                                        <input type="password" />
                                    </div>
                                    <div className='firstname-field'>
                                        <label htmlFor="">Confirm password</label>
                                        <br />
                                        <input type="password" />
                                    </div>
                                </div>
                                <div className='mt-3 checkbox-container'>
                                    <Checkbox />
                                    <span className='agree-message'><span style={{ opacity: '0.6' }}> I agree to the</span> <span className='term-message'>Terms & Conditions</span></span>
                                </div>
                                <div className="mt-4 w-100">
                                    <Button variant="contained" className="w-100"> Create account</Button>
                                </div>
                                <div className="mt-4 w-100 d-flex flex-row align-items-center">
                                    <div className='divider'></div>
                                    <div className='or-msg'>or </div>
                                    <div className='divider'></div>
                                </div>
                                <div className="mt-4 w-100">
                                    <Button variant="outlined" className="w-100 google-button">
                                        <img src={ggImage} alt="goole-image" /><span>Continue with Google</span> </Button>
                                </div>
                                <div className="mt-3 w-100 ">
                                    <Button variant="outlined" className="w-100 fb-button">
                                        <FacebookIcon /><span>Continue with Facebook</span></Button>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className={`signup-container row ${isLoginPage ? 'login-page' : 'signup-page'}`}>
                        <div className="signup-container-two col-md-6">
                            <div className='login-here-msg'>
                                <span>Don't have an account? </span> <span className='login-text' onClick={handleLoginToggle}>Register Here</span>
                            </div>
                            <div className='sigunp-content'>
                                <h3>
                                    Welcome Back!
                                </h3>
                                <div className='field-container mt-3'>
                                    <div className='firstname-field'>
                                        <label htmlFor="">Username</label>
                                        <br />
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className='mt-2 field-container'>
                                    <div className='firstname-field'>
                                        <label htmlFor="">Enter password</label>
                                        <br />
                                        <input type="password" />
                                    </div>
                                </div>
                                <div className='mt-3 checkbox-container'>
                                    <Checkbox />
                                    <span className='agree-message'><span style={{ opacity: '0.6' }}> I agree to the</span> <span className='term-message'>Terms & Conditions</span></span>
                                </div>
                                <div className="mt-4 w-100">
                                    <Button variant="contained" className="w-100"> Login</Button>
                                </div>
                                <div className="mt-4 w-100 d-flex flex-row align-items-center">
                                    <div className='divider'></div>
                                    <div className='or-msg'>or </div>
                                    <div className='divider'></div>
                                </div>
                                <div className="mt-4 w-100">
                                    <Button variant="outlined" className="w-100 google-button">
                                        <img src={ggImage} alt="goole-image" /><span>Continue with Google</span> </Button>
                                </div>
                                <div className="mt-3 w-100 ">
                                    <Button variant="outlined" className="w-100 fb-button">
                                        <FacebookIcon /><span>Continue with Facebook</span></Button>
                                </div>
                            </div>
                        </div>
                        <div className="signup-container-one col-md-6">
                            <div className='w-100 d-flex justify-content-start'>
                                <div className='logo-image-container'><img src={headerLogo} alt="Logo" style={{ height: '52px' }} /></div>
                            </div>
                            <Slider {...settings}>
                                <div>
                                    <img src={birayani} alt="Image 1" style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <img src={meals} alt="Image 2" style={{ width: '100%' }} />
                                </div>
                                <div>
                                    <img src={pizza} alt="Image 3" style={{ width: '100%' }} />
                                </div>
                            </Slider>
                        </div>

                    </div>}

            </Dialog>
        </div>
    )
}
export default SignUpDialog
import { Button } from '@mui/material';
import '../../css/HomeComponent.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const HomeComponent = () => {
    return (
        <div className="home-page">
            <div className='d-flex flex-column justify-content-between align-items-center w-100 page-contaiener pt-5'>
                <div className='quotes-container'>
                    <div className='main-title-one'>Your favorite food, <br />  delivered with love
                    </div>
                    <div>Enjoy delicious meals delivered right to your doorstep with our fast and reliable food delivery app. Choose from a wide variety of your favorite restaurants and cuisines, and experience the convenience of eating well without leaving home. Our friendly delivery team ensures your food arrives fresh and on time.
                    </div>
                    <div className='toggle-container'>
                        <Button className='toggle-button' endIcon={<ArrowForwardIcon />}>
                            Explore Products
                        </Button>
                    </div>
                </div>
                <div>
                    Image
                </div>
            </div>

        </div>
    )
}
export default HomeComponent;
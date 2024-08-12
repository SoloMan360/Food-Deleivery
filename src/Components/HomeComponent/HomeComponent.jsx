import { Button } from '@mui/material';
import '../../css/HomeComponent.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import salsaBottle from '../../assets/Images/salsa-bottle.png'
import pestroBootle from '../../assets/Images/pestro-bootle.png'
import tartar from '../../assets/Images/tartar.png'
import { Link } from 'react-router-dom';
const HomeComponent = () => {
    const cards = [
        { name: 'Pesto', price: '28.50$', image: pestroBootle, description: 'Pesto beloved for its rich flavor and versatility in pasta, sandwiches, and grilled vegetables.' },
        { name: 'Oyster', price: 'Out of stock', image: salsaBottle, description: 'Oysters, prized delicacies of the sea, offer a taste of briny sweetness and a tender texture.' },
        { name: 'Salsa', price: '14.49$', image: tartar, description: 'Salsa, a vibrant medley of tomatoes, onions, and peppers, adding a zesty flair to any dish.' },
        // { name: 'Tartar', price: '22.99$', image: '/path/to/tartar.jpg', description: 'Tartar sauce, a tangy companion to seafood, adding rich flavors to every bite.' },
    ]
    return (
        <div className="home-page">
            <div className='d-flex flex-column align-items-center w-100 page-contaiener'>
                <div className='quotes-container'>
                    <div className='main-title-one'>Your favorite food, <br />  delivered with love
                    </div>
                    <div className='second-quote'>Enjoy delicious meals delivered right to your doorstep with our fast and reliable food delivery app. Choose from a wide variety of your favorite restaurants and cuisines, and experience the convenience of eating well without leaving home. Our friendly delivery team ensures your food arrives fresh and on time.
                    </div>
                    <div className='toggle-container'>
                        <Button className='toggle-button' component={Link} to="/explore" endIcon={<ArrowForwardIcon />}>
                            Explore Products
                        </Button>
                    </div>
                </div>
                <div className='home-card-wrapper d-flex justify-content-between'>
                    {cards.map((card, index) => (
                        <div key={index} className={`home-card-container cardBox-${index}`} >
                            <div className='card-content'>
                                <div className='d-flex justify-content-between mb-3'>
                                    <div className='card-title'>
                                        {card.name}
                                    </div>
                                    <div className={`card-price outof-price-${index}`}>{card.price}</div>
                                </div>
                                <div className='card-image'>
                                    <img src={card.image} alt={card.name} />
                                </div>

                                <div className='card-description'>{card.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className='home-card-wrapper d-flex justify-content-between'>
                    {card.map((item, index) => (
                        <div className='home-card-container'>
                        </div>
                    ))}

                </div> */}
            </div>

        </div>
    )
}
export default HomeComponent;
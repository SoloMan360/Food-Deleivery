import { useRef, useState } from 'react';
import '../../css/ExploreComponent.css'
import { Button, IconButton, Rating } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import vegetables from '../../assets/Images/vegetables.png'
import fish from '../../assets/Images/fish.png'
import cake from '../../assets/Images/cake.png'
import cheese from '../../assets/Images/cheese.png'
import drinks from '../../assets/Images/drinks.png'
import eggs from '../../assets/Images/eggs.png'
import fruit from '../../assets/Images/Fruit.png'
import meat from '../../assets/Images/meat.png'
import milk from '../../assets/Images/milk.png'
import veg from '../../assets/Images/veg.png'
import panegg from '../../assets/Images/panegg.png'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FooterComponent from '../FooterComponent/FooterComponent';
import productDetails from '../ProductJson/product.json'
import { useInView } from 'react-intersection-observer';
const ExploreComponent = () => {
    const categories = [
        { name: 'Vegetable', img: vegetables },
        { name: 'Seafood', img: fish },
        { name: 'Eggs', img: eggs },
        { name: 'Baking', img: cake },
        { name: 'Cheese', img: cheese },
        { name: 'Fresh Fruit', img: fruit },
        { name: 'Meat', img: meat },
        { name: 'Milk', img: milk },
        { name: 'Drinks', img: drinks },
    ];
    const categoryContainerRef = useRef(null);
    const scroll = (scrollOffset) => {
        console.log(scrollOffset, 'scrollOffset')
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollLeft += scrollOffset;
        }
    };
    const getClassName = (label) => {
        let className = '';
        if (label === 'Hot') {
            className = 'label-hot';
        }
        else if (label === 'New') {
            className = 'label-new';
        }
        else if (label === 'Out of Stock') {
            className = 'label-outof-stock';
        }
        else if (label === '10% off') {
            className = 'label-offer';
        }
        else if (label === 'Limited') {
            className = 'label-limited';
        }
        return className;
    };
    const getCategory = () => {
        if (selectedProducts === 'Vegetable') {
            return productDetails.productVegetable;
        }
        else if (selectedProducts === 'Seafood') {
            return productDetails.seaFoodProducts;
        }
        else if (selectedProducts === 'Eggs') {
            return productDetails.EggsProducts;
        }
        else if (selectedProducts === 'Baking') {
            return productDetails.bakingProducts;
        }
        else if (selectedProducts === 'Cheese') {
            return productDetails.cheeseProducts;
        }
        else if (selectedProducts === 'Fresh Fruit') {
            return productDetails.fruitProducts;
        }
        else if (selectedProducts === 'Meat') {
            return productDetails.meatProducts;
        }
        else if (selectedProducts === 'Milk') {
            return productDetails.milkProducts;
        }
        else if (selectedProducts === 'Drinks') {
            return productDetails.drinkProducts;
        }
        else {
            return productVegetable;
        }

    }
    const getSeleceted = (category) => {
        if (category === selectedProducts) {
            return 'selected-category'
        }
        else {
            return ''
        }
    }
    const [selectedProducts, isSelectedProducts] = useState('Vegetable');
    const { ref: mainText1, inView: mainText1View } = useInView({
        triggerOnce: false,  // Animation triggers only once
        threshold: 0.3     // Trigger when 10% of the element is visible
    });
    const { ref: mainText2, inView: mainText2View } = useInView({
        triggerOnce: false,  // Animation triggers only once
        threshold: 0.3     // Trigger when 10% of the element is visible
    });
    return (
        <>
            <div className='explore-page'>
                <div className='explore-page-one'>
                    <div className='products-container d-flex'>
                        <div className={`container-one slide-in-left ${mainText1View ? 'visible' : ''}`} ref={mainText1}>
                            {/* data-aos="fade-right" */}
                            <div className='text-part d-flex flex-column align-items-center justify-content-center'>
                                <h3>
                                    Everyday fresh & clean with our products
                                </h3>
                                <Button variant="contained" className='shopping-btn-one' startIcon={<ShoppingBagOutlinedIcon />}>
                                    Shop Now
                                </Button>
                            </div>
                            <div className='img-part'>
                                <img src={veg} alt="" />
                            </div>
                        </div>
                        <div className='container-two'></div>
                        <div className={`container-three slide-in-right ${mainText2View ? 'visible' : ''}`} ref={mainText2}>
                            <div className='text-part d-flex flex-column align-items-center justify-content-center'>
                                <h3>
                                    Make your breakfast clean and healthy
                                </h3>
                                <Button variant="contained" className='shopping-btn-two' startIcon={<ShoppingBagOutlinedIcon />}>
                                    Shop Now
                                </Button>
                            </div>
                            <div className='img-part'>
                                <img src={panegg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <h3 className="explore-header">Shop by category</h3>
                        <div>
                            <IconButton color="primary" className='navigate-previous' onClick={() => scroll(-120)}>
                                <NavigateBeforeIcon />
                            </IconButton>
                            <IconButton color="primary" className='navigate-next' onClick={() => scroll(120)}>
                                <NavigateNextIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className='category-container' ref={categoryContainerRef}>
                        {categories.map((item, index) => (
                            <div>  <div className={`category-image ${getSeleceted(item.name)}`} onClick={() => (isSelectedProducts(item.name))}>
                                <img src={item.img} alt="" />
                            </div>
                                <div className='category-font'>{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className='mt-4 d-flex'>
                        <h3 className="explore-header">Products</h3>
                        <span className='productchip'>{selectedProducts}</span>
                    </div>
                    <div className='mt-4 d-flex justify-content-center main-product-container'>
                        {getCategory().map((item, index) => (
                            <div className='product-container'>
                                <div>
                                    {/* product-badge */}
                                    <span className={`product-badge ${getClassName(item.label)}`}>
                                        {item.label}
                                    </span>
                                </div>
                                <div className='w-100 product-img'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='product-content'>
                                    <h5>{item.name}</h5>
                                    <Rating name="read-only" value={item.rating} readOnly /><span className='total-rating'>({item.users})</span>
                                    <div className='d-flex justify-content-between align-items-center mt-2 product-container-two'>
                                        <h5>{item.price}</h5>
                                        <IconButton aria-label="delete" color="success">
                                            <ShoppingBagOutlinedIcon />
                                        </IconButton>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <FooterComponent />
            </div >
        </>
    )
}
export default ExploreComponent;
import { useRef, useState } from 'react';
import '../../css/ExploreComponent.css'
import { Button, IconButton } from '@mui/material';
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

    return (
        <>
            <div className='explore-page'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h3 className="explore-header">Shop By Category</h3>
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
                        <div>  <div className='category-image'>
                            <img src={item.img} alt="" />
                        </div>
                            <div className='category-font'>{item.name}</div>
                        </div>
                    ))}
                </div>
                <div className='products-container d-flex'>
                    <div className='container-one'>
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
                    <div className='container-three'>
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
            </div >
        </>
    )
}
export default ExploreComponent;
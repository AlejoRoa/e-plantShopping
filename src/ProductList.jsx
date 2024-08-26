import React, { useState } from 'react';
import './ProductList.css'
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false); 
    const [showShirts, setShowShirts] = useState(false); // State to control the visibility of the Shirts page

    const shirtsArray = [
        {
            category: "Wildlife Tees",
            shirts: [
                {
                    name: "Lion Tee",
                    image: "https://example.com/lion-tee.jpg",
                    description: "Show your wild side with this majestic lion tee.",
                    cost: "$25"
                },
                {
                    name: "Tiger Tee",
                    image: "https://example.com/tiger-tee.jpg",
                    description: "Roar with pride in this fierce tiger tee.",
                    cost: "$30"
                },
                {
                    name: "Elephant Tee",
                    image: "https://example.com/elephant-tee.jpg",
                    description: "Embrace the strength and grace of elephants with this tee.",
                    cost: "$28"
                },
                {
                    name: "Giraffe Tee",
                    image: "https://example.com/giraffe-tee.jpg",
                    description: "Stand tall with this stylish giraffe tee.",
                    cost: "$27"
                },
                {
                    name: "Zebra Tee",
                    image: "https://example.com/zebra-tee.jpg",
                    description: "Add some stripes to your wardrobe with this zebra tee.",
                    cost: "$26"
                },
                {
                    name: "Panda Tee",
                    image: "https://example.com/panda-tee.jpg",
                    description: "Show your love for pandas with this adorable tee.",
                    cost: "$24"
                }
            ]
        },
        {
            category: "Domestic Animal Tees",
            shirts: [
                {
                    name: "Cat Tee",
                    image: "https://example.com/cat-tee.jpg",
                    description: "Purrfect for cat lovers everywhere.",
                    cost: "$20"
                },
                {
                    name: "Dog Tee",
                    image: "https://example.com/dog-tee.jpg",
                    description: "Celebrate man's best friend with this dog tee.",
                    cost: "$22"
                },
                {
                    name: "Horse Tee",
                    image: "https://example.com/horse-tee.jpg",
                    description: "Gallop into style with this horse tee.",
                    cost: "$23"
                },
                {
                    name: "Rabbit Tee",
                    image: "https://example.com/rabbit-tee.jpg",
                    description: "Hop into comfort with this cute rabbit tee.",
                    cost: "$21"
                },
                {
                    name: "Hamster Tee",
                    image: "https://example.com/hamster-tee.jpg",
                    description: "A tee that’s as adorable as a hamster.",
                    cost: "$19"
                },
                {
                    name: "Parrot Tee",
                    image: "https://example.com/parrot-tee.jpg",
                    description: "Add a splash of color with this vibrant parrot tee.",
                    cost: "$25"
                }
            ]
        }
    ];

   const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
   }

   const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }

   const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }

   const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
};

const handleShirtsClick = (e) => {
    e.preventDefault();
    setShowShirts(true); // Set showShirts to true when "Shirts" link is clicked
    setShowCart(false); // Hide the cart when navigating to Shirts
};

const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
};

    return (
        <div>
             <div className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
               <a href="/" style={{ textDecoration: 'none' }}>
                        <div>
                    <h3 style={{ color: 'white' }}>Animal Tees Boutique</h3>
                    <i style={{ color: 'white' }}>Wear Your Wild Side</i>
                    </div>
                    </a>
                </div>
            </div>
            <div style={styleObjUl}>
                <div> <a href="#" onClick={(e) => handleShirtsClick(e)} style={styleA}>Shirts</a></div>
                <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
            </div>
        </div>
        {!showCart ? (
        <div className="product-grid">
            {shirtsArray.map((category, index) => (
                <div key={index}>
                    <h2>{category.category}</h2>
                    <div className="product-list">
                        {category.shirts.map((shirt, i) => (
                            <div key={i} className="product-card">
                                <img src={shirt.image} alt={shirt.name} />
                                <h3>{shirt.name}</h3>
                                <p>{shirt.description}</p>
                                <p>{shirt.cost}</p>
                                <button>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        ) : (
            <CartItem onContinueShopping={handleContinueShopping}/>
        )}
    </div>
    );
}

export default ProductList;

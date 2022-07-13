import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';
const Product = (props) => {
    const {handleAddToCart, product} = props;

     const {img, name, price, seller, ratings} = props.product;
    
     //const {handleAddToCart} = props.product;

    return (
        <div className="product">
            <img src={img}></img>
             <div className="product-info">
               <p className="product-name">{name}</p>
               <p>Price: {price}</p>
               <p><small>Saller: {seller}</small></p>
               <p><small>Ratings: {ratings} stars</small></p>
             </div>
             <button onClick={()=>handleAddToCart(product)} className="btn-cart">
                 <p>Add to Cart</p>
                 <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
             </button>
        </div>
    );
};

export default Product;
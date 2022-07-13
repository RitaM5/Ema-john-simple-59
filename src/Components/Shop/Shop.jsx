import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
     const [products, setProducts] = useState([]);

     //for cart-container
      const [cart , setCart] = useState([]);

     useEffect(() => {
         fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
         .then(res => res.json())
         .then(data => setProducts(data))
     }, [])
    
      useEffect(() =>{
         const storedCart = getStoredCart();
         const savedCart = [];
         //console.log(storedCart);
         for(const id in storedCart){
             const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct);
           if(addedProduct){
               //console.log(addedProduct);
               const quantity = storedCart[id];
               addedProduct.quantity = quantity;
               savedCart.push(addedProduct);
           }
     }
         setCart(savedCart);

     }, [products]); 

     const handleAddToCart = (selectedProduct) => {
         //console.log('clicked', selectedProduct);
         let newCart = [];
         const exists = cart.find(product => product.id === selectedProduct.id);
         if(!exists){
             selectedProduct.quantity = 1;
             newCart=[...cart, selectedProduct];
         }
         else{
             const rest = cart.filter(product => product.id !== selectedProduct.id);
             exists.quantity = exists.quantity + 1;
             newCart=[...rest, selectedProduct];
         }

        // const newCart = [...cart, selectedProduct];// cart arry ar sob man newcart copy kre nise and product o jog kre nise.
         setCart(newCart);
         //for sent data to local storage
         addToDb(selectedProduct.id);

     }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                products.map(product => <Product 
                 product={product} 
                    key={product.id} handleAddToCart={handleAddToCart}>            
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;



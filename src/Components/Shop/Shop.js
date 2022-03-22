import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(() =>{
        fetch('products.json').then(res => res.json()).then(data => setProducts(data))
    },[])

    const addTocart = (product) =>{
        console.log(product)
        const newCart = [...cart,product];
        setCart(newCart);

    }

    return (
        <div className='shop-container'>
           <div className="products-container">
           
           {
               products.map(product => <Product key={product.id} product = {product} addTocart={addTocart}></Product>)
           }

            </div> 
           <div className="cart-container">
               <h5 style={{fontFamily: 'Lato',
                           fontStyle: 'normal',
                           fontWeight: '400',
                           fontSize: '25px',
                           lineHeight: '30px'}}>Order Summary</h5>
             <p>Product Cart:{cart.length}</p>
            </div> 
        </div>
    );
};

export default Shop;
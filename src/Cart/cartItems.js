import React, { useEffect } from 'react'
import { useStateContext } from '../appContext';
import './cartItemsStyle.css'
import { useNavigate } from 'react-router-dom'

export default function CartItems() {
    //handle images : use thapa videos;
    const { cartItems, addToCart, removeFromCart, subTotal, decrementQuantity } = useStateContext();
    //console.log("cartitems: ", cartItems)

    //const CalculatePrice = () => {
    //    const total = cartItems?.length >= 0 ? cartItems?.reduce(total, items => total + items.num_pages * items.quantity) : 0
    //    setSubtotal(total);
    //}

    const navigate = useNavigate();
    //useEffect(() => { subTotal }, [subTotal])
    return (
        <>
            <h2>Your cart</h2>
            <div className="grid">
                {
                    cartItems.length > 0 ? cartItems.map((items) => {
                       
                        const { id, title, authors, description, image_url , quantity, num_pages} = items;
                        return(
                        <div className="cardlist" key={id}>
                            <img src={image_url} />
                            <h2>{title} </h2>
                                <h4>Author:{authors}</h4>
                                <h4>Total price: {num_pages * quantity}</h4>
                                <div className="buttondiv">
                                    <span>
                                        <button onClick={() => addToCart(items)} className="plus">+</button>
                                       <input type="text" value={quantity} />
                                        <button onClick={() => decrementQuantity(id)} className="plus">-</button>
                                    </span>
                                    <div><button onClick={() => removeFromCart(id)} className="plus">Remove from cart</button></div>
                                </div>
                                
                        </div>
                        )

                    }) : <div><h1>Your cart is empty</h1>
                            <button onClick={()=>navigate('/buyBooks')}>Shop Now</button>
                        </div>

                }
            </div>
            < h1 > subtotal is: {cartItems.reduce((total, item) => total + item.num_pages * item.quantity, 0)}</h1>
        </>
    )
}  
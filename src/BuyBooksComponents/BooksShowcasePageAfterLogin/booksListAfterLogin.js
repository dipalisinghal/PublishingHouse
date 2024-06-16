import React, { useEffect, useState } from 'react'
import './BookListStyle.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
//import { Api } from '../../../../node_modules/@mui/icons-material/index';
import { API_URL } from '../../API'
import BookDescription from '../BookDescription';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useStateContext } from '../../appContext';
//import { Button } from '../../../../node_modules/@mui/material/index';


export default function BookList() {
    const [Books, setBooks] = useState([]);
    const [Error, setError] = useState("");
    const { cartItems, addToCart, removeFromCart } = useStateContext();
    console.log("fa are: ", cartItems);
    const getAPIData = async () => {
        const res = await axios.get(API_URL);
        setBooks(res.data);
        console.log(res);
        console.log(Books);
        //try {
        //    const res = await fetch(API_URL);

        //    const data = await res.json();q
        //    console.log(data);
        //} catch (error) {
        //    setError(error.msg)
        //}
    }





    useEffect(() => {
        getAPIData();
    }, []);

    //const [expanded, setExpanded] = useState(false);
    //const handleExpanded = () => {
    //    if (expanded) {
    //        setExpanded(false);
    //    }
    //    else {
    //        setExpanded( true);
    //    }
    //}
    const [desk, setDesk] = useState("");
    const navigate = useNavigate();
    const handleNavigation = (id) => {

        navigate(`/books/${id}`)
        // navigate('/des')
        console.log("id ", id);
    }

    const location = useLocation();
   // let totalItems;
    let totalItems=0;
    if (cartItems?.length > 0) {
         totalItems = cartItems.map(item => item.quantity).reduce((total, quantity) => { return total + quantity });
//            cartItems.map(item => { var total = 0; total = total + item.quantity; return })
   
    }
    console.log("totalitems", totalItems);

    return (
        <>
            <button className="YourCart" onClick={() => navigate('/cart')}> Your cart: {totalItems}</button>
            <div className="grid">
                {
                    Books.map((items) => {
                        const { id, title, authors, description, image_url, num_pages } = items;
                        return (
                            <div className="card" key={id} >
                                <img src={image_url} onClick={() => navigate(`/books/${id}`)} />
                                <h2>{title} </h2>
                                <h4>Price:{num_pages}</h4><p>Stock:{ num_pages.toString().substring(0, 1) }</p>

                                {/*{expanded ? <BookDescription><p>{description}</p> </BookDescription> : <p>{description.slice(0, 60)}...</p> }*/}

                                {/*<button onClick={() => { handleNavigation(); setDesk({ description }) }} >Read more...</button>*/}
                                {/*<BookDescription >{desk}</BookDescription>  */}
                                <button onClick={() => addToCart(items)} className="Addtocart">Add To Cart</button>
                                
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
 }
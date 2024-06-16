import React, { useEffect, useState } from 'react'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
//import { Api } from '../../../../node_modules/@mui/icons-material/index';
import { API_URL } from '../../API'

import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useStateContext } from '../../appContext';
//import { Button } from '../../../../node_modules/@mui/material/index';


export default function Login() {
    //const [Books, setBooks] = useState([]);
    //const [Error, setError] = useState("");
    //const { cartItems, addToCart, removeFromCart } = useStateContext();
    //console.log("fa are: ", cartItems);
    //const getAPIData = async () => {
    //    const res = await axios.get(API_URL);
    //    setBooks(res.data);
    //    console.log(res);
    //    console.log(Books);
        //try {
        //    const res = await fetch(API_URL);

        //    const data = await res.json();
        //    console.log(data);
        //} catch (error) {
        //    setError(error.msg)
        //}
    //}




    //useEffect(() => {
    //    getAPIData();
    //}, []);

    //const [expanded, setExpanded] = useState(false);
    //const handleExpanded = () => {
    //    if (expanded) {
    //        setExpanded(false);
    //    }
    //    else {
    //        setExpanded( true);
    //    }
    //}
    //const [desk, setDesk] = useState("");
    //const navigate = useNavigate();
    //const handleNavigation = () => {

    //    navigate('/description')

    //}

    const location = useLocation();

    const [formData, setFormData] = useState({ username: '', password: '' });
    const [APIData, setAPIData] = useState([])
   
    const getDataApi = async () => {
        const res = await axios.get("https://swapi.dev/api/planets");
        console.log("resdata", res.data);
        //setAPIData(res.data.results);
        //console.log("apidata",APIData);
        res.data.results.map(item => {
            console.log("map results",item)
            //if (items === "name") {
            //    items.map((item) => {
                    console.log("resultitem",item.name)
                    if (item.name === formData.username) {
                        if (formData.password.length > 3) {
                            alert("loggedin");
                        }
                        else {
                            alert("pw length should be greater than 3")
                        }
                    }
                    else {
                        alert("username shoulod be from the list")
                        
                    }
                   
            //})
    //}
    
    })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        getDataApi();
    }
//useEffect(() => {
//    getDataApi();
//},[])

    return (
        <>
            <div className='flex-container'>
                <div className="flex">
                    <label className='label-login' htmlFor="username" >Name </label>
                    <input id="username" type="text" name="username" value={formData.username} onChange={e => setFormData({ ...formData, username: e.target.value })} />
                </div>
                <br />
                <div className="flex">
                    <label className='label-password' htmlFor="password" >Password </label>
                    <input id="password" type="password" name="password" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} />
                </div>
                <br />
                <div>
                    <button onClick={e => handleSubmit(e)}>Submit</button>
                </div>
            </div>
        </>
    )
}  
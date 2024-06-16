import React, { Children, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Book_Details_url } from '../API'

import axios from 'axios';
//import { Api } from '../../../../node_modules/@mui/icons-material/index';

export default function BookDescription() {
    //const [expanded, setExpanded] = useState(false);
    //const [desc, setDesc] = useState(children );
    //const navigate = useNavigate();
    //const location = useLocation();

    //var buttonName = "Read more";
    //let textName = children?.substring(0, 6);
    //console.log(location.pathname);
    //const getNameButton = (currLink) => {

    //    if (location.pathname === currLink) {
    //        //return "#1B98F5"
    //        buttonName = "Read less"
    //        textName = children
    //    }
    //    else {
    //        buttonName = "Read more";
    //        textName = children?.substring(0, 6);
    //    }
    //}

    //var desc = Children
    //const handleSetDesc = () => {
    //    setDesc(Children);
    //}
    //const handleNavigation = () => {
    //    if (expanded) {

    //        navigate('/description')

    //    }
    //    else {
    //        navigate('/buyBooks')
    //    }
    //}


    //const handleExpanded = () => {
    //    if (expanded) {
    //        setDesc(children);
    //        navigate('/buyBooks')
    //       // text = description;
    //        setExpanded(false);
    //    }
    //    else {
    //        navigate('/description')
    //        setDesc(children);
    //        //text = desc;
    //       // buttonName="Read more..."
    //        setExpanded(true);


    //    }
    //}

    //var children70 = children.substring(0, 70)
    //if (children.length === 70) { return <p>{children}</p> }
    //let text = expanded ? children : children?.substring(0, 6)
//        desc.slice(0, 6)
//        substring(0, 5)
    //{expanded ? "Read more..." :  "Read less"}
    const navigate = useNavigate();
    const handleNavigation = () => {

        navigate('/description')

    }
    const location = useLocation();

    const [ book, setBook ] = useState({});
    const { id } = useParams();
    const getBookDetail = async () => {
        const res= await axios.get(`${Book_Details_url}/${id}`);
        setBook(res.data);
    }
        useEffect( () => {
            
              getBookDetail()
           
    }, [id])

    return (
        <>
            <p>book detail</p>
            <div>
                <h2>{book?.title}</h2>
                <img src={book?.image_url} alt="#" />
             </div>
            <div>
                <h2>Desription</h2>
                <p>{book?.description}</p>

            </div>

            {/*<button onClick={() => { handleNavigation() }}>Read more...</button>

            {
                (location.pathname === '/description') ? <p>{children}</p> : null
                    
           }*/}
        </>
    )
}
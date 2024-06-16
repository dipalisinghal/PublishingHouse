import React from 'react'
import './StyleHomePage.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import { useNavigate } from 'react-router-dom'

const Allimages = [
    {
        url: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2slMjBwdWJsaXNofGVufDB8fDB8fHww',
        caption: 'Get your Book Published'
    },
    {
        url: 'https://www.alephbookcompany.com/wp-content/uploads/2023/10/Secret-of-More.jpg',
        caption: '2nd slide',
    },
    {
        url: 'https://www.alephbookcompany.com/wp-content/uploads/2023/10/Awards-Nov.jpg',
        caption: '3rd slide'
    },
    {
        url: 'https://www.alephbookcompany.com/wp-content/uploads/2021/05/Aleph-website-award-wining-tiles-06-1.jpg',
        caption: '4th slide'
    }
]
//const navigate = useNavigate();

const imageStyle =
    {
    display: 'block',
    //flexDiretion: 'row',
    //justifyContent: 'center',
    width: '780px',
    margin: '20px',
    height: '308px',
    backgroundSize: "cover",
   
    objectFit: 'cover',
    
   
    }

export default function ImageSliderVPH({ BestSellers, BeAnAuthor }) {
    //handle images : use thapa videos;
    const navigate = useNavigate();
    const gotoService = () => {
         navigate('/service');
        //alert("heyyyy")
    }
    return (
        <>
            <div className='slide-container'>
                <Fade>
                    
                    {Allimages.map((items, index) =>
                    (
                        <div key={index} className="outsideImgDiv">
                            <div className="imgDiv" style={{ ...imageStyle, backgroundImage: `url(${items.url})` }}>
                                <span>{items.caption}</span>
                            </div>
                        </div>
                    )
                    )
                    }



                </Fade>
            </div>

            <div className="BestSeller">
                <div className="bestSellerImgDiv">
                    <img className="bestSellerImg" src={BestSellers} />
                </div>
               
                <div className="BestSellerText"> Best Seller In 2023 <br /><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo con
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo con
                </div>
            </div>
            <div className="BeAuthor" >
                <img className="BeAnAuthorImg" src={BeAnAuthor} onClick={() => gotoService()} />
                {/*<span className="BeAnAuthorText"> author info </span>*/}
            </div>
            
        </>
    )
}
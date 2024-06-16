import React from 'react'
import './StyleFooter.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    //handle images : use thapa videos;
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <div className="footer">
            <div className="AllSocialMedia">
                <InstagramIcon className="socialMediaIcon" />
                <LinkedInIcon className="socialMediaIcon" />
                <TwitterIcon className="socialMediaIcon" />
            </div>
            <div className="booksAvailabilty">
                 Books are available on Amazon, Flipkart, and at all leading bookstores across India.
            </div >
            <div className="HouseAdd">
                Address: 16## B/#, Ground Floor, Singhal House, ### Community Centre, New Delhi, Delhi - 1$0###
            </div>
            <div className="Rights">
                &copy; VIDUSHI PUBLISHING COMPANY | All Rights Reserved | Privacy Policy
                </div>
            </div>
        </>
    )
} 
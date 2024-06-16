import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

export default function Navbar() {
    const location = useLocation();
    console.log(location.pathname);
    const getColor = (currLink) => {
        
        if (location.pathname === currLink) {
            return  "#1B98F5"
        }
    }
    //style={{ color: getColor("/") }}

    return (
        <>
            
            <div className="wholeNav"> 
                <img src="https://i.pinimg.com/originals/fa/7b/0f/fa7b0f3c409aa486ccc5c95ec61b2041.gif" />
                <div>
                    <div className="companyName">VIDUSHI PUBLISHING COMPANY</div>
                    <hr className="titlebreak"/>
                    <div>Publishers Of Experience, Knowledge And Dreams</div>
                </div>
                <div className="navbarItems">
                    <ul className="navbarItemsUL">
                        <Link to="/"  className="link">
                            <li className="navbarItemList">
                                <div className="navbarItem" style={{ color: getColor("/") }}>
                    Home
                                </div>
                            
                            </li>
                        </Link>
                        <li className="navbarItemList">
                <div className="navbarItem">
                    About
                            </div>
                        </li>
                        <Link to="/service" className="link">
                        <li className="navbarItemList">
                            
                                <div className="navbarItem" style={{ color: getColor("/service") }} >
                    Services
                                </div>
                            
                            </li>
                        </Link>
                        <li className="navbarItemList">
                <div className="navbarItem" >
                    Latest Release
                            </div>
                        </li>
                        <Link to="/buyBooks" className="link">
                            <li className="navbarItemList">

                                <div className="navbarItem" style={{ color: getColor("/buyBooks") }} >
                                    Buy Books
                                </div>

                            </li>
                        </Link>
                        <li className="navbarItemList">
                <div className="navbarItem">
                    Contact
                            </div>
                </li>
                {/*<div>*/}

                {/*</div>*/}
                {/*<div>*/}

                            {/*</div>*/}
                       
                    </ul>
                    {/*< Link to='/'>*/}
                    {/*    <div>*/}
                    {/*    Home1*/}
                    {/*    </div>*/}
                    {/*</Link>*/}
                </div>
            
            </div>
            
                
            
        </>
    )
}
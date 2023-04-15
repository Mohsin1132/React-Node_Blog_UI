import React from "react";
import "./topbar.css";
import {Link} from "react-router-dom";


const TopBar = () => {
    const user = false;
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-google"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                    <Link className='link' to='/'>
                        HOME
                    </Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/'>
                            ABOUT
                        </Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/'>
                            CONTACT
                        </Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to='/write'>
                            WRITE
                        </Link>
                    </li>
                    <li className='topListItem'>
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {user ? (
                    <img className='topImg' src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                ): (
                    <ul className='topList'>
                        <li className='topListItem'>
                    <Link  className='link' to='/login'>LOGIN</Link>
                        </li>
                        <li className='topListItem'>
                        <Link className='link' to='/register'>REGISTER</Link>
                        </li>
                    </ul>
                )}
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
};



export default TopBar;
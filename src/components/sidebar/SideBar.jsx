import React from "react";
import "./sidebar.css";


const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src='https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
            <p>
                Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
            </div>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Tech</li>
                <li className='sidebarListItem'>Cinema</li>
                <li className='sidebarListItem'>Sport</li>
            </ul>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className='sidebarSocial'>
                    <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className=" sidebarIcon fa-brands fa-twitter"></i>
                    <i className=" sidebarIcon fa-brands fa-instagram"></i>
                    <i className=" sidebarIcon fa-brands fa-google"></i>
                </div>
            </div>
        </div>
    )
};



export default SideBar;
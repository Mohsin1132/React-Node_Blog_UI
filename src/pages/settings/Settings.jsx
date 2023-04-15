import React from "react";
import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";


const Settings = () => {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Acoount</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPp'>
                        <img
                            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt=''
                        />
                        <label htmlFor='fileInput'>
                            <i className=" settingsPpIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Safak'/>
                    <label>Email</label>
                    <input type='email' placeholder='safal@gmail.com'/>
                    <label>Password</label>
                    <input type='password'/>
                    <button className='settingsUpdate'>Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
};


export default Settings;
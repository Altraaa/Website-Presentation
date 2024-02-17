
"use client";
import TaksuLogo from "./images/Taksu-Logo";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function NavigationBar() {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return(
        <div>    
            {showDropdown && (
                    <div className={`absolute flex justify-center items-center bg-[#6D6D6D] w-full h-52 mt-4 z-0 transition-transform duration-700 ease-in-out animate-geser ${showDropdown ? 'none' : 'animate-geser'} top-14 `}>
                        <ul className="justify-center flex flex-col items-center gap-5 ">
                            <li>Taksu?</li>
                            <li>About Us</li>
                            <li>Our Projects</li>
                        </ul>
                    </div>
            )}
            <div className="relative">
                <div className="flex items-center justify-center w-full h-fit py-4 bg-gray-200 z-50">
                    <TaksuLogo /> 
                </div>

                <hr className="h-[2px] w-full bg-black z-50"/>

                <div className="w-full h-fit flex justify-center -translate-y-[18px] z-30">
                    <div className={`w-10 h-10 bg-white rounded-full flex justify-center items-center z-50 relative transition-transform duration-700 ${showDropdown ? 'animate-geserbutton' : 'none'}`} onClick={toggleDropdown} style={{ transform: showDropdown ? 'translateY(205px)' : 'none' }}>
                        <button className=" bg-gray-400 w-8 h-8 rounded-full flex justify-center items-center" >
                            <FontAwesomeIcon icon={faChevronDown} className={`w-5 transition-transform duration-1000 ${showDropdown ? 'rotate-180' : ''}`}  />
                        </button>
                    </div>  
                </div>

            </div>
        </div>
    );              
}

export default NavigationBar
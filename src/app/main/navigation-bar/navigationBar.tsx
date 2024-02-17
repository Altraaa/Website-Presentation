
"use client";
import "../../globals.css"
import TaksuLogoMobile from "./images/Taksu-Logo-mobile";
import TaksuLogoTablet from "./images/Taksu-Logo-tablet";
import TaksuLogoDesktop from "./images/Taksu-Logo-desktop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"

function NavigationBar() {
    const [navbarTransparent, setNavbarTransparent] = useState(true);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > 0 && navbarTransparent) {
            setNavbarTransparent(false);
          } else if (currentScrollY === 0 && !navbarTransparent) {
            setNavbarTransparent(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [navbarTransparent]);

    return(
        <div>    
            {showDropdown && (
                    <div className={`absolute md:hidden flex justify-center items-center bg-[#6D6D6D] w-full h-52 mt-4 z-0 transition-transform duration-700 ease-in-out animate-geser ${showDropdown ? 'none' : 'animate-geser'} top-14 `}>
                        <ul className="justify-center flex flex-col items-center gap-5 ">
                            <li>Taksu?</li>
                            <li>About Us</li>
                            <li>Our Projects</li>
                        </ul>
                    </div>
            )}
            <div className="relative">
                
                    <nav className={`navbar ${navbarTransparent ? "none" : "transparent"} md:hidden xl:hidden bg-gray-200 flex items-center justify-center w-full h-fit py-4 md:py-5 xl:py-6 z-50`}>
                        <TaksuLogoMobile /> 
                    </nav>

                    <nav className={`navbar ${navbarTransparent ? "none" : "transparent"} hidden bg-gray-200 md:flex xl:hidden items-center justify-center w-full h-fit md:pt-5 md:pb-4 z-50`}>
                        <TaksuLogoTablet /> 
                    </nav>

                    <nav className={`navbar ${navbarTransparent ? "none" : "transparent"} hidden bg-gray-200 xl:flex md:hidden items-center justify-center w-full h-fit xl:pt-6 xl:pb-5 z-50`}>
                        <TaksuLogoDesktop /> 
                    </nav>
                
                <hr className="h-[2px] w-full bg-black z-50 mt-[76px] md:mt-[85px] xl:mt-[100px]"/>

                <div className="w-full absolute  h-fit flex justify-center -translate-y-[18px] z-30 md:hidden">
                    <div className={`w-10 h-10 bg-white rounded-full flex justify-center items-center z-50 relative transition-transform duration-700 ${showDropdown ? 'animate-geserbutton' : 'none'}`} onClick={toggleDropdown} style={{ transform: showDropdown ? 'translateY(205px)' : 'none' }}>
                        <button className=" bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center" >
                            <FontAwesomeIcon icon={faChevronDown} className={`w-5 transition-transform duration-1000 ${showDropdown ? 'rotate-180' : ''}`}  />
                        </button>
                    </div>  
                </div>

                <div className="bg-[#6D6D6D] w-full h-14 md:flex xl:h-16 justify-center items-center hidden  ">
                    <ul className="flex space-x-20 xl:text-xl xl:space-x-40 xl:text-white font-bold tracking-wide" >
                        <li>About Us</li>
                        <li>Taksu?</li>
                        <li>Our Project</li>
                    </ul>
                </div>
                <div className="h-screen flex justify-center items-center">
                    
                </div>

            </div>
        </div>
    );              
}

export default NavigationBar
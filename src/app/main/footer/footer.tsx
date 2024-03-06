import TaksuLogoMobile from "../../../image/Taksu-Logo-mobile";
import Image from "next/image";
import Instagram from "@/icon/instagram.svg"
import Discord from "@/icon/discord.svg"
import Github from "@/icon/github.svg"
import Vercel from "@/icon/vercel.svg"
import Education from "@/icon/eduicon.svg"
import School from "@/icon/schoolicon.svg"
import Town from "@/icon/townhallicon.svg"
import TaksuLogoTablet from "../../../image/Taksu-Logo-tablet";
import TaksuLogoDesktop from "../../../image/Taksu-Logo-desktop";


function Footer() {
  return (
    <>
      <div className="w-full h-full bg-gray-300  flex justify-center items-center">
        <div className="w-full h-full p-5">
          <div className="md:flex md:justify-between lg:justify-normal lg:gap-5 xl:gap-0 xl:justify-between">
            <div className="lg:mb-5 xl-w-full">
              <div>
                <TaksuLogoMobile />
              </div>
              <div className="flex space-x-2 mt-3 w-full">
                <a
                  className="after:content-[''] after:block after:absolute after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-[47px] hover:text-blue-600 transition-all ease-in-out duration-300"
                  href=""
                >
                  Home
                </a>
                <a
                  className="after:content-[''] after:block after:absolute after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-[48px] hover:text-blue-600 transition-all ease-in-out duration-300"
                  href=""
                >
                  Taksu?
                </a>
                <a
                  className="after:content-[''] after:block after:absolute after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-[69px] hover:text-blue-600 transition-all ease-in-out duration-300"
                  href=""
                >
                  About Us
                </a>
                <a
                  className="after:content-[''] after:block after:absolute after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-[83px] hover:text-blue-600 transition-all ease-in-out duration-300"
                  href=""
                >
                  Our Project
                </a>
              </div>
              <div className="md:w-80 md:mt-4 md:flex hidden xl:w-[398px] lg:w-72 xl:flex">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  mollitia omnis quibusdam, dignissimos quia quae? Quibusdam est
                  praesentium consequatur voluptatem possimus dolorem in quas
                  voluptas harum itaque, et ipsum nam vero repudiandae quae
                  aperiam porro. Id nam ut quia aspernatur, dolor facilis unde.
                  Necessitatibus, nostrum.
                </p>
              </div>
            </div>
            <div className="space-y-4 md:mt-4 md:mb-4 md:justify-between lg:flex md:w-80 lg:w-[685px] xl:w-[900px]">
              <div>
                <div className="w-24 mt-4">
                  <h2 className="font-bold text-blue-500">Created By</h2>
                  <hr className="mt-[2px] border-black" />
                </div>
                <div className="mt-2 space-y-2">
                  <p>Aldiansah Saputra / 01</p>
                  <p>I Kadek Pindra Dwi Permana / 09</p>
                  <p>Sebastian Herben Satrio Kristiawan / 36</p>
                </div>
              </div>
              <div>
                <div className="w-24 mt-4 md:mt-0">
                  <h2 className="font-bold text-blue-500">Social Media</h2>
                  <hr className="mt-[2px] border-black" />
                </div>
                <div className="mt-2 mb-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Image width="20" src={Instagram} alt="Instagram" />
                    <a href="">Instagram</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href="">
                      <Image width="20" src={Discord} alt="Discord" />
                    </a>
                    <a href="">Discord</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href="">
                      <Image width="20" src={Vercel} alt="Vercel" />
                    </a>
                    <a href="">Vercel</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href="">
                      <Image width="20" src={Github} alt="Github" />
                    </a>
                    <a href="">Github</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-24 mt-4 md:mt-0">
                  <h2 className="font-bold text-blue-500">Information</h2>
                  <hr className="mt-[2px] border-black" />
                </div>
                <div className="mt-2 mb-6 space-y-2">
                  <div className="flex items-center space-x-4">
                    <Image width="20" src={Education} alt="Education" />
                    <p>SMK Negeri 1 Denpasar</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Image width="20" src={Town} alt="Town" />
                    <p>Bali - Indonesia</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Image width="20" src={School} alt="School" />
                    <p>PT. Taksu Teknologi Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr className="border-black" />
            <p className="text-center mt-3 text-gray-600">
              Copyright © 2023 Our Team. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

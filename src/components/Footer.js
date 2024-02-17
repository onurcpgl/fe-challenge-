import React from "react";
import WhiteLogo from "../assets/header_logo.svg";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full  bg-[#0059BC] text-white aspect-1440/401  max-lg:aspect-768/401 max-[500px]:h-64">
      <div className="flex flex-col justify-between items-start w-full h-full">
        <div className="container mx-auto flex flex-col justify-between w-full h-5/6">
          <div className="flex justify-between items-start w-full h-full py-16 max-xl:py-8 max-lg:px-4 max-lg:gap-8 max-md:py-10">
            <div className="flex flex-col justify-between items-start w-2/6 max-lg:w-3/6 max-md:w-4/6 h-full max-sm:w-5/6">
              <div className="select-none">
                <a href="/">
                  <img src={WhiteLogo} alt="Footer White Logo" />
                </a>
                <p className="text text-sm font-light">
                  Trusted Global Innovator
                </p>
              </div>
              <p className="text-base font-normal max-md:hidden">
                Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium
                aliquam neque.
              </p>
              <div className="flex w-full h-10">
                <input
                  className="w-9/12 max-lg:w-8/12 px-5 text-black email font-normal"
                  placeholder="Email"
                />
                <button className="w-3/12 max-lg:w-4/12 bg-[#00254F] pl-4 max-sm:pl-2">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="w-3/6 h-full flex justify-center items-center max-md:hidden">
              <div className="flex justify-evenly w-full max-lg:flex-col">
                <ul className="flex flex-col">
                  <li className="text-2xl font-medium mb-5 text-start">
                    Title
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                </ul>
                <ul className="flex flex-col">
                  <li className="text-2xl font-medium mb-5 text-start">
                    Title
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                </ul>
                <ul className="flex flex-col">
                  <li className="text-2xl font-medium mb-5 text-start">
                    Title
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                  <li className="text-xl font-normal py-1 max-lg:hidden">
                    Subtitle
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white w-full h-1/6">
          <div className="container mx-auto w-full h-full flex justify-between items-center max-lg:px-4">
            <a
              className="text-xl font-normal max-md:text-base"
              href="mailto:contact@ntliata.com"
            >
              contact@ntliata.com
            </a>
            <a
              className="text-xl font-normal  max-md:text-base"
              href="tel:+39876765444"
            >
              +3 9876 765 444
            </a>
            <div className="flex gap-5 max-md:hidden">
              <a href="https://www.instagram.com/ndbs_turkiye/" target="blank">
                <FaInstagram className="text-2xl font-normal" />
              </a>
              <a
                href="https://www.facebook.com/NTliATABusinessSolutionsTurkey/"
                target="blank"
              >
                <FaFacebookF className="text-2xl font-normal" />
              </a>
              <a
                href="https://www.linkedin.com/company/ntt-data-business-solutions-turkey/?originalSubdomain=tr"
                target="blank"
              >
                <FaLinkedin className="text-2xl font-normal" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

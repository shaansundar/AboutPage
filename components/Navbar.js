import Link from "next/link";
import Image from "next/image";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Icon({ icon, href }) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark transform hover:scale-105 duration-300 ease-in-out mr-iconcontentrightmargin">
        <FontAwesomeIcon icon={icon} size="lg" color="#e4f1f1" />
      </div>
    </Link>
  );
}

function Discord() {
  return (
    <Link href="https://discord.gg/jBr3GmsYcu">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark transform hover:scale-105 duration-300 ease-in-out mr-lasticoncontentrightmargin">
        <img
          src="/discord.png"
          alt="An SVG of an eye"
          width="25px"
          height="25px"
        />
      </div>
    </Link>
  );
}

function Telegram() {
  return (
    <Link href="#">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark transform hover:scale-105 duration-300 ease-in-out mr-iconcontentrightmargin">
        <img
          src="/telegram.png"
          alt="An SVG of an eye"
          width="20px"
          height="20px"
        />
      </div>
    </Link>
  );
}

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="head">
      <header class="text-gray-600 bg-gray-headerbg body-font ">
        <div class="container flex flex-wrap flex-col px-navbarx py-navbary md:flex-row items-center max-w-full">
          <a class="flex title-font font-medium items-center text-gray-900 transform hover:scale-105 duration-300 ease-in-out mb-4 md:mb-0">
            <Image src="/logo.png" width={113.33} height={68.66} />
          </a>
          <button
            onClick={() => setDropdown(!dropdown)}
            class=" 
                    absolute
                    top-0 right-0 
                    inline-flex 
                    items-center 
                    text-white 
                    ring-1 ring-indigo-300
                    md:hidden
                    border-0 
                    w-auto
                    h-buttonheight 
                    py-1 px-3 mx-10
                    px-2
                    focus:outline-none 
                    rounded 
                    transform hover:scale-105
                    duration-300 ease-in-out
                    mt-4 md:mt-0"
          >
            <span className="txt">\/</span>
          </button>
          <nav
            class="w-full md:w-auto md:mr-auto md:ml-4 md:py-1 md:pl-headcontentleftmargin md:flex md:flex-wrap md:items-center md:text-base md:justify-center"
            // className="flex flex-wrap:wrap"
          >
            <Link href="/">
              <a
                style={{ display: dropdown ? "none" : "block" }}
                class="w-full ring-0 md:w-auto mr-headcontentmargin hover:text-gray-900 transform hover:scale-105 duration-150 py-1 -my-2 md:mb-0 ease-in-out"
              >
                <span className="txt">CrazyHOME</span>
              </a>
            </Link>
            <br></br>
            <Link href="/about">
              <a
                style={{ display: dropdown ? "none" : "block" }}
                class="w-full ring-0 md:w-auto mr-headcontentmargin hover:text-gray-900 transform hover:scale-105 duration-150 py-1 mb-4 md:mb-2 ease-in-out"
              >
                <span className="txt">CrazyTEAM</span>
              </a>
            </Link>
            <Link href="https://medium.com/@crazynft">
              <a
                style={{ display: dropdown ? "none" : "block" }}
                class="w-full ring-0 md:w-auto mr-headcontentmargin hover:text-gray-900 transform hover:scale-105 duration-150 py-1 mb-10 md:mb-auto ease-in-out"
              >
                <span className="txt">CrazyBLOG</span>
              </a>
            </Link>
          </nav>
          <div
            style={{ display: dropdown ? "none" : "inline-flex" }}
            className="w-full md:w-auto  flex items-center"
          >
            <Icon
              icon={faLinkedinIn}
              href="https://www.linkedin.com/company/crazynft/"
            />
            <Icon icon={faTwitter} href="https://twitter.com/team_crazynft" />
            <Icon icon={faGithub} href="https://github.com/CrazyNFT" />
            <Discord />
          </div>
          <Link href="https://prototype.crazynft.tech" passHref>
            <button
              class=" 
                    inline-flex 
                    items-center 
                    text-white 
                    bg-gradient-to-r 
                      from-green-dark 
                      to-green-light 
                      hover:from-gray-graddark 
                      hover:to-gray-gradlight
                    border-0 
                    w-buttonwidth 
                    h-buttonheight 
                    py-1 px-3 
                    focus:outline-none 
                    rounded 
                    transform hover:scale-105
                    duration-300 ease-in-out
                    mt-4 md:mt-0"
            >
              <span className="txtw">Launch App</span>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

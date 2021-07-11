import Link from "next/link";
import Image from "next/image";
import {
  faLinkedinIn,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, href }) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark mr-iconcontentrightmargin">
        <FontAwesomeIcon icon={icon} size="lg" color="#e4f1f1" />
      </div>
    </Link>
  );
}

function Discord() {
  return (
    <Link href="#">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark mr-lasticoncontentrightmargin">
      <img src="/discord.png" alt="An SVG of an eye" width="25px" height="25px" />
      </div>
    </Link>
  );
}

function Telegram() {
  return (
    <Link href="#">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark mr-iconcontentrightmargin">
      <img src="/telegram.png" alt="An SVG of an eye" width="20px" height="20px" />
      </div>
    </Link>
  );
}

const Navbar = () =>{
    return (
     <div className="head">
   <header class="text-gray-600 bg-gray-headerbg body-font ">
    <div class="container flex flex-wrap flex-col px-navbarx py-navbary md:flex-row items-center max-w-full">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image  src="/logo.png" width={113.33} height={68.66} />
     </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-headcontentleftmargin flex flex-wrap items-center text-base justify-center">
    <Link href="/"><a class="mr-headcontentmargin hover:text-gray-900"><span className="txt">CrazyHOME</span></a></Link>
    <Link href="/about"><a class="mr-headcontentmargin hover:text-gray-900"><span className="txt">CrazyTEAM</span></a></Link>
    <Link href="/blog"><a class="mr-5 hover:text-gray-900"><span className="txt">CrazyBLOG</span></a></Link>  
   </nav>
   <div className="flex items-center">
              <Icon icon={faLinkedinIn} href="#" />
              <Icon icon={faTwitter} href="#" />
              <Telegram />
              <Discord />
            </div>
    <button class=" 
                    inline-flex 
                    items-center 
                    text-white 
                    bg-gradient-to-r 
                      from-green-light 
                      to-green-dark 
                      hover:from-gray-gradlight 
                      hover:to-gray-graddark
                    border-0 
                    w-buttonwidth 
                    h-buttonheight 
                    py-1 px-3 
                    focus:outline-none 
                    rounded 
                    mt-4 md:mt-0"
                    >
            <span className="txtw">Launch App</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

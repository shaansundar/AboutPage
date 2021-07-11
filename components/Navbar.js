import Link from "next/link";
import Image from "next/image";

const Navbar = () =>{
    return (
     <div className="head">
   <header class="text-gray-600 bg-gray-headerbg body-font ">
    <div class="container flex flex-wrap flex-col pr-5 md:flex-row items-center max-w-full">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image  src="/logo.png" width={214.408} height={100} />
     </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
    <Link href="/"><a class="mr-5 hover:text-gray-900"><span className="txt">CrazyHOME</span></a></Link>
    <Link href="/about"><a class="mr-5 hover:text-gray-900"><span className="txt">CrazyTEAM</span></a></Link>
    <Link href="/blog"><a class="mr-5 hover:text-gray-900"><span className="txt">CrazyBLOG</span></a></Link>  
   </nav>
    <button class=" 
                    inline-flex 
                    items-center 
                    text-white 
                    bg-gradient-to-r 
                      from-green-light 
                      to-green-dark 
                      hover:from-gray-dark 
                      hover:to-gray-darkest
                    border-0 
                    w-buttonwidth 
                    h-buttonheight 
                    py-1 px-3 
                    focus:outline-none 
                    rounded 
                    mt-4 md:mt-0"
          >
            <span className="txtw">Launch CrazyApp</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

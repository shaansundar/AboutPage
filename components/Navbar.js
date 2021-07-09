import Link from "next/link";
import Image from "next/image";

// #eff4f7
const Navbar = () =>{
    return (
     <div className="head">
   <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image  src="/logo.png" width={187.5} height={87.45} />
     </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
    <Link href="/"><a class="mr-5 hover:text-gray-900"><span className="txt">CrazyHOME</span></a></Link>
    <Link href="/Nft"><a class="mr-5 hover:text-gray-900"><span className="txt">CrazyTEAM</span></a></Link>
    <Link href="/blog"><a class="mr-5 hover:text-gray-900"><span className="txt">CrazyBLOG</span></a></Link>  
   </nav>
    <button class="inline-flex items-center text-white bg-gradient-to-r from-green-dark to-green-light hover:bg-gray-200 border-0 w-buttonwidth h-buttonheight py-1 px-3 focus:outline-none rounded mt-4 md:mt-0">
    <span className="txtw"> Launch CrazyApp </span> 
    </button>
  </div>
  </header>
  </div>    
        
    )
}

export default Navbar;
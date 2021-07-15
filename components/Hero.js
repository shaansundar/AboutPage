import React from "react";
import Link from "next/link";
import PropTypes from  "prop-types";

function Hero(props) {
  return (
    <section className="text-gray-600 bg-gradient-to-r 
    from-green-dark 
    to-green-light ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-heroimgwidth lg:w-heroimgwidth md:w-1/2 w-5/6 mb-10 md:mb-0 mb transform hover:scale-110 duration-300 ease-in-out">
          <img className="object-cover object-center rounded" alt="hero" src="/hero.png" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="heroheading text-gray-headerbg mb-4 ">
            When expressing your creativity is free,<br className="hidden lg:inline-block"></br>
            Why should gas and minting fee stop you?
          </h1>
          <p className="para text-gray-headerbg mb-8 leading-relaxed">
            We are working on creating a free, fair, easy and a less intimidating NFT Marketplace, so that the layman may open thyself up to new ventures
          </p>
          <div className="flex justify-center">
          {/*<Link href="https://prototype.crazynft.tech" passHref>
           <button class=" 
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
                    
                    transform hover:scale-105 duration-300 ease-in-out
                    mt-4 md:mt-0"
                    >
            <span className="txtw">Launch App</span>
          </button> 
          </Link>*/}
          <button class=" 
                    inline-flex 
                    items-center  
                    bg-gray-headerbg
                    // border-2 
                    // border-gray-headerbg
                    // hover:border-gray-default
                    text-gray-graddark
                    hover:text-gray-default
                    w-secondarybuttonwidth 
                    h-buttonheight 
                    py-1 px-3 
                    focus:outline-none 
                    rounded 
                    transform hover:scale-105 duration-300 ease-in-out
                    mt-4 md:mt-0"
                    >
            <span className="secondarybuttontxt">Read Whitepaper</span>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.defaultProps = {
  theme: 'indigo'
};

Hero.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Hero;
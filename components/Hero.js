import React from "react";
import PropTypes from  "prop-types";

function Hero(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="heading mb-4">
            When expressing your creativity is free,<br className="hidden lg:inline-block"></br>
            Why should gas and minting fee stop you?
          </h1>
          <p className="para mb-8 leading-relaxed">
            We are working on creating a free, fair, easy and a less intimidating NFT Marketplace, so that the layman may open thyself up to new ventures
          </p>
          <div className="flex justify-center">
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
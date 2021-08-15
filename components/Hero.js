import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

// services, helpers
import saveEmail from '../pages/services/saveEmail'
import validateEmail from "../pages/helpers/validateEmail"

function Hero(props) {

  const [email, setEmail] = useState(null);

  const save = async () => {
    if (!email) {
      alert('Please enter your Email!')
      return
    }

    if (validateEmail(email)) {
      try {
        let res = await saveEmail(email)
        if (res) {
          setEmail('')
          alert('Thank you for enrolling!')
        }
      } catch (err) {
        alert('Something went wrong!!')
      }
    } else {
      alert('Enter a valid email id!!')
    }

  }
  return (
    <section className="text-gray-600 bg-gradient-to-r 
    from-green-dark 
    to-green-light ">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-heroimgwidth lg:w-heroimgwidth md:w-1/2 w-5/6 mb-10 md:mb-0 mb scale-105 px-4 transform hover:scale-110 mr-10 duration-300 ease-in-out">
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
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-4/5 w-3/4">
                <label for="hero-field" className="py-2 leading-7 text-base text-gray-headerbg">SignUp now to stay updated and earn <b>FREE!</b> NFT Credits</label>
                <input type="text" id="hero-field" name="hero-field" 
                  placeholder='Your email id'
                  value={email} className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  onChange={(event) => setEmail(event.target.value)} 
                />
              </div>
              {/* <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
              <button
                onClick={save}
                className="
                    inline-flex 
                    items-center  
                    bg-gray-headerbg
                    // border-2 
                    // border-gray-headerbg
                    // hover:border-gray-default
                    text-gray-graddark
                    hover:text-gray-default
                    w-secondarybuttonwidth 
                    h-secondarybuttonheight 
                    py-1/2 px-2/3 
                    focus:outline-none 
                    rounded 
                    transform hover:scale-105 duration-300 ease-in-out
                    mt-4 md:mt-0"
              >
                <span className="secondarybuttontxt text-base">Submit</span>
              </button>
              </div>
            </div>

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

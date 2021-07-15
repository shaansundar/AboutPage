import React from "react";
import Link from "next/link";
import PropTypes from  "prop-types";
import {
  faTractor,
  faGift,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { helli } from "react-icons/fa";


function Icon({icon}) {
  return (
      <div className="flex items-center justify-center h-300 w-300 rounded-full transform hover:scale-105 duration-300 mb-10 ease-in-out mr-iconcontentrightmargin">
        <FontAwesomeIcon icon={icon} size="9x" color="#288782" />
      </div>
  );
}

function LightFeatureB(props) {
  return (
    <section className="text-gray-600 body-font bg-gray-headerbg ">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="featureheading mb-4">
          Why CrazyNFT?
          </h1>
          <p className="para leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Yes, we know there are so many marketplaces out there, but here's why you'd save your burning pocket with us :)
          </p>
          <div className="flex mt-6 justify-center">
            <div className={`w-16 h-1 rounded-full bg-${props.theme}-500 inline-flex`}></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center transform hover:scale-105 duration-300 ease-in-out">
            <div className={`w-auto h-auto  inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 mb-8 flex-shrink-0`}>
            <Icon icon={faGift}/>
            </div>
            <div className="flex-grow">
              <h2 className="headingname mb-3">
                Free for Creators
              </h2>
              <p className="para leading-relaxed text-base">
              One Click to create your own NFT, for absolutely free.<br/>Set a price and start earning!
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center transform hover:scale-105 duration-300 ease-in-out">
          <div className={`w-auto h-auto inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 mb-8 flex-shrink-0`}>
          <Icon icon={faTractor} />
            </div>
            <div className="flex-grow">
              <h2 className="headingname mb-3">
              $CRZY Farming & Royalties
              </h2>
              <p className="para leading-relaxed text-base">
              Earn $CRZY tokens for every sale or premium mint.<br/>Farm, Harvest, reap all your profits.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center transform hover:scale-105 duration-300 ease-in-out">
          <div className={`w-auto h-auto ease-in-out inline-flex items-center justify-center rounded-full bg-${props.theme}-100 text-${props.theme}-500 mb-8 flex-shrink-0`}>
          <Icon icon={faRocket} />
            </div>
            <div className="flex-grow">
              <h2 className="headingname mb-3">
              Digital Artist Launchpad
              </h2>
              <p className="para leading-relaxed text-base">
              Want to be a bestseller in the realm of digital arts?<br/>Have your own dedicated marketplace page, get featured!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LightFeatureB.defaultProps = {
  theme: 'indigo'
};

LightFeatureB.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightFeatureB;
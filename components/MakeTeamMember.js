import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  faLinkedinIn,
  faTwitter,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, href }) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark mr-5">
        <FontAwesomeIcon icon={icon} size="lg" color="#e4f1f1" />
      </div>
    </Link>
  );
}

const MakeTeamMember = (members) => {  
    return(
      <div class="p-4 my-5 lg:w-1/4 md:w-1/2 min-h-full">
      <div class="h-full flex flex-col items-center text-center">
        <img alt="team" class="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center p-4 mb-4" src={members.image} />
        <div class="w-full">
          <h2 class="headingname mb-2">{members.name}</h2>
          <h3 class="mb-4 postname">{members.post}</h3>
          <p class="mb-4 quote">{members.quote}</p>
          <span class="flex iconplacement">
              <Icon icon={faLinkedinIn} href="#" />
              <Icon icon={faTwitter} href="#" />
              <Icon icon={faDiscord} href="#" />
              <Icon icon={faYoutube} href="#" />
            </span>
        </div>
      </div>
    </div>
    );
}
export default MakeTeamMember

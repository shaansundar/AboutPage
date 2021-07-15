import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  faLinkedinIn,
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, href, trueval }) {
  if (trueval==1){
  return (
    <Link href={href}>
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-r from-green-light to-green-dark hover:from-gray-gradlight hover:to-gray-graddark transform hover:scale-105 duration-300 ease-in-out m-2">
        <FontAwesomeIcon icon={icon} size="lg" color="#e4f1f1" />
      </div>
    </Link>
  );}
  else{
    return (
      <div>
      </div>
    )
  }
}

const MakeTeamMember = (members) => { 
  let linkedinval,twitterval,githubval,instagramval; 
  {members.github.length!=0 ? githubval=1 : githubval=0}
  {members.linkedin.length!=0 ? linkedinval=1 : linkedinval=0}
{members.insta.length!=0 ? instagramval=1 : instagramval=0}
{members.twitter.length!=0 ? twitterval=1 : twitterval=0}
    return(
      <div class="p-4 my-5 lg:w-1/4 md:w-1/2 min-h-full transform hover:scale-105 duration-300 ease-in-out">
      <div class="h-full flex flex-col items-center text-center">
        <img alt="team" class="flex-shrink-0 rounded-lg w-full h-auto object-cover object-center p-4 mb-4 " src={members.image} />
        <div class="w-full h-full">
          <h2 class="headingname mb-2">{members.name}</h2>
          <h3 class="mb-4 postname">{members.post}</h3>
          <div class="h-36 w-80 justify-center mx-3 p-4">
          <p class="mb-4 quote">{members.quote}</p>
          </div>
          
          <span class="items-center object-center text-center flex iconplacement">
          <div class="object-center content-center flex item-center">
              <Icon icon={faLinkedinIn} href={members.linkedin} trueval={linkedinval} />
              <Icon icon={faGithub} href={members.github} trueval={githubval}/>              
              <Icon icon={faInstagram} href={members.insta} trueval={instagramval}/>              
              <Icon icon={faTwitter} href={members.twitter} trueval={twitterval}/>
              </div>
            </span>
        </div>
      </div>
    </div>
    );
}
export default MakeTeamMember

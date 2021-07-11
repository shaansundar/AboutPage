import React from "react";
import members from "./team.json";
import MakeTeamMember from "./MakeTeamMember";

function AboutUs() {
  // let k = [];
  // for(let i in members) {
  //   k.push(MakeTeamMember(members[i]));
  //   }
  // console.log(k)
  const listofteam = members.map((member) => MakeTeamMember(member));
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="heading font-medium title-font text-gray-900">
            The Crazy Team
          </h1>
          <p className="txt">A bunch of CrazyGEEKS on a CrazyMISSION</p>
        </div>
        <div className="flex flex-wrap">
        <MakeTeamMember {... members[0]} />
        <MakeTeamMember {... members[1]} />
        <MakeTeamMember {... members[2]} />
        <MakeTeamMember {... members[3]} />
        <MakeTeamMember {... members[4]} />
        <MakeTeamMember {... members[5]} />
        <MakeTeamMember {... members[6]} />
        <MakeTeamMember {... members[7]} />
        <MakeTeamMember {... members[8]} />
        <MakeTeamMember {... members[9]} />
        <MakeTeamMember {... members[10]} />
        <MakeTeamMember {... members[11]} />
        <MakeTeamMember {... members[12]} />
        <MakeTeamMember {... members[13]} />
        <MakeTeamMember {... members[14]} />
        <MakeTeamMember {... members[15]} />
        </div>
        {/* <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://dummyimage.com/206x206"
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Henry Letham
                </h2>
                <h3 className="text-gray-500 mb-3">Designer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                </span>
              </div>
            </div>
          </div> 
        </div>*/}
      </div>
    </section>
  );
}

export default AboutUs;

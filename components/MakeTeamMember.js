import React from "react";
const MakeTeamMember = (members) => {  
    return(
        
          <div className="p-8 lg:w-1/3 ">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={members.image}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-large text-lg">
                  {members.name}
                </h2>
                <h3 className="text-gray-500 mb-3">{members.post}</h3>
                <p className="mb-4">
                  {members.quote}
                </p>
                <span className="inline-flex">
                </span>
              </div>
            </div>
          </div>
    );
}
export default MakeTeamMember

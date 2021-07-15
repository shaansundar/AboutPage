export default function Banner() {
  return (
    <div className="min-w-full bg-gradient-to-r from-green-dark to-green-light py-12 px-3">
      <div className="max-w-5xl flex flex-col items-center justify-center m-auto">
        <h1 className="txtw text-6xl mt-6">The CRZY Token</h1>
        <p className="txtw mt-5 mb-8 text-gray-light">
          Token economy is built around the CRZY token, a unit of value on the
          platform that enables token holders to use applications on this
          platform, participate in network governance and earn additional
          rewards by using the platform.
        </p>
        {/* <button className="px-6 py-3 mt-4 mb-2 bg-green-dark hover:bg-gray-darkest rounded-sm m-auto">
          <span className="text-xl text-gray-light">Earn CRZY</span>
        </button> */}
        <button class=" 
                    inline-flex 
                    items-center  
                    bg-gray-headerbg
                    text-gray-graddark
                    hover:text-gray-default
                    w-secondarybuttonwidth 
                    h-buttonheight 
                    py-3 px-1 
                    focus:outline-none 
                    rounded 
                    transform hover:scale-105 duration-300 ease-in-out
                    mt-4 mb-4 md:mt-0"
                    >
            <span className="secondarybuttontxt">Earn CRZY!</span>
          </button>
      </div>
    </div>
  );
}

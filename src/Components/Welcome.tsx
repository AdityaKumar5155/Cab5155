const Welcome = () => {
  const welcome = "welcome.jpg";
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex-col text-white lg:w-2/3 w-full bg-gray-900 flex items-center justify-center sm:p-0 px-5 ">
        <div className="flex justify-center items-center flex-col">
        <p className="md:text-5xl text-5xl font-extrabold sm:block flex flex-col items-center">GET YOUR <span className="text-yellow-400">FIRST RIDE</span> NOW</p>
        <p className="md:text-xl text-md sm:mt-0 mt-10 text-white ">BIKES • CARS • TRANSPORTATION • SCHEDULED RIDES</p>
        <div className="md:w-auto w-full">
          <form
            className="flex md:flex-row flex-col w-full items-center justify-between mt-16"
            action=""
          >

              <input
                className="md:w-60 w-full h-10 rounded-xl p-2 text-black font-bold bg-white"
                placeholder="Source"
                type="text"
                name="source"
              />
          
            <div className="flex justify-center items-center w-16 h-10">
              • • •
            </div>
            
              <input
                className="md:w-60 w-full h-10 rounded-xl p-2 text-black font-bold bg-white"
                type="text"
                name="destination"
                placeholder="Destination"
              />
            

            <button className="w-32 h-10 m-6 p-2 bg-white rounded-xl mx-4 text-black">
              Get Your Fare
            </button>
          </form>
        </div>
        </div>
      </div>
      <div className="absolute lg:block hidden right-0 w-[40%] bg-black rounded-tl-[85%] overflow-hidden">
        <div className="w-full bg-gray-300 flex items-center justify-center ">
            <div className="overflow-hidden bg-black border-none">
          <img className="w-full h-screen " src={welcome} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

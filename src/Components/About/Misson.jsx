function Mission() {
  return (
    <div className="flex justify-center items-center px-2 md:px-10 h-full pt-20 bg-white font-roboto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl font-bold px-10 text-green-800">OUR MISSION</h1>
         
          <p className="mt-4 text-lg px-10 text-gray-700">
            To provide the most reliable, affordable, sustainable & 
            environment-friendly personal transportation to 
            Indian families.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="https://placehold.co/600x400"
            alt="Close-up of a vehicle's headlight with blue LED lights and two insets showing different light details"
            className="w-full max-w-xs md:max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Mission;

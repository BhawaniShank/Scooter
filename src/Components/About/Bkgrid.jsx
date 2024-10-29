const Bkgrid = () => {
  return (
    <div className="flex justify-center items-center h-full py-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg">
        <div className="flex justify-center items-center">
          <img
            src="https://placehold.co/600x400"
            alt="Blue scooter on a platform with a speedometer background"
            className="w-full h-auto"
          />
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://placehold.co/300x200"
              alt="Blue scooter on a path with a blurred background"
              className="w-full h-auto"
            />
            <img
              src="https://placehold.co/300x200"
              alt="Black scooter with a blue background"
              className="w-full h-auto"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img
              src="https://placehold.co/300x200"
              alt="Silver and black scooter with a blurred background"
              className="w-full h-auto"
            />
            <img
              src="https://placehold.co/300x200"
              alt="Multiple scooters lined up with a green background"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bkgrid;

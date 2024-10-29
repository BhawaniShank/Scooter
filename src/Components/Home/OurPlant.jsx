

// Importing icons directly as SVG files. Ensure to have the icons in your project.
import plantIcon1 from './Images/purchase-order-24.png'; // Replace with the correct path
import plantIcon2 from './Images/car-4-24.png'; // Replace with the correct path

const OurPlant = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-4">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex-1">
                    <img
                        src="https://placehold.co/400x300"
                        alt="Two workers in safety gear discussing in a factory setting"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="flex-1 flex flex-col space-y-4">
                    <div className="bg-green-800 text-white px-4 py-2 rounded-md text-center">
                        <h2 className="text-xl font-bold">Our Plant</h2>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center space-y-2">
                            <img src={plantIcon1} alt="Plant 1 Icon" className="text-red-600 w-12 h-12" />
                            <h3 className="text-lg font-semibold">Plant 1</h3>
                            <p className="text-gray-600 text-center">5/20, Dharuhera, Rewari, Haryana, 123106</p>
                        </div>
                        <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center space-y-2">
                            <img src={plantIcon2} alt="Plant 2 Icon" className="text-red-600 w-12 h-12" />
                            <h3 className="text-lg font-semibold">Plant 2</h3>
                            <p className="text-gray-600 text-center">Alangirpur, Khatawali Road, Rajpura, Dharuhera, Rewari, Haryana 123106</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPlant;

import React from 'react';

const VendorsCardInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl w-4/5 mx-auto p-4 flex flex-col md:flex-row">
      {/* Image */}
      <div className="md:w-2/6 mb-4 md:mb-2">
        <img
          src="../../assets/images/hero-carousel/contact-us.jpg"
          alt="Landscape"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Text */}
      <div className="md:w-4/6 md:pl-4">
        <h2 className="text-2xl font-bold mb-2">Lavin Place</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Phasellus eget sapien turpis.
        </p>
        <p>
          Fusce finibus euismod lacinia. Aenean et leo turpis. Vivamus
          sagittis tellus sit amet justo congue, at bibendum quam
          vulputate.
        </p>

        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2">
            View Vendor
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">
            Edit Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorsCardInfo;

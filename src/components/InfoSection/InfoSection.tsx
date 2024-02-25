import React, { useState } from 'react';
import { FaDollarSign, FaMapMarkerAlt, FaCalendarAlt, FaGasPump, FaTint, FaBolt, FaWifi } from 'react-icons/fa';

const InfoSection = () => {
  const [gasIncluded, setGasIncluded] = useState(false);
  const [waterIncluded, setWaterIncluded] = useState(false);
  const [electricityIncluded, setElectricityIncluded] = useState(false);
  const [wifiIncluded, setWifiIncluded] = useState(false);

  return (
    <div className="bg-gray-100 p-6 rounded shadow-md mt-2 grid grid-cols-1 md:grid-cols-2 gap-20 pl-8">
      <section>
        <div className="mb-10 flex items-center">
          <FaDollarSign className="text-3xl text-blue-500 mr-2" />
          <div>
            <h2 className="text-xl font-bold">The Price</h2>
            <p className="text-gray-700">It has overview content here.</p>
          </div>
        </div>

        <div className="mb-10 flex items-center">
          <FaMapMarkerAlt className="text-3xl text-green-500 mr-2" />
          <div>
            <h2 className="text-xl font-bold">The Location</h2>
            <p className="text-gray-700">It has overview content here.</p>
          </div>
        </div>

        <div className="mb-10 flex items-center">
          <FaCalendarAlt className="text-3xl text-purple-500 mr-2" />
          <div>
            <h3 className="text-xl font-bold">Availability Date</h3>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center">
          <FaGasPump className="text-3xl text-red-500 mr-2" />
          <div>
            <h3 className="text-xl font-bold">Gas Included</h3>
            <button className={`btn-yes ${gasIncluded ? 'active' : ''}`} onClick={() => setGasIncluded(true)}>Yes</button>
            <button className={`btn-no ${!gasIncluded ? 'active' : ''}`} onClick={() => setGasIncluded(false)}>No</button>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <FaTint className="text-3xl text-blue-500 mr-2" />
          <div>
            <h3 className="text-xl font-bold">Water Included</h3>
            <button className={`btn-yes ${waterIncluded ? 'active' : ''}`} onClick={() => setWaterIncluded(true)}>Yes</button>
            <button className={`btn-no ${!waterIncluded ? 'active' : ''}`} onClick={() => setWaterIncluded(false)}>No</button>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <FaBolt className="text-3xl text-yellow-500 mr-2" />
          <div>
            <h3 className="text-xl font-bold">Electricity Included</h3>
            <button className={`btn-yes ${electricityIncluded ? 'active' : ''}`} onClick={() => setElectricityIncluded(true)}>Yes</button>
            <button className={`btn-no ${!electricityIncluded ? 'active' : ''}`} onClick={() => setElectricityIncluded(false)}>No</button>
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <FaWifi className="text-3xl text-indigo-500 mr-2" />
          <div>
            <h3 className="text-xl font-bold">Wi-Fi Included</h3>
            <button className={`btn-yes ${wifiIncluded ? 'active' : ''}`} onClick={() => setWifiIncluded(true)}>Yes</button>
            <button className={`btn-no ${!wifiIncluded ? 'active' : ''}`} onClick={() => setWifiIncluded(false)}>No</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoSection;

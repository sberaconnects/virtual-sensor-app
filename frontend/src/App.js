import React, { useState } from 'react';

function App() {
  const [torqueData, setTorqueData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTorqueData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/api/torque');
      const data = await response.json();
      setTorqueData(data);
    } catch (err) {
      console.error('Error fetching torque data:', err);
      setTorqueData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🚗 Virtual Tyre Torque Sensor</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {torqueData ? (
          Object.entries(torqueData).map(([wheel, value]) => (
            <div key={wheel} className="bg-gray-100 p-4 rounded-xl shadow text-center">
              <h2 className="font-semibold capitalize">{wheel}</h2>
              <p className="text-xl text-blue-600">{value} Nm</p>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">
            No data yet. Click the button to fetch sensor data.
          </p>
        )}
      </div>

      <button
        onClick={fetchTorqueData}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Fetching...' : 'Fetch Torque Data'}
      </button>
    </div>
  );
}

export default App;

"use client"; // Mark this as a client-side component

import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations

export default function FleetPage() {
  // State for dynamic fleet data
  const [fleet, setFleet] = useState<any[]>([]);

  // Simulating fetching fleet data
  useEffect(() => {
    setTimeout(() => {
      setFleet([
        { id: 1, name: "Truck #A12", type: "Cargo", capacity: "10 tons", status: "Available" },
        { id: 2, name: "Truck #B34", type: "Refrigerated", capacity: "5 tons", status: "En Route" },
        { id: 3, name: "Truck #C56", type: "Flatbed", capacity: "15 tons", status: "Under Maintenance" },
      ]);
    }, 1000);
  }, []);

  return (
    <motion.main
      className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-extrabold text-blue-600">Fleet Management</h1>
        </header>

        {/* Fleet Trucks List */}
        <motion.section
          className="bg-white rounded-lg shadow-lg p-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Fleet</h2>
          <div className="space-y-4">
            {fleet.length > 0 ? (
              fleet.map((truck) => (
                <div key={truck.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold">{truck.name}</h3>
                  <p className="text-sm text-gray-500">Type: {truck.type}</p>
                  <p className="text-sm text-gray-500">Capacity: {truck.capacity}</p>
                  <p className="text-sm text-gray-500">Status: {truck.status}</p>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-500">No trucks in the fleet.</p>
            )}
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}

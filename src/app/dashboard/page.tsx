"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define types for deliveries
type Delivery = {
  id: number;
  name: string;
  status: string;
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [activeDeliveries, setActiveDeliveries] = useState<Delivery[]>([]);
  const [selectedTab, setSelectedTab] = useState("deliveries");

  useEffect(() => {
    setTimeout(() => {
      setActiveDeliveries([
        { id: 1, name: "Delivery #123", status: "In Progress" },
        { id: 2, name: "Delivery #124", status: "Completed" },
      ]);
    }, 1000);
  }, []);

  if (status === "loading") {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-extrabold text-blue-600">
            Welcome to EasyTrucks,{" "}
            <span className="text-blue-900">{session.user?.name}</span>
          </h1>
        </header>

        {/* User Info */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Your Info
          </h2>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Name:</strong> {session.user?.name}
            </p>
            <p className="text-lg">
              <strong>Email:</strong> {session.user?.email}
            </p>
          </div>
        </section>

        {/* Logout Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="px-6 py-3 text-sm font-medium text-white bg-red-600 rounded-full shadow-md"
          >
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedTab("deliveries")}
            className={`px-4 py-2 rounded-lg ${
              selectedTab === "deliveries"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Deliveries
          </button>
          <button
            onClick={() => setSelectedTab("routes")}
            className={`px-4 py-2 rounded-lg ${
              selectedTab === "routes"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Routes
          </button>
          <button
            onClick={() => setSelectedTab("analytics")}
            className={`px-4 py-2 rounded-lg ${
              selectedTab === "analytics"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Analytics
          </button>
        </div>

        {/* Tab Content */}
        {selectedTab === "deliveries" && (
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Active Deliveries
            </h2>
            <div className="space-y-4">
              {activeDeliveries.length > 0 ? (
                activeDeliveries.map((delivery) => (
                  <div
                    key={delivery.id}
                    className="bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-lg">{delivery.name}</p>
                    <p className="text-sm text-gray-500">
                      Status: {delivery.status}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-lg text-gray-500">No active deliveries yet.</p>
              )}
            </div>
          </section>
        )}

        {selectedTab === "routes" && (
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Scheduled Routes
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p className="text-lg">Route #1</p>
                <p className="text-sm text-gray-500">Truck: Truck #1</p>
                <p className="text-sm text-gray-500">Scheduled Time: 10:00 AM</p>
              </div>
            </div>
          </section>
        )}

        {selectedTab === "analytics" && (
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Analytics
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <p className="text-lg">Total Deliveries Completed: 150</p>
                <p className="text-sm text-gray-500">
                  Average Delivery Time: 2 hours
                </p>
                <p className="text-sm text-gray-500">
                  Fleet Utilization: 85%
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

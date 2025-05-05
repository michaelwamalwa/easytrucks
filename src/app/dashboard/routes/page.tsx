"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the Route type
type Route = {
  id: number;
  routeName: string;
  truckAssigned: string;
  scheduledTime: string;
};

export default function RoutesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [routes, setRoutes] = useState<Route[]>([]);

  // If session is loading or not available, redirect to login
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  // Fetch routes data (simulating dynamic content)
  useEffect(() => {
    setTimeout(() => {
      setRoutes([
        { id: 1, routeName: "Route #1", truckAssigned: "Truck #1", scheduledTime: "10:00 AM" },
        { id: 2, routeName: "Route #2", truckAssigned: "Truck #2", scheduledTime: "12:00 PM" },
      ]);
    }, 1000);
  }, []);

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Scheduled Routes</h1>

      {routes.length > 0 ? (
        <div className="space-y-4">
          {routes.map((route) => (
            <div key={route.id} className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-lg font-semibold">{route.routeName}</p>
              <p className="text-sm text-gray-600">Truck: {route.truckAssigned}</p>
              <p className="text-sm text-gray-500">Scheduled Time: {route.scheduledTime}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No routes scheduled at the moment.</p>
      )}
    </main>
  );
}

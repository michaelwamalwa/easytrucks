"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DeliveriesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [deliveries, setDeliveries] = useState<any[]>([]);

  // If session is loading or not available, redirect to login
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  // Fetch deliveries data (simulating dynamic content)
  useEffect(() => {
    setTimeout(() => {
      setDeliveries([
        { id: 1, name: "Delivery #001", status: "In Progress", customer: "John Doe" },
        { id: 2, name: "Delivery #002", status: "Completed", customer: "Jane Smith" },
      ]);
    }, 1000);
  }, []);

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Active Deliveries</h1>

      {deliveries.length > 0 ? (
        <div className="space-y-4">
          {deliveries.map((delivery) => (
            <div key={delivery.id} className="bg-white p-4 rounded-md shadow-sm">
              <p className="text-lg font-semibold">{delivery.name}</p>
              <p className="text-sm text-gray-600">Status: {delivery.status}</p>
              <p className="text-sm text-gray-500">Customer: {delivery.customer}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No active deliveries at the moment.</p>
      )}
    </main>
  );
}

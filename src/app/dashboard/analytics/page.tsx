"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type AnalyticsData = {
  deliveriesCompleted: number;
  averageDeliveryTime: string;
  fleetUtilization: string;
};

export default function AnalyticsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }

    if (status === "authenticated") {
      // Simulate fetching data
      setTimeout(() => {
        setAnalyticsData({
          deliveriesCompleted: 150,
          averageDeliveryTime: "2 hours",
          fleetUtilization: "85%",
        });
      }, 1000);
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Analytics</h1>

      {/* Use session to display the logged-in user's name */}
      {session?.user?.name && (
        <p className="text-lg text-gray-700 mb-6">
          Welcome, <span className="font-semibold">{session.user.name}</span>!
        </p>
      )}

      {analyticsData ? (
        <div className="bg-white p-6 rounded-md shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Performance Overview</h2>
          <ul className="space-y-4">
            <li className="text-lg">Total Deliveries Completed: {analyticsData.deliveriesCompleted}</li>
            <li className="text-lg">Average Delivery Time: {analyticsData.averageDeliveryTime}</li>
            <li className="text-lg">Fleet Utilization: {analyticsData.fleetUtilization}</li>
          </ul>
        </div>
      ) : (
        <p>No analytics data available.</p>
      )}
    </main>
  );
}

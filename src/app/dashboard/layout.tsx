import { ReactNode } from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Topbar */}
      <header className="bg-white shadow-md px-6 py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold text-blue-600">EasyTrucks</h1>
          <nav className="space-x-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/fleet">Fleet</Link>
            <Link href="/dashboard/profile">Profile</Link>
            
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full">{children}</main>

      <footer className="text-center text-xs text-gray-400 py-4">
        &copy; {new Date().getFullYear()} EasyTrucks. All rights reserved.
      </footer>
    </div>
  );
}

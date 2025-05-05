"use client"; // Mark this as a client-side component

import { useSession } from "next-auth/react";
import { motion } from "framer-motion"; // For animations
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [editing, setEditing] = useState(false);

  // Toggle edit mode for profile info
  const toggleEdit = () => setEditing(!editing);

  // If the session status is loading or there is no session, return loading or redirect
  if (status === "loading") {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (!session) {
    return <p className="text-center text-xl">Please log in to view your profile.</p>;
  }

  return (
    <motion.main
      className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-extrabold text-blue-600">Profile</h1>
        </header>

        {/* User Info */}
        <motion.section
          className="bg-white rounded-lg shadow-lg p-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Info</h2>
          <div className="space-y-4">
            <p className="text-lg"><strong>Name:</strong> {session.user?.name}</p>
            <p className="text-lg"><strong>Email:</strong> {session.user?.email}</p>

            {/* Edit Profile */}
            <div className="flex justify-end mt-4">
              {editing ? (
                <button
                  onClick={toggleEdit}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={toggleEdit}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit Profile
                </button>
              )}
            </div>

            {/* If editing */}
            {editing && (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  defaultValue={session.user?.name ?? ""}
                  className="w-full p-2 border rounded-md"
                  placeholder="Edit Name"
                />
                <input
                  type="email"
                  defaultValue={session.user?.email ?? ""}
                  className="w-full p-2 border rounded-md"
                  placeholder="Edit Email"
                />
              </div>
            )}
          </div>
        </motion.section>

        {/* Logout Button */}
        <div className="flex justify-center mt-6">
          <motion.button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="px-6 py-3 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-full shadow-md transform transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            Logout
          </motion.button>
        </div>
      </div>
    </motion.main>
  );
}

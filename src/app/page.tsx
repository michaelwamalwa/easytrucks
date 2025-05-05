import Link from "next/link";
import { Clock, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="text-center max-w-2xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-5 hover:opacity-100 hover:translate-y-0">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">
          EasyTrucks
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8">
          Your partner in reliable, transparent, and efficient truck
          logistics solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Link
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Get Started
            </Link>
          </div>
          <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Link
              href="/login"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        {[{
          title: 'Real-Time Tracking',
          desc: 'Monitor your shipments live with our interactive map.',
          icon: <MapPin size={48} className="text-blue-600" />
        },
        {
          title: 'On-Time Delivery',
          desc: 'Guaranteed punctual arrivals for all your cargo.',
          icon: <Clock size={48} className="text-blue-600" />
        }].map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg opacity-0 transform translate-y-5 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Call-to-Action Footer */}
      <div className="mt-20 text-center opacity-0 translate-y-5 transition-all duration-500 ease-in-out hover:opacity-100 hover:translate-y-0">
        <p className="text-lg text-gray-700 mb-4">
          Ready to drive your business forward?
        </p>
        <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
          <Link
            href="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-lg text-lg font-semibold"
          >
            Join EasyTrucks Today
          </Link>
        </div>
      </div>
    </main>
  );
}

import { motion } from 'framer-motion';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';

interface RoomsProps {
  onNavigate: (page: string, roomId?: string) => void;
}

export default function Rooms({ onNavigate }: RoomsProps) {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&q=80"
            alt="Luxury Hotel Rooms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            Rooms & Suites
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Discover your perfect sanctuary of comfort and elegance
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                  All Accommodations
                </h2>
                <p className="text-gray-600">
                  {rooms.length} luxury rooms and suites available
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <RoomCard
                key={room.id}
                room={room}
                onViewDetails={(roomId) => onNavigate('room-details', roomId)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Can't Decide?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our dedicated concierge team is here to help you find the perfect accommodation that matches your preferences and requirements. We're available 24/7 to assist you.
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors duration-200"
                >
                  Contact Our Team
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Browse & Compare</h3>
                    <p className="text-sm text-gray-600">
                      Explore our collection of luxury accommodations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Select Your Room</h3>
                    <p className="text-sm text-gray-600">
                      Choose the perfect room that suits your needs
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-amber-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Book with Confidence</h3>
                    <p className="text-sm text-gray-600">
                      Enjoy free cancellation up to 48 hours before arrival
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

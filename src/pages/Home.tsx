import { motion } from 'framer-motion';
import { ArrowRight, Award, Clock, Shield } from 'lucide-react';
import RoomCard from '../components/RoomCard';
import { rooms } from '../data/rooms';

interface HomeProps {
  onNavigate: (page: string, roomId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
            alt="Luxury Hotel Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Classic Luxury
            <br />
            Redefined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Experience the pinnacle of refined hospitality at Comfern Hotel
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => onNavigate('rooms')}
              className="bg-amber-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-amber-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80"
                alt="Hotel Lobby"
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Welcome to Comfern Hotel
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nestled in the heart of the city, Comfern Hotel stands as a beacon of timeless elegance and sophisticated luxury. Our commitment to exceptional service and attention to detail ensures that every moment of your stay is nothing short of extraordinary.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From our meticulously designed rooms to our world-class amenities, we've crafted an environment where classic luxury meets modern comfort, creating an unforgettable experience for the discerning traveler.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Award className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Award Winning</h3>
                  <p className="text-sm text-gray-600">Excellence in hospitality</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Clock className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">24/7 Service</h3>
                  <p className="text-sm text-gray-600">Always at your service</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Shield className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Safe & Secure</h3>
                  <p className="text-sm text-gray-600">Your safety matters</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-serif font-bold text-gray-900 mb-4"
            >
              Featured Accommodations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Discover our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and luxury
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredRooms.map((room, index) => (
              <RoomCard
                key={room.id}
                room={room}
                onViewDetails={(roomId) => onNavigate('room-details', roomId)}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('rooms')}
              className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium text-lg group"
            >
              <span>View All Rooms</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

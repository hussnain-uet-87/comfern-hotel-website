import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Maximize } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import BookingCard from '../components/BookingCard';
import { rooms } from '../data/rooms';

interface RoomDetailsProps {
  roomId: string;
  onNavigate: (page: string) => void;
}

export default function RoomDetails({ roomId, onNavigate }: RoomDetailsProps) {
  const room = rooms.find((r) => r.id === roomId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Room Not Found
          </h1>
          <button
            onClick={() => onNavigate('rooms')}
            className="text-amber-600 hover:text-amber-700"
          >
            Back to Rooms
          </button>
        </div>
      </div>
    );
  }

  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
    return Icon || LucideIcons.Circle;
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('rooms')}
          className="flex items-center space-x-2 text-gray-600 hover:text-amber-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to Rooms</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="relative h-96 md:h-[500px]">
                  <img
                    src={room.images[selectedImage]}
                    alt={`${room.title} - Image ${selectedImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-4 gap-2 p-4">
                  {room.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 rounded-lg overflow-hidden ${
                        selectedImage === index
                          ? 'ring-2 ring-amber-600'
                          : 'opacity-70 hover:opacity-100'
                      } transition-all`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                      {room.title}
                    </h1>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Maximize className="h-4 w-4" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Downtown District</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-right">
                      <span className="text-3xl font-serif font-bold text-amber-600">
                        ${room.price}
                      </span>
                      <span className="text-gray-600 text-sm ml-2">/ night</span>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none mb-8">
                  <p className="text-gray-600 leading-relaxed">{room.description}</p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    Room Amenities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {room.amenities.map((amenity, index) => {
                      const IconComponent = getIconComponent(amenity.icon);
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50"
                        >
                          <IconComponent className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{amenity.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-6">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                    Room Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Check-in Time</h3>
                      <p className="text-gray-600">{room.checkIn}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Check-out Time</h3>
                      <p className="text-gray-600">{room.checkOut}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Maximum Occupancy</h3>
                      <p className="text-gray-600">
                        {room.maxOccupancy.adults} {room.maxOccupancy.adults === 1 ? 'Adult' : 'Adults'}
                        {room.maxOccupancy.children > 0 &&
                          `, ${room.maxOccupancy.children} ${room.maxOccupancy.children === 1 ? 'Child' : 'Children'}`}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Room Size</h3>
                      <p className="text-gray-600">{room.size}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-6">
                  <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    Cancellation Policy
                  </h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-800">{room.cancellationPolicy}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BookingCard room={room} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

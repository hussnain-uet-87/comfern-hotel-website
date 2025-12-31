import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Room } from '../data/rooms';

interface RoomCardProps {
  room: Room;
  onViewDetails: (roomId: string) => void;
  index: number;
}

export default function RoomCard({ room, onViewDetails, index }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.thumbnail}
          alt={room.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
          {room.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-serif font-bold text-amber-600">
              ${room.price}
            </span>
            <span className="text-gray-500 text-sm ml-2">/ night</span>
          </div>

          <button
            onClick={() => onViewDetails(room.id)}
            className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium text-sm group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

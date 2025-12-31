import { useState } from 'react';
import { Minus, Plus, Calendar, Users } from 'lucide-react';
import { Room } from '../data/rooms';

interface BookingCardProps {
  room: Room;
}

export default function BookingCard({ room }: BookingCardProps) {
  const [nights, setNights] = useState(1);

  const incrementNights = () => {
    setNights((prev) => Math.min(prev + 1, 30));
  };

  const decrementNights = () => {
    setNights((prev) => Math.max(prev - 1, 1));
  };

  const totalPrice = room.price * nights;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
      <div className="mb-6">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-3xl font-serif font-bold text-amber-600">
            ${room.price}
          </span>
          <span className="text-gray-600 text-sm">per night</span>
        </div>
        <p className="text-sm text-gray-500">Excluding taxes and fees</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Calendar className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Check-in / Check-out</span>
          </div>
          <div className="text-sm text-gray-600">
            <div>Check-in: {room.checkIn}</div>
            <div>Check-out: {room.checkOut}</div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Users className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Max Occupancy</span>
          </div>
          <div className="text-sm text-gray-600">
            {room.maxOccupancy.adults} {room.maxOccupancy.adults === 1 ? 'Adult' : 'Adults'}
            {room.maxOccupancy.children > 0 && `, ${room.maxOccupancy.children} ${room.maxOccupancy.children === 1 ? 'Child' : 'Children'}`}
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <label className="text-sm font-medium text-gray-700 block mb-3">
            Number of Nights
          </label>
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
            <button
              onClick={decrementNights}
              disabled={nights === 1}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-lg font-semibold text-gray-900">{nights}</span>
            <button
              onClick={incrementNights}
              disabled={nights === 30}
              className="w-10 h-10 flex items-center justify-center rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600">
            ${room.price} × {nights} {nights === 1 ? 'night' : 'nights'}
          </span>
          <span className="font-semibold text-gray-900">${totalPrice}</span>
        </div>
        <div className="flex items-center justify-between text-lg font-serif font-bold">
          <span className="text-gray-900">Total Price</span>
          <span className="text-amber-600">${totalPrice}</span>
        </div>
      </div>

      <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-200 mb-4">
        Reserve Now
      </button>

      <p className="text-xs text-center text-gray-500">
        {room.cancellationPolicy}
      </p>
    </div>
  );
}

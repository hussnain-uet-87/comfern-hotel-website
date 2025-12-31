import { motion } from 'framer-motion';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
            alt="About Comfern Hotel"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Where timeless elegance meets modern luxury
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Since its establishment, Comfern Hotel has stood as a paragon of refined hospitality. Our journey began with a simple yet profound vision: to create a sanctuary where classic luxury seamlessly intertwines with contemporary comfort.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nestled in the vibrant heart of the downtown district, our hotel has become synonymous with exceptional service, meticulous attention to detail, and an unwavering commitment to guest satisfaction. Each corner of Comfern Hotel tells a story of elegance, from our thoughtfully curated interiors to our world-class amenities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that true luxury lies not just in opulent furnishings and premium amenities, but in the memories we help create and the experiences we craft for each of our distinguished guests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Hotel Interior"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">50K+</h3>
              <p className="text-gray-600">Happy Guests</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">98%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <TrendingUp className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Industry Awards</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80"
                alt="Hotel Service"
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to delivering nothing but the highest standards in every aspect of our service, from the moment you arrive to the moment you depart.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Honesty and transparency form the foundation of every interaction, ensuring trust and confidence in all our relationships.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    While honoring timeless traditions, we continuously evolve to incorporate modern amenities and technologies that enhance your stay.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Experience the Difference
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Comfern Hotel, we don't just provide accommodation—we create lasting memories. Every detail is thoughtfully considered, every service meticulously executed, all in service of one goal: your complete satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80"
                alt="Luxury Rooms"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Luxurious Accommodations
                </h3>
                <p className="text-gray-600 text-sm">
                  Each room is a masterpiece of design and comfort, featuring premium furnishings and state-of-the-art amenities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                alt="Fine Dining"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Exceptional Dining
                </h3>
                <p className="text-gray-600 text-sm">
                  Savor culinary excellence with our world-class restaurants offering diverse cuisines prepared by master chefs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80"
                alt="Wellness"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                  Wellness & Spa
                </h3>
                <p className="text-gray-600 text-sm">
                  Rejuvenate your body and mind at our premium spa and fitness facilities designed for your wellbeing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

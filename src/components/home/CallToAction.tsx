import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl group">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5 transform transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </motion.div>
        </div> 
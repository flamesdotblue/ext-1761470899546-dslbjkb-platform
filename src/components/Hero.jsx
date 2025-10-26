import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full" aria-label="Interactive cover">
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                Hello, World
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                A minimalist starter powered by React, Vite, and Tailwind. Interact with the tiled background to see a subtle ripple effect.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center rounded-md bg-red-500 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-red-600 transition"
                >
                  Get Started
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center rounded-md bg-white/80 backdrop-blur px-5 py-3 text-sm font-medium text-gray-900 border border-gray-200 hover:bg-white transition"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

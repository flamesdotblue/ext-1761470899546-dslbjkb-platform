import { Star, Settings, User } from 'lucide-react';

const features = [
  {
    title: 'Fast by default',
    description: 'Vite dev server and production builds keep things snappy and delightful.',
    icon: Star,
  },
  {
    title: 'Simple structure',
    description: 'Clean, focused components so you can scale features with confidence.',
    icon: Settings,
  },
  {
    title: 'Developer friendly',
    description: 'Tailwind, Framer Motion, and modern tooling are ready to go.',
    icon: User,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Why you will like this</h2>
          <p className="mt-3 text-gray-600">A tiny foundation with thoughtful defaults to help you ship quickly.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

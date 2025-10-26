export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="text-sm text-gray-500">
          Built with React, Vite, and Tailwind.
        </div>
      </div>
    </footer>
  );
}

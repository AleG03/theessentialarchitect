import Link from "next/link";
import Rooster from "./components/Rooster";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wider main-title">
            404
          </h1>
          <div className="w-[95%] h-px bg-black my-8"></div>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 opacity-50">
          <Rooster className="w-full h-full text-black" />
        </div>
      </div>
    </div>
  );
} 
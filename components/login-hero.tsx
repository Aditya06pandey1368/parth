import { ImageCarousel } from "./ui/image-carousel";
import logo from "@/public/logo.png";

export function LoginHero() {
  return (
    <div
      className="
        hidden md:flex   /* 👈 hide on small screens */
        flex-1 
        bg-gradient-to-br from-yellow-200 to-yellow-300 
        dark:from-gray-800 dark:to-gray-900 
        relative overflow-hidden
      "
      style={{
        clipPath:
          "polygon(0 0, 85% 0, 95% 15%, 90% 30%, 95% 45%, 90% 60%, 95% 75%, 85% 100%, 0 100%)",
      }}
    >
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center gap-2">
          <img
            src={logo.src}
            alt="Website Logo"
            className="w-16 h-16 object-contain"
          />
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Parth
          </span>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="flex items-center justify-center h-full p-8">
        <ImageCarousel />
      </div>
    </div>
  );
}

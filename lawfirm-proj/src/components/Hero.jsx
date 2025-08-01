import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional law office"
          className="w-full h-full object-cover brightness-[1.15] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-100 mb-6 drop-shadow-xl">
          Your Immigration Journey.{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-md">
            Our Expertise.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
          Guiding individuals and families through the U.S. immigration system
          with compassion, expertise, and unwavering dedication to your success.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-8 py-4 text-lg shadow-lg border border-yellow-500 hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-yellow-400 text-white hover:bg-yellow-500/10 px-8 py-4 text-lg"
          >
            Learn About Our Services
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400">15+</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">1000+</div>
            <div className="text-gray-300">Cases Resolved</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">98%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

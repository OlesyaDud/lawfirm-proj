import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo1.jpg";

export const About = () => {
  return (
    <section className="py-20 px-6 bg-[#101623] text-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                About Horizon Immigration Law
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-[#a0aec0]">
              <p>
                Founded on the principles of compassion, excellence, and
                unwavering dedication to our clients, Horizon Immigration Law
                has been a trusted advocate for individuals and families
                navigating the complexities of U.S. immigration law for over 15
                years.
              </p>

              <p>
                Our founding attorney, Maria Elena Rodriguez, established the
                firm with a simple yet powerful mission: to provide
                personalized, expert legal guidance that transforms immigration
                challenges into opportunities for a brighter future. Having
                personally experienced the immigration journey, our team
                understands the hopes, fears, and dreams that accompany each
                case.
              </p>

              <p>
                We believe that every immigration story matters, and every
                client deserves dedicated representation that combines legal
                expertise with genuine care and cultural sensitivity. Our
                bilingual team is committed to making the immigration process as
                clear and stress-free as possible.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-2 bg-[#1A202C] border border-yellow-500/20 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  15+
                </div>
                <div className="text-base text-[#A0AEC0]">
                  Years of Experience
                </div>
              </Card>

              <Card className="p-2 bg-[#1A202C] border border-yellow-500/20 rounded-xl">
                <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
                <div className="text-base text-[#A0AEC0]">Languages Spoken</div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 text-base rounded-xl shadow-lg transition"
              >
                Meet Our Attorneys
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500 text-white hover:bg-yellow-500/10 px-6 py-3 text-base rounded-xl transition"
              >
                Our Mission & Values
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={teamPhoto}
                alt="Horizon Immigration Law team"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101623]/70 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -left-8 p-8 bg-[#1A202C]/80 border border-yellow-500/40 shadow-lg rounded-xl w-[240px]">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-yellow-400 mb-2">
                  1000+
                </div>
                <div className="text-base text-[#A0AEC0]">Successful Cases</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

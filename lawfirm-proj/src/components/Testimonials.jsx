import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rodriguez",
    case: "Family Reunification",
    rating: 5,
    text: "Horizon Immigration Law helped reunite our family after three years of separation. Their expertise and compassion made all the difference. Maria and her team kept us informed every step of the way.",
    location: "Miami, FL",
  },
  {
    name: "Priya Patel",
    case: "H-1B to Green Card",
    rating: 5,
    text: "The employment-based immigration process seemed overwhelming until I found Horizon Immigration Law. They guided me through every step and secured my permanent residence faster than I expected.",
    location: "San Francisco, CA",
  },
  {
    name: "Ahmed Hassan",
    case: "Asylum Case",
    rating: 5,
    text: "I cannot express enough gratitude to this firm. They handled my asylum case with such care and professionalism. I now have a safe future in America thanks to their dedication.",
    location: "New York, NY",
  },
  {
    name: "Sofia Martinez",
    case: "Citizenship Application",
    rating: 5,
    text: "After years of dreaming about becoming a U.S. citizen, Horizon Immigration Law made it a reality. Their preparation for the interview was thorough and gave me confidence.",
    location: "Los Angeles, CA",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-[#0c0f16] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories from real people whose lives we've had the privilege to
            help transform. Your success is our greatest achievement.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#111827] border border-[#facc15]/20 rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:border-[#facc15] hover:shadow-[0_8px_30px_rgba(250,204,21,0.1)] group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <Quote className="h-8 w-8 text-[#facc15] opacity-60" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-[#facc15] fill-[#facc15]"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-300 leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t border-[#1f2937] pt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#facc15]">
                        {testimonial.case}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center mt-16">
          <div className="bg-[#111827] p-8 rounded-2xl border border-[#facc15]/20 shadow-md max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-gray-400 mb-6">
              Join hundreds of families who have achieved their American Dream
              with our help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#facc15]">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#facc15]">4.9</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#facc15]">500+</div>
                <div className="text-sm text-gray-400">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Shield,
  Briefcase,
  Award,
  UserCheck,
  MapPin,
} from "lucide-react";

const practiceAreas = [
  {
    icon: Users,
    title: "Family-Based Visas",
    description:
      "Reuniting families through marriage, parent, and sibling petitions. We handle K-1 fiancé visas, spousal visas, and adjustment of status cases.",
    topics: [
      "Marriage-based green cards",
      "K-1 fiancé visas",
      "Family reunification",
    ],
  },
  {
    icon: Shield,
    title: "Asylum & Refugee Status",
    description:
      "Protecting those seeking safety in the United States. We provide comprehensive support for asylum applications and refugee status adjustments.",
    topics: [
      "Asylum applications",
      "Defensive asylum",
      "Withholding of removal",
    ],
  },
  {
    icon: Briefcase,
    title: "Employment-Based Immigration",
    description:
      "Facilitating work-based immigration through various visa categories including H-1B, L-1, O-1, and permanent residence applications.",
    topics: ["H-1B visas", "L-1 transfers", "EB-1/EB-2/EB-3 green cards"],
  },
  {
    icon: Award,
    title: "Citizenship & Naturalization",
    description:
      "Guiding clients through the naturalization process to achieve U.S. citizenship, including preparation for interviews and ceremonies.",
    topics: [
      "Naturalization applications",
      "Citizenship tests",
      "Oath ceremonies",
    ],
  },
  {
    icon: UserCheck,
    title: "Deportation Defense",
    description:
      "Defending against removal proceedings and helping clients remain in the United States through various forms of relief.",
    topics: ["Removal proceedings", "Cancellation of removal", "Appeals"],
  },
  {
    icon: MapPin,
    title: "DACA / TPS",
    description:
      "Assisting with Deferred Action for Childhood Arrivals and Temporary Protected Status applications and renewals.",
    topics: ["DACA renewals", "TPS applications", "Work authorization"],
  },
];

export const PracticeAreas = () => {
  return (
    <section className="py-20 px-6 bg-[#0c0f16] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Our Practice Areas
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive immigration services tailored to your unique
            situation. Our experienced team handles all aspects of U.S.
            immigration law.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <Card
                key={index}
                className="bg-[#111827] border border-[#facc15]/20 rounded-xl transition-all duration-300 transform hover:scale-[1.03] hover:border-[#facc15] hover:shadow-[0_8px_30px_rgba(250,204,21,0.1)] group"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-[#facc15] rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="font-serif text-xl text-white transition-colors duration-300 group-hover:text-[#facc15]">
                    {area.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-gray-400 mb-6 leading-relaxed">
                    {area.description}
                  </CardDescription>

                  <div className="space-y-2 mb-6">
                    {area.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-[#facc15] rounded-full mr-3" />
                        {topic}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border border-[#facc15]/50 text-white bg-[#111827] hover:bg-[#facc15] hover:text-black transition-all duration-300"
                  >
                    Ask a Question
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-[#facc15] hover:brightness-110 text-black font-semibold px-8 py-4 shadow-md"
          >
            Schedule Your Consultation Today
          </Button>
        </div>
      </div>
    </section>
  );
};

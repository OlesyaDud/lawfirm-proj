import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white border-t border-[#facc15]/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#facc15] rounded-lg flex items-center justify-center">
                <Scale className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-serif text-xl font-bold">
                Horizon Immigration Law
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in navigating the U.S. immigration system
              with expertise, compassion, and unwavering dedication to your
              success.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-[#facc15]/10"
              >
                <Facebook className="h-5 w-5 text-gray-400 hover:text-[#facc15]" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-[#facc15]/10"
              >
                <Twitter className="h-5 w-5 text-gray-400 hover:text-[#facc15]" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-[#facc15]/10"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#facc15]" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-[#facc15]/10"
              >
                <Instagram className="h-5 w-5 text-gray-400 hover:text-[#facc15]" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Home",
                "About Us",
                "Practice Areas",
                "Our Team",
                "Case Results",
                "Blog",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-gray-400 hover:text-[#facc15] justify-start"
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Family-Based Visas",
                "Employment Immigration",
                "Asylum & Refugee Status",
                "Citizenship & Naturalization",
                "Deportation Defense",
                "DACA / TPS",
              ].map((service) => (
                <li key={service}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-gray-400 hover:text-[#facc15] justify-start text-left"
                  >
                    {service}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#facc15] mt-0.5" />
                <div>
                  <div className="font-medium text-white">(555) 123-4567</div>
                  <div className="text-sm text-gray-400">
                    24/7 Emergency Line
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#facc15] mt-0.5" />
                <div>
                  <div className="font-medium text-white">
                    info@horizonimmigration.law
                  </div>
                  <div className="text-sm text-gray-400">
                    Response within 24 hours
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#facc15] mt-0.5" />
                <div>
                  <div className="font-medium text-white">
                    123 Legal Plaza, Suite 500
                  </div>
                  <div className="text-sm text-gray-400">
                    Downtown District, State 12345
                  </div>
                </div>
              </div>
            </div>

            <Button className="mt-6 bg-[#facc15] hover:brightness-110 text-black font-semibold w-full">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Separator */}
        <Separator className="bg-[#facc15]/20" />

        {/* Bottom Row */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 Horizon Immigration Law. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button
              variant="ghost"
              className="p-0 h-auto text-gray-400 hover:text-[#facc15]"
            >
              Privacy Policy
            </Button>
            <Button
              variant="ghost"
              className="p-0 h-auto text-gray-400 hover:text-[#facc15]"
            >
              Terms of Service
            </Button>
            <Button
              variant="ghost"
              className="p-0 h-auto text-gray-400 hover:text-[#facc15]"
            >
              Legal Disclaimer
            </Button>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="pb-6">
          <div className="bg-[#1a1f2b] rounded-lg p-6 border border-[#facc15]/10">
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              <strong>Legal Disclaimer:</strong> The information on this website
              is for general information purposes only. Nothing on this site
              should be taken as legal advice for any individual case or
              situation. This information is not intended to create, and receipt
              or viewing does not constitute, an attorney-client relationship.
              Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

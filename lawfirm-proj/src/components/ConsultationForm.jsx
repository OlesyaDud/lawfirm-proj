import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, Phone, Mail, MapPin } from "lucide-react";
import consultationImage from "@/assets/consultation-room.jpg";

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    immigrationNeed: "",
    countryOfOrigin: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-12 px-6 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Schedule Your Consultation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Take the first step towards achieving your immigration goals. Our
            experienced attorneys are ready to review your case and provide
            expert guidance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Card */}
          <Card className="bg-[#0c0f16] border border-[#facc15]/20 shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-white">
                Request Your Case Review
              </CardTitle>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="h-4 w-4 text-[#facc15]" />
                <span>All consultations are strictly confidential</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 pb-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Origin</Label>
                    <Input
                      id="country"
                      value={formData.countryOfOrigin}
                      onChange={(e) =>
                        handleInputChange("countryOfOrigin", e.target.value)
                      }
                      placeholder="Enter your country of origin"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="immigration-need">Immigration Need *</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("immigrationNeed", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your immigration need" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family-visa">
                        Family-Based Visa
                      </SelectItem>
                      <SelectItem value="employment-visa">
                        Employment-Based Visa
                      </SelectItem>
                      <SelectItem value="asylum">
                        Asylum/Refugee Status
                      </SelectItem>
                      <SelectItem value="citizenship">
                        Citizenship/Naturalization
                      </SelectItem>
                      <SelectItem value="deportation-defense">
                        Deportation Defense
                      </SelectItem>
                      <SelectItem value="daca-tps">DACA/TPS</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Your Situation</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Please provide details about your immigration situation..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#facc15] text-black hover:brightness-110 font-semibold py-4 shadow-md transition-all duration-300"
                >
                  Request Case Review
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to our privacy policy and
                  consent to be contacted by Horizon Immigration Law regarding
                  your case.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Image & Contact Info */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={consultationImage}
                alt="Consultation room"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Comfortable & Confidential
                </h3>
                <p className="text-gray-300">
                  Meet with our attorneys in a welcoming environment designed to
                  put you at ease.
                </p>
              </div>
            </div>

            <Card className="bg-[#0c0f16] border border-[#facc15]/20 rounded-xl shadow-xl">
              <CardContent className="p-6 pt-4 pb-2">
                <h3 className="font-serif text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <ContactItem
                    icon={<Phone className="h-5 w-5 text-black" />}
                    label="(555) 123-4567"
                    sub="Available 24/7 for emergencies"
                  />
                  <ContactItem
                    icon={<Mail className="h-5 w-5 text-black" />}
                    label="info@horizonimmigration.law"
                    sub="We respond within 24 hours"
                  />
                  <ContactItem
                    icon={<MapPin className="h-5 w-5 text-black" />}
                    label="123 Legal Plaza, Suite 500"
                    sub="Downtown District, State 12345"
                  />
                </div>

                <div className="mt-8 p-4 bg-[#1a1f2b] border border-[#facc15]/20 rounded-lg">
                  <p className="text-sm text-gray-400 text-center">
                    <Shield className="inline h-4 w-4 mr-2 text-[#facc15]" />
                    All consultations are protected by attorney-client privilege
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, sub }) => (
  <div className="flex items-center space-x-4">
    <div className="w-10 h-10 bg-[#facc15] rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="font-semibold text-white">{label}</div>
      <div className="text-sm text-gray-400">{sub}</div>
    </div>
  </div>
);

import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { About } from "./components/AboutSection";
import { PracticeAreas } from "./components/Practices";
import { Testimonials } from "./components/Testimonials";
import { ConsultationForm } from "./components/ConsultationForm";
import { Footer } from "./components/Footer";
import { ChatBot } from "./components/ChatBot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero />
      <About />
      <PracticeAreas />
      <Testimonials />
      <ConsultationForm />
      <Footer />

      <ChatBot />
    </div>
  );
}

export default App;

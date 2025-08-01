import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const createWelcomeMessage = () => ({
  id: Date.now(),
  text: "Hello! I'm here to help you with your immigration questions. How can I assist you today?",
  isBot: true,
  timestamp: new Date(),
});

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [showAutoOpen, setShowAutoOpen] = useState(false);

  // Show auto-open message after 15s
  useEffect(() => {
    const timer = setTimeout(() => setShowAutoOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Always reset messages to welcome when opening chat
  useEffect(() => {
    if (isOpen) {
      setMessages([createWelcomeMessage()]);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thank you for your question. I'd be happy to help you with that. For specific legal advice, I recommend scheduling a consultation with one of our attorneys. Would you like me to help you schedule an appointment?",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {showAutoOpen && !isOpen && (
          <div className="absolute -top-24 right-0 bg-background/90 text-gray-100 backdrop-blur-md p-4 rounded-lg shadow-xl border border-yellow-500 max-w-sm animate-fade-in">
            <p className="text-sm">
              Have questions about immigration law? Chat with us!
            </p>
            <button
              onClick={() => setShowAutoOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-lg hover:scale-105 transition-all duration-300"
          size="icon"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-950" />
          ) : (
            <MessageCircle className="h-6 w-6 text-gray-950" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 z-50 bg-[#0f0f1a] text-gray-100 border border-yellow-500 shadow-xl rounded-xl animate-scale-in flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div>
              <h3 className="font-serif font-semibold text-white">
                Immigration Assistant
              </h3>
              <p className="text-xs text-gray-400">We're here to help</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-gray-800 text-gray-100"
                      : "bg-yellow-400 text-gray-900"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700 bg-[#0f0f1a]">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-900 text-gray-100 placeholder-gray-400 border border-gray-600 focus:ring-yellow-400"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

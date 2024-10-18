"use client"
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! How can I assist you with your grocery shopping today?" }
  ]);
  const [userInput, setUserInput] = useState<string>("");
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = userInput.toLowerCase();
    let botMessage = "";

    // Basic chatbot logic
    if (userMessage.includes("available") || userMessage.includes("have") || userMessage.includes("stock") || userMessage.includes("sell") || userMessage.includes("carry")) {
      botMessage = "We have fresh fruits, vegetables, dairy products, snacks, and daily essentials.";
    } else if (userMessage.includes("open") || userMessage.includes("hours") || userMessage.includes("timing") || userMessage.includes("when")) {
      botMessage = "Our store is open from 8 AM to 10 PM every day.";
    } else if (userMessage.includes("delivery") || userMessage.includes("shipping") || userMessage.includes("home delivery") || userMessage.includes("deliver")) {
      botMessage = "We offer home delivery within 5 km, and it's free for orders above ₹500.";
    } else if (userMessage.includes("price") || userMessage.includes("cost") || userMessage.includes("rate") || userMessage.includes("how much")) {
      botMessage = "You can check the latest prices on our website, or let me know what product you are looking for.";
    } else if (userMessage.includes("discount") || userMessage.includes("offer") || userMessage.includes("sale") || userMessage.includes("promotion")) {
      botMessage = "We have ongoing discounts on select items! Check our 'Offers' section for more details.";
    } else if (userMessage.includes("membership") || userMessage.includes("loyalty") || userMessage.includes("subscribe") || userMessage.includes("subscription") || userMessage.includes("program")) {
      botMessage = "We offer a membership program with benefits like priority delivery and special discounts!";
    } else if (userMessage.includes("payment") || userMessage.includes("pay") || userMessage.includes("method") || userMessage.includes("checkout")) {
      botMessage = "We accept payments via credit/debit card, UPI, net banking, and cash on delivery.";
    } else if (userMessage.includes("bye") || userMessage.includes("goodbye") || userMessage.includes("see you") || userMessage.includes("later")) {
      botMessage = "Thanks for visiting! Have a great day!";
    } else if (userMessage.includes("return") || userMessage.includes("refund") || userMessage.includes("exchange") || userMessage.includes("replace")) {
      botMessage = "You can return items within 7 days of delivery. Refunds will be processed within 3-5 business days.";
    } else if (userMessage.includes("fresh") || userMessage.includes("quality") || userMessage.includes("organic") || userMessage.includes("best")) {
      botMessage = "We ensure the freshness and quality of all our products. Satisfaction guaranteed!";
    } else if (userMessage.includes("help") || userMessage.includes("support") || userMessage.includes("assist") || userMessage.includes("issue")) {
      botMessage = "I'm here to assist you with any queries. You can also contact our customer support at support@ourstore.com.";
    } else {
      botMessage = "Sorry, I didn't understand that. Can you ask something else?";
    }
    

    setMessages([...messages, { sender: "user", text: userInput }, { sender: "bot", text: botMessage }]);
    setUserInput("");
  };

  return (
    <div>
      <button
        className="fixed bottom-6 right-6 bg-lama text-black rounded-full w-16 h-16 text-2xl shadow-lg flex items-center justify-center hover:bg-kama focus:outline-none"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? '✕' : '💬'}
      </button>

      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[500px] bg-white rounded-lg shadow-lg flex flex-col">
          <div className="bg-lama text-white font-semibold p-3 rounded-t-lg">
            GroBot
          </div>

          <div className="flex-1 overflow-auto p-4 bg-gray-100">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === 'bot'
                      ? 'bg-kama text-gray-800'
                      : 'bg-lama text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleUserInput} className="p-3 bg-gray-200 rounded-b-lg">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type a message"
                className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none focus:border-lama"
              />
              <button
                type="submit"
                className="bg-lama text-black p-2 rounded-md hover:bg-kama focus:outline-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import './Chatbot.css'; // for styling the floating widget

const responses = [
  { pattern: /hi|hello|hey/i, replies: ["Hello! Welcome to EasyPass Tickets. How can I assist you today?", "Hi there! Looking for an event?", "Hey! Need help with your tickets?"] },
  { pattern: /how are you\?/i, replies: ["I'm doing great, excited to help you find your tickets!", "I'm good, ready to assist you."] },
  { pattern: /i'?m? good/i, replies: ["Happy to hear that! How can I assist you today?", "That's wonderful to hear! Let's find you an event."] },
  { pattern: /how.*(get|buy).*ticket/i, replies: ["You can browse events and purchase tickets directly through the app!", "Just pick an event you like and click 'Purchase' to buy your ticket."] },
  { pattern: /find.*event/i, replies: ["Check the Events page to discover upcoming events!", "Go to the Events section to see what's happening!"] },
  { pattern: /retrieve.*ticket/i, replies: ["No problem! You can retrieve your ticket using your phone number in the 'Retrieve Ticket' section."] },
  { pattern: /problem.*ticket/i, replies: ["I'm sorry you're having issues. Try retrieving your ticket again or contact our support team!"] },
  { pattern: /who|whom/i, replies: ["I was developed by Emmanuel Kinda to help you book and retrieve event tickets easily!"] },
  { pattern: /purpose/i, replies: ["I'm here to assist you with booking, purchasing, and retrieving tickets for your favorite events!"] },
  { pattern: /refund/i, replies: ["For refund inquiries, please contact the event organizer directly."] },
  { pattern: /event.*price/i, replies: ["Prices are listed under each event. Check the Events page for details!"] },
  { pattern: /payment.*method/i, replies: ["We currently support M-Pesa payments! Easy and fast."] },
    { pattern: /help|assist|support/i, replies: [
    "Sure! You can ask me about buying tickets, finding events, or retrieving your ticket.",
    "I'm here to help. Try asking about events, ticket prices, or how to retrieve your ticket."
  ]},
  { pattern: /m-?pesa/i, replies: [
    "We support M-Pesa for all ticket purchases. Just follow the payment prompt after choosing an event!",
    "You’ll get an M-Pesa prompt on your phone when you buy a ticket. It's safe and quick!"
  ]},
  { pattern: /where.*events/i, replies: [
    "All events are listed under the 'Events' tab. Tap it to browse!",
    "Head over to the Events page to see what's coming up near you."
  ]},
  { pattern: /contact|email|reach/i, replies: [
    "You can reach out through our contact form or email support if you need more help.",
    "For extra help, contact the event organizer or our support team through the app."
  ]},
  { pattern: /thank(s| you)/i, replies: [
    "You're welcome! Let me know if there's anything else.",
    "Anytime! Happy to help with your ticket needs."
  ]},
  { pattern: /bye|goodbye|see you/i, replies: [
    "Goodbye! Enjoy your event!",
    "See you soon! Hope you found the perfect event."
  ]},
  { pattern: /what.*can.*you.*do/i, replies: [
    "I can help you find events, buy tickets, retrieve tickets, and answer questions about EasyPass!",
    "Need tickets? I’ve got you! You can ask about events, payments, and support."
  ]},
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi, I am EasyPass Bot! Ask me about tickets, events, or help.' }
  ]);
  const [input, setInput] = useState('');

  const getResponse = (text) => {
    for (let res of responses) {
      if (res.pattern.test(text)) {
        const reply = res.replies[Math.floor(Math.random() * res.replies.length)];
        return reply;
      }
    }
    return "Sorry, I didn't understand that. Could you try asking another way?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userText = input;
    const botReply = getResponse(userText);

    setMessages([...messages, { from: 'user', text: userText }, { from: 'bot', text: botReply }]);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
         {open ? <X /> : <MessageCircle />}
      </button>
      {open && (
        <div className="chatbot-box">
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

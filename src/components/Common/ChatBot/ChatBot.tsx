import React, { useState } from 'react';
import {
  ChatWidget,
  ChatMessages,
  ChatMessage,
  ChatInput,
  ChatHeader,
  Chat,
} from 'foundation-components';
import './ChatBot.css';

interface Message {
  text: string;
  sender: 'me' | 'other';
  timestamp: string;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm Vinay's virtual assistant. Ask me anything about his experience, skills, or projects!",
      sender: 'other',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const generateResponse = (input: string): string => {
    const query = input.toLowerCase();

    if (query.includes('experience') || query.includes('work') || query.includes('history')) {
      return "Vinay has over 9.5 years of experience in software development. He's currently a Lead Developer at TCS in Bangkok, specializing in massive banking transformations and micro-frontend architectures.";
    }

    if (
      query.includes('skill') ||
      query.includes('tech') ||
      query.includes('stack') ||
      query.includes('language')
    ) {
      return 'He is a Full-Stack expert! His primary stack includes React, Next.js, and Flutter for frontend/mobile, and Java (Spring Boot), Node.js, and GraphQL for backend.';
    }

    if (query.includes('project') || query.includes('portfolio') || query.includes('build')) {
      return 'Some of his notable projects include a Mobile Banking App serving 1M+ users, a Banking Customer Support System migration, and a full-scale Trade Banking Web Application.';
    }

    if (query.includes('location') || query.includes('where') || query.includes('live')) {
      return 'Vinay is currently based in the vibrant city of Bangkok, Thailand.';
    }

    if (
      query.includes('contact') ||
      query.includes('email') ||
      query.includes('reach') ||
      query.includes('hire')
    ) {
      return 'You can reach Vinay at vinaykumarreddy.chaitu@outlook.com or connect with him on LinkedIn. You can also use the contact form at the bottom of this page!';
    }

    if (query.includes('education') || query.includes('study') || query.includes('college')) {
      return 'Vinay has a strong background in Computer Science and is currently focused on transitioning into AI and Machine Learning through advanced studies.';
    }

    return "I can tell you about Vinay's experience, skills, projects, or how to contact him. What would you like to know?";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      text,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev: Message[]) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        text: generateResponse(text),
        sender: 'other',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev: Message[]) => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className='chatbot-fixed-wrapper'>
      <ChatWidget>
        <Chat className='chatbot-container'>
          <ChatHeader
            className='chatbot-header'
            title="Vinay's Assistant"
            subtitle='Online'
            action={<span className='emoji-shadow'>🤖</span>}
          />
          <ChatMessages className='chatbot-messages'>
            {messages.map((msg: Message, i: number) => (
              <div key={i} className='chatbot-message-wrapper' data-sender={msg.sender}>
                <ChatMessage content={msg.text} sender={msg.sender} timestamp={msg.timestamp} />
              </div>
            ))}
          </ChatMessages>
          <div className='chatbot-input-wrapper'>
            <div>
              <ChatInput onSend={handleSend} placeholder='Ask me a question...' />
            </div>
          </div>
        </Chat>
      </ChatWidget>
    </div>
  );
};

export default ChatBot;

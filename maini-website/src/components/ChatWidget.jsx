import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Zap } from 'lucide-react';
import './ChatWidget.css';

const SYSTEM_PROMPT = `You are the "Maini AI Assistant," a dedicated expert for Maini Renewables.

STRICT POLICY:
1. ONLY answer questions directly related to Maini Renewables, its technology, team, business model, and the renewable energy markets mentioned in its documentation.
2. If a user asks about unrelated topics (e.g., "What is the Taj Mahal?", "Who is the President?", or general recipes), respond with: "I'm sorry, I am specifically designed to assist with inquiries regarding Maini Renewables. I cannot provide information on other topics."

FORMATTING RULES:
- Use **bold text** for key terms and metrics.
- Use bullet points (•) for lists.
- Use horizontal separators (---) to divide long sections.

CORE DATA:
- **Founder**: Swati Maini. Supported by Startup India, NITI Aayog, NIOT, and IIT Roorkee.
- **Technology**: Patented **Damless®** Vertical Axis Turbines (VAT).
  • Finned Turbine: **29.70% efficiency**.
  • Helical Turbine: **27% efficiency**.
  • Darrieus Turbine: **20% efficiency**.
- **Financial Metrics**: 1MW installation costs **₹7.8 Crores**. Expected ROI is **~3 years**.
- **Market Potential**: India has **60GW canal potential** and **126GW small wind potential**.
- **Contact**: info@mainirenewables.com | +91 7710814798 | www.mainirenewables.com.`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 **Welcome to Maini Renewables!**\n\nHow can I help you today with our **Damless® turbine technology** or investment opportunities?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // SECURE: This line now pulls the key from your private .env file
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`, 
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 600,
          temperature: 0.2,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.error?.message || 'API Error');

      const reply = data?.choices?.[0]?.message?.content;
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: "⚠️ **System Error:** Please try again or contact us at info@mainirenewables.com" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chat-fab">
          <MessageCircle size={22} />
          <span className="chat-fab-label">Ask AI</span>
        </button>
      )}

      {isOpen && (
        <div className={`chat-window ${isMinimized ? 'chat-window--minimized' : ''}`}>
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar"><Zap size={15} /></div>
              <div>
                <span className="chat-title">Maini AI Assistant</span>
                <span className="chat-status"><span className="chat-status-dot" />Online</span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button onClick={() => setIsMinimized(!isMinimized)} className="chat-icon-btn"><Minimize2 size={14} /></button>
              <button onClick={() => setIsOpen(false)} className="chat-icon-btn"><X size={14} /></button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="chat-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
                    <div className="chat-bubble">
                      {msg.content.split('\n').map((line, index) => (
                        <span key={index}>
                          {line.startsWith('---') ? <hr className="chat-hr" /> : 
                           line.split('**').map((part, pIndex) => 
                             pIndex % 2 === 1 ? <strong key={pIndex}>{part}</strong> : part
                           )}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="chat-msg chat-msg--assistant">
                    <div className="chat-bubble chat-typing"><span /><span /><span /></div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="chat-input-area">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="chat-input"
                  rows={1}
                />
                <button onClick={sendMessage} disabled={!input.trim() || isLoading} className="chat-send-btn">
                  <Send size={15} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
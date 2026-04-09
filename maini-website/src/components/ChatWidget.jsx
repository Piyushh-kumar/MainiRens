import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Zap } from 'lucide-react';
import './ChatWidget.css';

const SYSTEM_PROMPT = `You are the "Maini AI Assistant," a dedicated expert for Maini Renewables[cite: 151, 169]. 

STRICT POLICY:
1. ONLY answer questions directly related to Maini Renewables, its technology, team, business model, and the renewable energy markets mentioned in its documentation[cite: 3, 143, 362].
2. If a user asks about unrelated topics (e.g., "What is the Taj Mahal?", "Who is the President?", or general recipes), respond with: "I'm sorry, I am specifically designed to assist with inquiries regarding Maini Renewables. I cannot provide information on other topics."
3. Be professional, concise, and helpful to potential customers and investors[cite: 508].

CORE DATA:
- FOUNDER: Swati Maini[cite: 462]. Supported by Startup India, NITI Aayog, NIOT, and IIT Roorkee[cite: 488, 496, 498, 500, 505].
- TECHNOLOGY: Patented "Damless®" Vertical Axis Turbines (VAT)[cite: 100, 121, 142].
  * Finned Turbine (29.70% efficiency), Helical (27%), Darrieus (20%)[cite: 101, 102, 103, 104, 106].
  * USPs: No dams required, low flow speed compatible, zero harm to aquatic life, 100% recyclable, low maintenance[cite: 123, 127, 129, 133, 137].
- METRICS: 1MW installation costs ₹7.8 Crores (80 turbines)[cite: 173, 175, 177]. Expected ROI is ~3 years[cite: 170, 171]. Canal hydro has the fastest ROI at 2.33 years[cite: 213, 349].
- MARKET: India has 60GW canal energy potential and 126GW small wind potential[cite: 361]. Maharashtra has a 3000km long canal network[cite: 361].
- BUSINESS MODEL: 1) Sale of Turbines 2) Sale of Electricity via Power Purchase Agreements (PPA)[cite: 150, 153, 159, 164].
- FUNDING ASK: USD $3M for tech development, 5 pilots, lab development, and team expansion[cite: 365, 366, 367, 369, 372, 376].
- CONTACT: info@mainirenewables.com | +91 7710814798 | www.mainirenewables.com[cite: 506, 507, 508].`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "👋 Hi! I'm the Maini Renewables AI assistant. Ask me anything about our Damless® turbine technology, investment opportunities, or how we're revolutionizing clean energy!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized]);

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
          'Authorization': `Bearer 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`,
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 500,
          temperature: 0.3, // Lower temperature for stricter adherence to facts
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || `HTTP ${response.status}`);
      }

      const reply = data?.choices?.[0]?.message?.content;
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `⚠️ Error connecting to assistant. Please contact info@mainirenewables.com directly.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const quickQuestions = ['What is Damless® technology?', 'What is the ROI?', 'Investment opportunity?'];

  return (
    <>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chat-fab" aria-label="Open chat">
          <MessageCircle size={22} />
          <span className="chat-fab-label">Ask AI</span>
        </button>
      )}

      {isOpen && (
        <div className={`chat-window${isMinimized ? ' chat-window--minimized' : ''}`}>
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar"><Zap size={15} /></div>
              <div>
                <span className="chat-title">Maini AI Assistant</span>
                <span className="chat-status"><span className="chat-status-dot" />Online</span>
              </div>
            </div>
            <div className="chat-header-actions">
              <button onClick={() => setIsMinimized(!isMinimized)} className="chat-icon-btn" aria-label="Minimize">
                <Minimize2 size={15} />
              </button>
              <button onClick={() => { setIsOpen(false); setIsMinimized(false); }} className="chat-icon-btn" aria-label="Close">
                <X size={15} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="chat-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
                    <div className="chat-bubble">{msg.content}</div>
                  </div>
                ))}
                {isLoading && (
                  <div className="chat-msg chat-msg--assistant">
                    <div className="chat-bubble chat-typing">
                      <span /><span /><span />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {messages.length === 1 && (
                <div className="chat-quick">
                  {quickQuestions.map((q) => (
                    <button key={q} className="chat-quick-btn" onClick={() => { setInput(q); inputRef.current?.focus(); }}>
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div className="chat-input-area">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Maini Renewables..."
                  rows={1}
                  className="chat-input"
                  disabled={isLoading}
                />
                <button onClick={sendMessage} disabled={!input.trim() || isLoading} className="chat-send-btn" aria-label="Send">
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
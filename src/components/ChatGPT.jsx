import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Loader2, MessageSquare, Send } from 'lucide-react';

function ChatGPT() {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedPrompt = prompt.trim();
    if (!trimmedPrompt) {
      return;
    }

    if (!apiKey) {
      setError('OpenAI API key is missing. Add VITE_OPENAI_API_KEY to your .env file.');
      return;
    }

    setError('');
    const userMessage = { role: 'user', content: trimmedPrompt };
    const nextMessages = [...chatHistory, userMessage];
    setChatHistory(nextMessages);
    setPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: nextMessages,
          temperature: 0.7,
          max_tokens: 450,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      const assistantMessage = data.choices?.[0]?.message;
      if (!assistantMessage || !assistantMessage.content) {
        throw new Error('No assistant response received.');
      }

      setChatHistory((prevHistory) => [...prevHistory, assistantMessage]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to connect to ChatGPT.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section id="chat" className="section chat-section" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
      <div className="container">
        <motion.div className="section-intro centered" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: 0.05 }}>
          <p className="section-kicker">Smart Assistance</p>
          <h2>Ask about security and services</h2>
          <p>Get instant answers about broadviewprotectiveservices.com, safety planning, and protection operations.</p>
        </motion.div>

        <div className="chat-layout">
          <motion.div className="chat-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.1 }}>
            <div className="chat-panel-header">
              <div>
                <p className="section-kicker-light">AI-powered support</p>
                <h3>Ask a question in plain language.</h3>
              </div>
              <MessageSquare size={28} />
            </div>

            <div className="chat-history">
              {chatHistory.length === 0 ? (
                <motion.div className="chat-empty" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                  Type a question and hit send to start a conversation.
                </motion.div>
              ) : (
                chatHistory.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`chat-bubble chat-${message.role}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                  >
                    <span className="chat-bubble-role">{message.role === 'user' ? 'You' : 'Assistant'}</span>
                    <p>{message.content}</p>
                  </motion.div>
                ))
              )}
            </div>

            <form className="chat-form" onSubmit={handleSubmit}>
              <label htmlFor="chat-prompt" className="sr-only">
                Ask ChatGPT a question
              </label>
              <textarea
                id="chat-prompt"
                name="chat-prompt"
                rows="4"
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="Type your question here..."
              />
              <div className="chat-actions">
                <button className="button button-light" type="submit" disabled={isLoading || !prompt.trim()}>
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="spin" /> Thinking...
                    </>
                  ) : (
                    <>
                      Send <Send size={16} />
                    </>
                  )}
                </button>
              </div>
              {error && (
                <p className="chat-error">
                  <AlertTriangle size={16} /> {error}
                </p>
              )}
            </form>
          </motion.div>

          <aside className="chat-sidebar">
            <motion.div className="chat-sidebar-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.15 }}>
              <p className="section-kicker section-kicker-light">Need ideas?</p>
              <h4>Try these prompts</h4>
              <ul>
                <li>What security services are available at broadviewprotectiveservices.com?</li>
                <li>How can I prepare for a security assessment?</li>
                <li>Explain the benefits of 24/7 monitoring and response.</li>
              </ul>
              {!apiKey && (
                <p className="chat-warning">
                  Add a <code>VITE_OPENAI_API_KEY</code> entry to your <code>.env</code> file to enable ChatGPT.
                </p>
              )}
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}

export default ChatGPT;


import { useState } from 'react'
import './ChatInterface.css'

function ChatInterface() {
    const [messages, setMessages] = useState([])
    const [inputText, setInputText] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = async () => {
        if (!inputText.trim()) return

        const userMessage = { role: 'user', content: inputText }
        setMessages(prev => [...prev, userMessage])
        setInputText('')
        setIsLoading(true)

        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: inputText })
            })

            const data = await response.json()
            const vrisMessage = { role: 'vris', content: data.response }
            setMessages(prev => [...prev, vrisMessage])
        } catch (error) {
            console.error('Error:', error)
            const errorMessage = { role: 'vris', content: 'Error: No pude conectar con VRIS.' }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h1>🧠 VRIS Advisor</h1>
                <p className="status">Active</p>
            </div>

            <div className="messages-container">
                {messages.map((msg, i) => (
                    <div key={i} className={`message ${msg.role}`}>
                        <div className="message-content">{msg.content}</div>
                    </div>
                ))}
                {isLoading && <div className="message vris typing">VRIS está pensando...</div>}
            </div>

            <div className="input-container">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Escribe tu mensaje..."
                    disabled={isLoading}
                />
                <button onClick={sendMessage} disabled={isLoading}>
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default ChatInterface

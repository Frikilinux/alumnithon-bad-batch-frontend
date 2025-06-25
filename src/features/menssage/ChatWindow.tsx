import { useEffect, useRef, useState } from 'react'
import type { ChatMessage } from '../../hooks/message/useChatSocket'

type User = {
  id: string
  name: string
}

type ChatWindowProps = {
  currentUser: User
  recipientId: string
  messages: ChatMessage[]
  sendMessage: (toUserId: string, text: string) => void
}

export default function ChatWindow({
  currentUser,
  recipientId,
  messages,
  sendMessage,
}: ChatWindowProps) {
  const [input, setInput] = useState('')
  const messageEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    sendMessage(recipientId, input)
    setInput('')
  }

  return (
    <div className='flex h-full flex-col bg-blue-50'>
      <div className='flex-1 space-y-2 overflow-y-auto p-4'>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs rounded-lg px-4 py-2 text-sm shadow-sm ${
              msg.from === currentUser.id
                ? 'ml-auto bg-blue-600 text-white'
                : 'mr-auto bg-blue-200 text-blue-900'
            }`}>
            {msg.text}
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      <div className='flex border-t border-blue-300 bg-blue-100 p-3'>
        <input
          className='flex-1 rounded-md border bg-blue-600 px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Escribe un mensaje...'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleSend()
            }
          }}
        />
        <button
          onClick={handleSend}
          className='ml-3 rounded bg-blue-600 px-5 py-2 text-sm text-white'>
          Enviar
        </button>
      </div>
    </div>
  )
}

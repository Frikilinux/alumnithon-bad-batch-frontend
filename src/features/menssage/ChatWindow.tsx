import { useEffect, useRef, useState } from 'react'

type ChatWindowProps = {
  chatId: string
}

export default function ChatWindow({ chatId }: ChatWindowProps) {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')
  const messageEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [...prev, 'Mensaje automático de prueba...'])
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [...prev, input])
    setInput('')
  }

  return (
    <div className='flex h-full flex-col bg-blue-50'>
      {/* Lista de mensajes */}
      <div className='flex-1 space-y-2 overflow-y-auto p-4'>
        {messages.map((msg, i) => (
          <div
            key={i}
            className='max-w-xs rounded-lg bg-blue-200 px-4 py-2 text-sm text-blue-900 shadow-sm'>
            {msg}
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      {/* Input de envío */}
      <div className='flex border-t border-blue-300 bg-blue-100 p-3'>
        <input
          className='flex-1 rounded-md border border-blue-300 bg-white px-3 py-2 text-sm text-blue-900 placeholder-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Escribe un mensaje...'
        />
        <button
          onClick={handleSend}
          className='ml-3 rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none'>
          Enviar
        </button>
      </div>
    </div>
  )
}

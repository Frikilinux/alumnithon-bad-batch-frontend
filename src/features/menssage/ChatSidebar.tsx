import { useState } from 'react'
import ChatList from './ChatList.tsx'
import ChatWindow from './ChatWindow'

type ChatSidebarProps = {
  onClose: () => void
}

export default function ChatSidebar({ onClose }: ChatSidebarProps) {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)

  return (
    <div className='fixed top-0 right-0 z-50 flex h-full w-[350px] flex-col border-l border-blue-300 bg-blue-50 shadow-xl'>
      {/* Header */}
      <div className='flex items-center justify-between border-b border-blue-300 bg-blue-100 px-4 py-3'>
        {!selectedChatId ? (
          <h2 className='text-lg font-semibold text-blue-900'>Mensajes</h2>
        ) : (
          <button
            onClick={() => setSelectedChatId(null)}
            className='text-sm text-blue-600 hover:text-blue-800 hover:underline'>
            ← Volver
          </button>
        )}
        <button
          onClick={onClose}
          className='text-xl text-blue-600 transition-colors duration-200 hover:text-red-600'
          aria-label='Cerrar chat'>
          ×
        </button>
      </div>

      {/* Contenido dinámico */}
      <div className='flex-1 overflow-y-auto'>
        {!selectedChatId ? (
          <ChatList onSelectChat={(chatId) => setSelectedChatId(chatId)} />
        ) : (
          <ChatWindow chatId={selectedChatId} />
        )}
      </div>
    </div>
  )
}

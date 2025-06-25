import { useState } from 'react'
import ChatWindow from './ChatWindow'
import { useFakeWebSocketGlobal } from '../../hooks/message/useChatSocket'

type User = {
  id: string
  name: string
}

type ChatSidebarProps = {
  currentUser: User
  onClose?: () => void
}

export default function ChatSidebar({
  currentUser,
  onClose,
}: ChatSidebarProps) {
  const { allMessages, chatPreviews, sendMessage } = useFakeWebSocketGlobal(
    currentUser.id
  )

  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)

  const openChat = (chatId: string) => {
    setSelectedChatId(chatId)
  }

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
        {onClose && (
          <button
            onClick={onClose}
            className='text-xl text-blue-600 transition-colors duration-200 hover:text-red-600'
            aria-label='Cerrar chat'>
            ×
          </button>
        )}
      </div>

      {/* Contenido*/}
      <div className='flex-1 overflow-y-auto'>
        {!selectedChatId ? (
          <div>
            {chatPreviews.length === 0 ? (
              <p className='p-4 text-blue-700'>No tienes conversaciones</p>
            ) : (
              chatPreviews
                .sort((a, b) => b.lastTimestamp - a.lastTimestamp)
                .map((chat) => (
                  <div
                    key={chat.id}
                    className='cursor-pointer border-b border-blue-300 p-4 hover:bg-blue-100'
                    onClick={() => openChat(chat.id)}>
                    <div className='font-semibold text-blue-900'>
                      Usuario: {chat.otherUserId}
                    </div>
                    <div className='truncate text-sm text-blue-600'>
                      {chat.lastMessage}
                    </div>
                  </div>
                ))
            )}
          </div>
        ) : (
          <ChatWindow
            currentUser={currentUser}
            recipientId={
              chatPreviews.find((c) => c.id === selectedChatId)?.otherUserId ||
              ''
            }
            messages={allMessages[selectedChatId] || []}
            sendMessage={sendMessage}
          />
        )}
      </div>
    </div>
  )
}

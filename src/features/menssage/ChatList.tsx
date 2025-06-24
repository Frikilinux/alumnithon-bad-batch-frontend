type ChatPreview = {
  id: string
  name: string
  lastMessage: string
}

const dummyChats: ChatPreview[] = [
  {
    id: 'chat-laura',
    name: 'Laura Martínez',
    lastMessage: '¿Cómo va el proyecto?',
  },
  { id: 'chat-ana', name: 'Ana Gómez', lastMessage: '¿Revisaste los mockups?' },
  {
    id: 'chat-carlos',
    name: 'Carlos Ruiz',
    lastMessage: 'Te mandé el archivo.',
  },
]

type ChatListProps = {
  onSelectChat: (chatId: string) => void
}

export function getDummyChatIds() {
  return dummyChats.map((chat) => chat.id)
}

export default function ChatList({ onSelectChat }: ChatListProps) {
  return (
    <div className='divide-y'>
      {dummyChats.map((chat) => (
        <div
          key={chat.id}
          className='cursor-pointer p-4 hover:bg-blue-100'
          onClick={() => onSelectChat(chat.id)}>
          <div className='font-medium text-blue-900'>{chat.name}</div>
          <div className='truncate text-sm text-blue-600'>
            {chat.lastMessage}
          </div>
        </div>
      ))}
    </div>
  )
}

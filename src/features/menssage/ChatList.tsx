export type User = {
  id: string
  name: string
}

export type ChatPreview = {
  id: string
  user: User
  lastMessage: string
}

type ChatListProps = {
  chats: ChatPreview[]
  onSelectChat: (chat: ChatPreview) => void
}

export default function ChatList({ chats, onSelectChat }: ChatListProps) {
  return (
    <div className='divide-y'>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className='cursor-pointer p-4 hover:bg-blue-100'
          onClick={() => onSelectChat(chat)}>
          <div className='font-medium text-blue-900'>{chat.user.name}</div>
          <div className='truncate text-sm text-blue-600'>
            {chat.lastMessage}
          </div>
        </div>
      ))}
    </div>
  )
}

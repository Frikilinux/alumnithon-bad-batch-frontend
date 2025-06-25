// service/ChatService.ts
import api from '../api/ApiClient'

export interface Message {
  id: string
  content: string
  senderId: string
  timestamp: string
}

export interface ChatRoom {
  id: string
  name: string
  participants: string[]
}

export const ChatService = {
  getMessages: (roomId: string) =>
    api.get<Message[]>(`/chat/rooms/${roomId}/messages`),

  sendMessage: (roomId: string, content: string) =>
    api.post(`/chat/rooms/${roomId}/messages`, { content }),

  getChatRooms: () => api.get<ChatRoom[]>(`/chat/rooms`),
}

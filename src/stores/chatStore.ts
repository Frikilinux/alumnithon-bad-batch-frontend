// stores/chatStore.ts
import { create } from 'zustand'

export type Message = {
  id: string
  content: string
  chatId: string
  timestamp: string
}

type ChatStore = {
  messagesByChat: Record<string, Message[]>
  addMessage: (msg: Message) => void
  setMessagesForChat: (chatId: string, messages: Message[]) => void
}

export const useChatStore = create<ChatStore>((set) => ({
  messagesByChat: {},
  addMessage: (msg) =>
    set((state) => {
      const msgs = state.messagesByChat[msg.chatId] || []
      return {
        messagesByChat: {
          ...state.messagesByChat,
          [msg.chatId]: [...msgs, msg],
        },
      }
    }),
  setMessagesForChat: (chatId, messages) =>
    set((state) => ({
      messagesByChat: {
        ...state.messagesByChat,
        [chatId]: messages,
      },
    })),
}))

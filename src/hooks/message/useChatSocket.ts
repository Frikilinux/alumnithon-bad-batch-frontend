// src/hooks/useMockMultiChatSocket.ts
import { useEffect } from 'react'
import { useChatStore } from '../../stores/chatStore'

type ChatId = string

export function useMockMultiChatSocket(activeChatIds: ChatId[]) {
  const addMessage = useChatStore((state) => state.addMessage)

  useEffect(() => {
    if (activeChatIds.length === 0) return

    const interval = setInterval(() => {
      const randomChatId =
        activeChatIds[Math.floor(Math.random() * activeChatIds.length)]

      addMessage({
        id: crypto.randomUUID(),
        content: `💬 Mensaje simulado en chat ${randomChatId}`,
        chatId: randomChatId,
        timestamp: new Date().toISOString(),
      })
    }, 10000)

    return () => clearInterval(interval)
  }, [activeChatIds, addMessage])
}

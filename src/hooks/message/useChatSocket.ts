import { useState, useCallback, useEffect, useRef } from 'react'

export type ChatMessage = {
  from: string
  to: string
  text: string
  timestamp: number
}

type ChatId = string

export function useFakeWebSocketGlobal(currentUserId: string) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const getChatId = (a: string, b: string) => [a, b].sort().join('-')

  // Mensajes iniciales simulados para 3 chats
  const initialMessages: Record<ChatId, ChatMessage[]> = {
    [getChatId(currentUserId, 'laura')]: [
      {
        from: 'laura',
        to: currentUserId,
        text: 'Hola! ¿Cómo estás?',
        timestamp: Date.now() - 1000 * 60 * 60 * 24,
      },
      {
        from: currentUserId,
        to: 'laura',
        text: '¡Bien! ¿Y tú?',
        timestamp: Date.now() - 1000 * 60 * 60 * 23,
      },
    ],
    [getChatId(currentUserId, 'ana')]: [
      {
        from: 'ana',
        to: currentUserId,
        text: '¿Revisaste los mockups?',
        timestamp: Date.now() - 1000 * 60 * 60 * 2,
      },
    ],
    [getChatId(currentUserId, 'carlos')]: [
      {
        from: 'carlos',
        to: currentUserId,
        text: 'Te mandé el archivo.',
        timestamp: Date.now() - 1000 * 60 * 10,
      },
    ],
  }

  const [allMessages, setAllMessages] =
    useState<Record<ChatId, ChatMessage[]>>(initialMessages)

  const sendMessage = useCallback(
    (toUserId: string, text: string) => {
      if (!text.trim()) return
      const chatId = getChatId(currentUserId, toUserId)

      const newMessage: ChatMessage = {
        from: currentUserId,
        to: toUserId,
        text: text.trim(),
        timestamp: Date.now(),
      }

      setAllMessages((prev) => ({
        ...prev,
        [chatId]: [...(prev[chatId] || []), newMessage],
      }))

      // Simular respuesta automática del destinatario
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        const reply: ChatMessage = {
          from: toUserId,
          to: currentUserId,
          text: 'Respuesta automática simulada',
          timestamp: Date.now(),
        }
        setAllMessages((prev) => ({
          ...prev,
          [chatId]: [...(prev[chatId] || []), reply],
        }))
      }, 2000)
    },
    [currentUserId]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const chatIds = Object.keys(allMessages)

  const chatPreviews = chatIds.map((chatId) => {
    const msgs = allMessages[chatId]
    const lastMessage = msgs[msgs.length - 1]
    const users = chatId.split('-')
    const otherUserId = users.find((u) => u !== currentUserId) ?? ''
    return {
      id: chatId,
      otherUserId,
      lastMessage: lastMessage?.text ?? '',
      lastTimestamp: lastMessage?.timestamp ?? 0,
    }
  })

  return { allMessages, chatPreviews, sendMessage }
}

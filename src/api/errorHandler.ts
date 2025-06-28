import Cookies from 'js-cookie'
import { toast } from 'sonner'

const onError400 = (_error: any) => {
  toast.error('Error 400: Datos inválidos, revisa el formulario.')
}

const onError401 = (_error: any) => {
  toast.error('Error 401: No autorizado. Por favor inicia sesión.')
  Cookies.remove('token') // Eliminar token si no está autorizado
}

const onError403 = (_error: any) => {
  toast.error(
    'Error 403: Acceso prohibido. No tienes permiso para realizar esta acción.'
  )
}

const onError404 = (_error: any) => {
  toast.error('Error 404: Recurso no encontrado.')
}

const errorHandlers: Record<number, (error: any) => void> = {
  400: onError400,
  401: onError401,
  403: onError403,
  404: onError404,
}

export const handleApiError = (error: any) => {
  const status = error.response?.status
  if (status && errorHandlers[status]) {
    errorHandlers[status](error)
  } else {
    alert('Ocurrió un error inesperado.')
  }
}

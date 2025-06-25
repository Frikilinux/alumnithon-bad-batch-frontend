const onError400 = (_error: any) => {
  alert('Error 400: Datos inválidos, revisa el formulario.')
}

const onError401 = (_error: any) => {
  alert('Error 401: No autorizado. Por favor inicia sesión.')
}

const errorHandlers: Record<number, (error: any) => void> = {
  400: onError400,
  401: onError401,
}

export const handleApiError = (error: any) => {
  const status = error.response?.status
  if (status && errorHandlers[status]) {
    errorHandlers[status](error)
  } else {
    alert('Ocurrió un error inesperado.')
  }
}

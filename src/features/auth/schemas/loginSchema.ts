import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string({ message: 'El email es obligatorio' })
    .email({ message: 'Correo electrónico inválido' }),
  password: z.string({ message: 'La contraseña es obligatoria' }),
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

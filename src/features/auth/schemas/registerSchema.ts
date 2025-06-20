import { z } from 'zod'

const passwordRegex = new RegExp(
  '^(?=.*\\p{Ll})(?=.*\\p{Lu})(?=.*\\d)(?=.*[@$!%*?&])[\\p{L}\\d@$!%*?&]{8,}$',
  'u'
)

export const RegisterSchema = z.object({
  email: z
    .string({ message: 'El email es obligatorio' })
    .email({ message: 'Correo electrónico inválido' }),
  firstName: z.string().min(1, { message: 'El nombre es obligatorio' }),
  lastName: z.string().min(1, { message: 'El apellido es obligatorio' }),
  password: z
    .string()
    .min(8, { message: 'Contraseña demasiado corta' })
    .regex(passwordRegex, {
      message:
        'Debe tener al menos 8 caracteres, incluyendo mayúscula, minúscula, número y símbolo',
    }),
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>

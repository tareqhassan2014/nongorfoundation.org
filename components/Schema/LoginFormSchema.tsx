import { z } from "zod"
export const LoginFormSchema = z.object({
    emailAddress: z.string().refine((value) => /\S+@\S+\.\S+/.test(value), {
        message: "Invalid email address format",
    }),
    password: z.string().min(6, {
        message: "Password Must be 6 Character or Long"
    }),

})
import { z } from "zod"
export const LoginFormSchema = z.object({
    emailAddress: z.string(),
    password: z.string(),

})
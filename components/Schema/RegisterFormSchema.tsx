import { z } from "zod"
export const RegisterFormSchema = z.object({

    firstName: z.string().min(2,
        {
            message: "Username must be at least 2 characters."
        }).max(20,
            {
                message: "Username cannot exceed 20 characters."
            }),
    lastName: z.string().min(2,
        {
            message: "Username must be at least 2 characters."
        }).max(20,
            {
                message: "Username cannot exceed 20 characters."
            }),
    emailAddress: z.string()
        .refine((value) => /\S+@\S+\.\S+/.test(value), {
            message: "Invalid email address format",
        }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }),
    confirmPassword: z.string().min(1, {
        message: "Password must be at least 8 characters"
    }),

})
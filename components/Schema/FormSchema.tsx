import { z } from "zod"
export const FormSchema = z.object({
    userName: z.string().min(2,
        {
            message: "Username must be at least 2 characters."
        })
        .max(50,
            {
                message: "Username cannot exceed 50 characters."
            }),
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
    emailAddress: z.string(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters"
    }),
    confirmPassword: z.string(),

})
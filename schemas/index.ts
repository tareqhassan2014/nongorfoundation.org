import * as z from "zod";

export const LoginSchema = z.object({
    userName: z.string().min(1,{
        message: "User Name Must Be Required"
    }),
    password: z.string().min(6,{
        message: "Password Must be 6 Character or Long"
    })
})

export const RegisterSchema = z.object({
    userName: z.string().min(1,{
        message: "User Name Must Be Required"
    }),
    email: z.string().email({
        message: "Email Must Be Required"
    }),
    password: z.string().min(6,{
        message: "Password Must be 6 Character or Long"
    })
})
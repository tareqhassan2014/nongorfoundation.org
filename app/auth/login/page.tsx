"use client"
import { z } from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginFormSchema } from '@/components/Schema/LoginFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import Link from 'next/link';
import { paths } from '@/Routes/paths';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }


    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            emailAddress: "",
            password: "",
        }
    })
    const onSubmit = (values: z.infer<typeof LoginFormSchema>) => {
        console.log(values);
    }
    return (

        <div className='w-full h-screen flex justify-center items-center '>
            <div className='w-full lg:max-w-xl mx-auto h-screen lg:max-h-[720px] lg:rounded-lg rounded-none pb-16 pt-10 px-10 bg-white'>

                <h2 className='text-3xl font-bold text-center pb-14'>Sign In</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-bold'>Email Address</FormLabel>
                                    <FormControl>
                                        <div className='text-[#afa7ad] relative'>
                                            <IoIosMail className='absolute top-1.5 text-2xl' />
                                            <Input className='pl-8 border-2 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0' placeholder="Please enter your email address" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-bold'>Sign In Password</FormLabel>
                                    <FormControl>
                                        <div className='text-[#afa7ad] relative'>
                                            <IoIosLock className='absolute top-1 text-2xl' />
                                            <Input className='pl-8 border-2 border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0' placeholder="Please enter password" type={showPassword ? 'text' : 'password'} {...field} />
                                            <button type='button' className='absolute bottom-2 right-1' onClick={togglePasswordVisibility} >
                                                {
                                                    showPassword ? <IoEyeSharp className='text-xl' /> : <IoEyeOffSharp className='text-xl' />
                                                }
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <button className='text-red-400 text-sm font-semibold underline flex justify-end w-full'><Link href={paths.auth.forgetPassword}>Forgot password?</Link></button>
                        <Button variant={'custom'} className='w-full rounded-full' type="submit">Sign In</Button>
                    </form>
                </Form>
                <h5 className='text-sm font-semibold text-[#afa7ad] text-center mt-16 mb-6'>Or Sign in Using</h5>
                <div className='flex gap-4 items-center justify-center '>
                    <button><FaFacebook className='h-[50px] w-[50px] text-[#3f5a92] ' /></button>
                    <button><AiFillTwitterCircle className='h-14 w-14 text-[#4e9fe8] ' /></button>
                    <button><AiFillGoogleCircle className='h-14 w-14 text-[#d74f3d] ' /></button>
                </div>
                <p className='text-center pt-10 text-md font-semibold text-[#c7bbc4]'>Do not have an account please <Link href={paths.auth.register} className='underline text-red-400'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;
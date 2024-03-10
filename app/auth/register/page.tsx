"use client"
import { z } from 'zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormSchema } from '@/components/Schema/RegisterFormSchema';
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
import { FaUserTag } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import Link from 'next/link';
import { paths } from '@/Routes/paths';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {

            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
        }
    })
    const onSubmit = (values: z.infer<typeof RegisterFormSchema>) => {
        console.log(values);
    }
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-full lg:max-w-2xl mx-auto bg-white text-black  md:rounded-lg h-screen md:h-fit flex items-center justify-center'>
                <div className='w-full px-6 lg:px-16 py-10'>
                    <h2 className='text-3xl font-bold text-center pb-14'>Sign up</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                            <div className='w-full flex gap-4 flex-col lg:flex-row'>
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-bold'>First Name</FormLabel>
                                            <FormControl>
                                                <div className='text-[#afa7ad] relative w-full'>
                                                    <FaUserTag className='absolute top-1 text-2xl left-3' />
                                                    <Input className='pl-12 pr-0 lg:pr-8 border-2 focus:border-black border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 w-full' placeholder="Please inter your first name" {...field} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-bold'>Last Name</FormLabel>
                                            <FormControl>
                                                <div className='text-[#afa7ad] relative w-full'>
                                                    <FaUserTag className='absolute top-1 text-2xl left-3' />
                                                    <Input className='pl-12 pr-0 lg:pr-8 border-2 focus:border-black border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 w-full' placeholder="Please inter your last name" {...field} />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="emailAddress"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='font-bold'>Email </FormLabel>
                                        <FormControl>
                                            <div className='text-[#afa7ad] relative'>
                                                <IoIosMail className='absolute top-1.5 text-2xl left-3' />
                                                <Input className='pl-12 pr-0 lg:pr-8 border-2 focus:border-black border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0' placeholder="Please enter your email address" {...field} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className='flex flex-col lg:flex-row md:flex-col gap-4 '>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-bold'>Password</FormLabel>
                                            <FormControl>
                                                <div className='text-[#afa7ad] relative'>
                                                    <IoIosLock className='absolute top-1 text-2xl left-3' />
                                                    <Input className='pl-12 pr-10 border-2 focus:border-black border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 ' placeholder="Please enter password" type={showPassword ? 'text' : 'password'} {...field} />
                                                    <button type='button' className='absolute bottom-2 right-4' onClick={togglePasswordVisibility} >
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
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className='font-bold'>Confirm Password</FormLabel>
                                            <FormControl>
                                                <div className='text-[#afa7ad] relative'>
                                                    <IoIosLock className='absolute top-1 text-2xl left-3' />
                                                    <Input className='pl-12 pr-10 border-2 focus:border-black border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 ' placeholder="Please confirm password" type={showConfirmPassword ? "text" : "password"} {...field} />
                                                    <button type='button' className='absolute bottom-2 right-4' onClick={toggleConfirmPasswordVisibility}>
                                                        {
                                                            showConfirmPassword ? <IoEyeSharp className='text-xl' /> : <IoEyeOffSharp className='text-xl' />
                                                        }
                                                    </button>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button variant={'custom'} className='w-full rounded-full py-6' type="submit">Sign Up</Button>
                        </form>
                    </Form>
                    <h5 className='text-sm font-semibold text-[#afa7ad] text-center mt-16 mb-6'>Or Sign Up Using</h5>
                    <div className='flex gap-3 items-center justify-center '>
                        <button><FaFacebook className='h-[40px] w-[40px] text-[#3f5a92] ' /></button>
                        <button><AiFillTwitterCircle className='h-11 w-11 text-[#4e9fe8] ' /></button>
                        <button><AiFillGoogleCircle className='h-11 w-11 text-[#d74f3d] ' /></button>
                    </div>
                    <p className='text-center pt-10 text-md font-semibold text-[#afa7ad]'>Al ready have an account please <Link href={paths.auth.login} className='underline text-red-400'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
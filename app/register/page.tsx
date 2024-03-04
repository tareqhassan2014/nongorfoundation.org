"use client"
import { z } from 'zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormSchema } from '@/components/Schema/FormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormDescription,
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

const Register = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            userName: "",
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
        }
    })
    const onSubmit = (values: z.infer<typeof FormSchema>) => {
        console.log(values);
    }
    return (
        <div className='h-screen flex justify-center items-center bg-gradient-to-r from-[#61d7dd] to-[#df39f5] '>
            <div className='  rounded-lg py-10 px-10 bg-white'>
                <h2 className='text-3xl font-bold text-center pb-14'>Sign up</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-bold'>Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Please enter your email address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="userName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='font-bold'>User Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Please enter your user name" {...field} />
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
                                    <FormLabel className='font-bold'>Login Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Please enter your password" {...field} />
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
                                        <Input placeholder="Please confirm password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex gap-4'>
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='font-bold'>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Please enter your first name" {...field} />
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
                                            <Input placeholder="Please enter your last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button variant={'registerButton'} type="submit">Submit</Button>
                    </form>
                </Form>
                <h5 className='text-sm font-semibold text-[#afa7ad] text-center mt-16 mb-6'>Or Sign Up Using</h5>
                <div className='flex gap-4 items-center justify-center '>
                    <button><FaFacebook className='h-[50px] w-[50px] text-[#3f5a92] ' /></button>
                    <button><AiFillTwitterCircle className='h-14 w-14 text-[#4e9fe8] ' /></button>
                    <button><AiFillGoogleCircle className='h-14 w-14 text-[#d74f3d] ' /></button>
                </div>
            </div>
        </div>
    );
};

export default Register;
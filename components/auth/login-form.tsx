"use client";

import CardWrapper from "@/components/auth/card-wrapper";
import "@/components/css/login-form.css";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import { FaRegUserCircle } from "react-icons/fa";

const font = Roboto({
    subsets: ["latin"],
    weight: ["500"],
});

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            userName: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log(values);
    };
    return (
        <div className="">
            <CardWrapper headerLabel="Login" isShowSocial isShowSignUp>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className={cn("space-y-6 mb-5", font.className)}>
                            <FormField
                                control={form.control}
                                name="userName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={cn(
                                                "ml-2",
                                                font.className
                                            )}
                                        >
                                            Username
                                        </FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Type your Username"
                                                    type="text"
                                                    className="border-none shadow-none input-border"
                                                />
                                            </FormControl>
                                            <FaRegUserCircle className="absolute top-[5px] text-2xl left-2 text-[#C0C0C0]" />
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="ml-2">
                                            Password
                                        </FormLabel>

                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="Type your Password"
                                                    type="password"
                                                    className="border-none shadow-none input-border"
                                                />
                                            </FormControl>
                                            <CiLock className="absolute top-[5px] left-[5px] text-2xl text-[#C0C0C0]" />
                                        </div>
                                        <div className="flex justify-end hover:underline text-sm">
                                            <Link href="/auth/reset">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            variant="custom"
                            type="submit"
                            className="w-full rounded-full"
                        >
                            Login
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
};

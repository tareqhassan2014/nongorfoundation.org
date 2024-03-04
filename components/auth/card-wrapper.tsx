"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Social } from "./social";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginAndSignUpButton } from "@/components/auth/user-action-button";


interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    isShowSocial?: boolean,
    isShowSignUp?: boolean,
    isShowSignIn?: boolean
}

const font = Roboto({
    subsets: ["latin"],
    weight: ["500"]
})

const CardWrapper = ({ children, headerLabel, isShowSocial, isShowSignUp, isShowSignIn }: CardWrapperProps) => {
    return (
        <div className="w-full md:w-[400px] shadow-lg">
            <Card>
                <CardHeader>
                    <h2 className={cn("text-3xl font-extrabold text-center mt-5", font.className)}>{headerLabel}</h2>
                </CardHeader>
                <CardContent>
                    {
                        children
                    }
                </CardContent>

                {
                    isShowSocial && <CardFooter>
                        <Social />
                    </CardFooter>
                }
                {
                    isShowSignUp && <CardFooter className="mt-24">
                        <LoginAndSignUpButton label="Or Sign Up Using" buttonText="Sign Up" href="/auth/register" />
                    </CardFooter>
                }
                {
                    isShowSignIn && <CardFooter className="mt-24">
                        <LoginAndSignUpButton label="Already Have an Account" buttonText="Sign In" href="/auth/login" />
                    </CardFooter>
                }
                
            </Card>
        </div>
    );
};

export default CardWrapper;
import { Roboto } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";

const font = Roboto({
    subsets: ["latin"],
    weight: ["500"],
});

interface loginAndSignUpProps {
    label: string;
    buttonText: string;
    href: string;
}

export const LoginAndSignUpButton = ({
    label,
    buttonText,
    href,
}: loginAndSignUpProps) => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-base">{label}</h2>
            <Button variant="link" className="text-base uppercase">
                <Link href={href}>{buttonText}</Link>
            </Button>
        </div>
    );
};

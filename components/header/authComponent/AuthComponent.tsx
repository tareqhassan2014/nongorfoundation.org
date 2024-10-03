import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { paths } from "@/utils/paths";
import Link from "next/link";
import React from "react";
import { RxAvatar } from "react-icons/rx";
import { MdExitToApp } from "react-icons/md";
import Image from "next/image";
import { auth, signOut } from "@/components/auth/auth";
import { Button } from "@/components/ui/button";

const AuthComponent = async (
  props: React.ComponentPropsWithRef<typeof Button>
) => {
  const navItemClassNames =
    " cursor-pointer py-2 px-3 text-green-800 font-semibold hover:text-black hover:bg-green-100 rounded-md transition-all duration-500 ease-in-out";

  const session = await auth();
  if (!session?.user)
    return (
      <ul
        className={`${
          session?.user ? "hidden" : "flex"
        } justify-center items-center `}
      >
        <li className={navItemClassNames}>
          <Link href={paths.auth.signin}>লগইন</Link>
        </li>
        <li className={navItemClassNames}>
          <Link href={paths.auth.signup}>সাইন আপ</Link>
        </li>
      </ul>
    );

  return (
    <>
      <div
        className={`${navItemClassNames} ${
          !session?.user ? "hidden" : "block"
        }`}
      >
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            asChild
            className=" overflow-hidden h-8 w-8 rounded-full "
          >
            <Image
              src={
                session.user.image ??
                "https://source.boringavatars.com/marble/120"
              }
              alt="user"
              width={500}
              height={500}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" w-fit ">
            <Link href={paths.registration.volunteer}>
              <DropdownMenuItem>{session.user.name}</DropdownMenuItem>
            </Link>
            <Link href="#">
              <DropdownMenuItem>
                <RxAvatar /> <span className=" ml-2 ">Profile</span>
              </DropdownMenuItem>
            </Link>
            {/* <Link > */}
            <DropdownMenuItem className=" text-red-500 ">
              <MdExitToApp />
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
                className="w-full"
              >
                <button className="w-full p-0" {...props}>
                  Sign Out
                </button>
              </form>
            </DropdownMenuItem>
            {/* </Link> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default AuthComponent;

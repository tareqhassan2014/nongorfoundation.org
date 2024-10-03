import NextAuth from "next-auth";
import "next-auth/jwt";
import Facebook from "next-auth/providers/facebook";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

const config = {
  theme: { logo: "https://authjs.dev/img/logo-sm.png" },
  providers: [Google],
  callbacks: {
    async session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  experimental: {
    enableWebAuthn: true,
  },
  debug: process.env.NODE_ENV !== "production" ? true : false,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    events: {
      async signIn({ user }) {
        console.log(user)
      },
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
    },
  });
  
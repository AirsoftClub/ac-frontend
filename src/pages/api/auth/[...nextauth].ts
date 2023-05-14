import { getAxiosInstance } from "@/services/axiosService";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, trigger }) {
      const axiosInstance = getAxiosInstance();

      if (account) {
        const response = await axiosInstance.post("/auth/register", {
          token: account?.access_token,
          provider: account?.provider,
        });

        token.accessToken = response.data.access_token;
        token.refreshToken = response.data.refresh_token;

        return token;
      }

      return token;
    },
    async session({ session, user, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("Has GOOGLE_CLIENT_ID?", !!process.env.GOOGLE_CLIENT_ID);
console.log("Has GOOGLE_CLIENT_SECRET?", !!process.env.GOOGLE_CLIENT_SECRET);
console.log("Has NEXTAUTH_SECRET?", !!process.env.NEXTAUTH_SECRET);

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  events: {
    async error(message) {
      console.error("NextAuth event error:", message);
    },
  },
});

export { handler as GET, handler as POST };

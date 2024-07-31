import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'text', placeholder: 'Enter your email' },
          password: { label: 'Password', type: 'password', placeholder: 'Enter your password' },
        },
        async authorize(credentials, req) {
          const res = await fetch('http://localhost:3001/auth/signIn', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
            credentials: 'same-origin',
          });
          console.log(res);
          
          const user = await res.json();
          
          if (res.ok && user) {
            
            return user;
          } else {
            return null;
          }
        }
      }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      async profile(profile) {
        const credentialGoogle = {
          email: profile.email,
          picture: profile.picture,
          family_name: profile.family_name,
          given_name: profile.given_name,
          email_verified: profile.email_verified,
        }
        const res = await fetch('http://localhost:3001/auth/signInGoogle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentialGoogle),
          credentials: 'same-origin',
        })

        const user = await res.json();
        console.log(user);
        return user
      }
    }),
  ],
});

export { handler as GET, handler as POST };


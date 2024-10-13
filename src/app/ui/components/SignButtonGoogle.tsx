'use client';

import { useState, useEffect } from 'react';
import { SessionGoogle, SignInGoogle, SignOutGoogle } from '@/lib/auth-action';

// Define the session type (you might need to adjust this based on what SessionGoogle returns)
type Session = {
  user: string; // example of expected session properties
  // Add other properties from the session here
} | null;

type SignInProps = {
  className?: string; // Optional className prop
};

export default function SignIn({ className = '' }: SignInProps) {
  // Explicitly set the state type as Session | null
  const [session, setSession] = useState<Session>(null);

  // Check session state when the component loads
  useEffect(() => {
    const getSession = async () => {
      const sessionData = await SessionGoogle();
      setSession(sessionData);  // sessionData should match the Session type
    };
    
    getSession();
  }, []);

  // Function to handle signing in
  const handleSignIn = async () => {
    await SignInGoogle(); // Call sign-in function
    const sessionData = await SessionGoogle(); // Get updated session
    setSession(sessionData); // Update state after sign-in
  };

  // Function to handle signing out
  const handleSignOut = async () => {
    await SignOutGoogle(); // Call sign-out function
    setSession(null); // Clear the session in the state after sign-out
  };

  return (
    <>
      {session ? (
        <>
          <button
            onClick={handleSignOut}
            className={`bg-red-900 text-white p-2 rounded-md ${className}`}
          >
            Sign out with Google
          </button>
          <button
            onClick={() => SessionGoogle()}
            className={`bg-red-200 text-white p-2 rounded-md ${className}`}
          >
            Session info
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleSignIn}
            className={`bg-red-500 text-white p-2 rounded-md ${className}`}
          >
            Sign in with Google
          </button>
          <button
            onClick={() => SessionGoogle()}
            className={`bg-red-200 text-white p-2 rounded-md ${className}`}
          >
            Session info
          </button>
        </>
      )}
    </>
  );
}

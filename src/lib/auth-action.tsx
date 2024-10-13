'use server'
import { signIn, signOut, auth } from '@/auth'

export async function SignInGoogle() {
    const session = await auth();
    console.log("sign IN button clicked: ",session);
    return await signIn('google')
}

export async function SignOutGoogle() {
    const session = await auth();
    console.log("sign OUT button clicked: ",session);
    return await signOut()
}

export async function SessionGoogle() {
    const session = await auth();
    console.log("session call:", session);
    return session
}
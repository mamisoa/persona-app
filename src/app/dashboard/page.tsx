import { auth } from "@/auth";
import { redirect } from 'next/navigation'; // For server-side redirection
import ClientDashboard from './ClientDashBoard'; // Import the client component

export default async function Dashboard() {
  const session = await auth(); // Server-side session fetching

  if (!session) {
    redirect('/'); // Server-side redirect if not authenticated
  }

  return <ClientDashboard session={session} />; // Render the client component
}

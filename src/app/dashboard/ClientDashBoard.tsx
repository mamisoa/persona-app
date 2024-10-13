'use client'; // This is a client component
import Image from 'next/image'

type Session = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

type Props = {
  session: Session; // Session is passed from the server component
};

export default function ClientDashboard({ session }: Props) {
  const { name, email, image } = session.user; // Destructure user properties

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {name}, to your AI Automation dashboard!</p>
      <p>Email: {email}</p>
    </div>
  );
}

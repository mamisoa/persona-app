'use client';

import Link from 'next/link'

export default function TopBar() {


  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">AI Automation</Link>
        <div className="space-x-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
            <button  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
              Sign In
            </button>
        </div>
      </div>
    </nav>
  )
}
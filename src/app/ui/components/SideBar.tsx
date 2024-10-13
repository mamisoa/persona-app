'use client'

import Link from 'next/link'

export default function SideBar() {
  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li><Link href="/dashboard">Overview</Link></li>
        <li><Link href="/dashboard/analytics">Analytics</Link></li>
        <li><Link href="/dashboard/automations">Automations</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
      <button
      >
        Sign Out
      </button>
    </nav>
  )
}
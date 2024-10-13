import SideBar from '@/app/ui/components/SideBar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}
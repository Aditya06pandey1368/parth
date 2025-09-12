import { Sidebar } from "@/components/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "User profile and activities",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* This is your fixed sidebar */}
      <aside className="w-64 flex-shrink-0">
        <Sidebar />

      </aside>

      {/* This is the main content area for your pages */}
      <main className="flex-1 p-6 lg:p-8">
        {children}
      </main>
    </div>
  );
}


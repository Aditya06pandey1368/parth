import { LayoutWrapper } from "@/components/layout-wrapper";
import { Sidebar } from "../../components/sidebar"; // Corrected import path
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
    // Updated the background color for the main layout wrapper
    <LayoutWrapper>
<div className="flex min-h-screen bg-gray-300 dark:bg-gray-900">
      {/* Fixed Sidebar - kept white for contrast and added a subtle shadow */}
      

      {/* Main Content - updated background to match the wrapper */}
      <main className="flex-1 bg-gray-200 
 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </main>
    </div>
    </LayoutWrapper>
    
  );
}


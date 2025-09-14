import { FacultySidebar } from "@/components/faculty-sidebar";
import { ReactNode } from "react";

export default function FacultyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (fixed) */}
      <div className="fixed top-0 left-0 h-full w-1/5">
        <FacultySidebar  />
      </div>

      {/* Main Content */}
      <main className="ml-[20%] w-[80%] p-8">
        {children}
      </main>
    </div>
  );
}

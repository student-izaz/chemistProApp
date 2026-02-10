import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () =>
    setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* MAIN */}
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

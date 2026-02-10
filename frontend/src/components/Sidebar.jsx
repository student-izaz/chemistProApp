import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-gray-700 hover:bg-gray-100"
     }`;

  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
        fixed md:static z-50
        w-64 h-screen bg-white border-r shadow-sm
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* BRAND */}
        <div className="h-14 flex items-center px-6 border-b">
          <h2 className="text-lg font-bold text-blue-600">
            Chemist<span className="text-gray-800">Pro</span>
          </h2>
        </div>

        {/* NAV */}
        <nav className="p-4 space-y-1">
          <NavLink to="/dashboard" className={linkClasses}>
            📊 Dashboard
          </NavLink>

          <NavLink to="/medicines" className={linkClasses}>
            💊 Medicines
          </NavLink>

          <NavLink to="/sales" className={linkClasses}>
            🧾 Sales
          </NavLink>

          <NavLink to="/purchase" className={linkClasses}>
            📦 Purchase
          </NavLink>

          <NavLink to="/reports" className={linkClasses}>
            📈 Reports
          </NavLink>

          <NavLink to="/users" className={linkClasses}>
            👤 Users
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

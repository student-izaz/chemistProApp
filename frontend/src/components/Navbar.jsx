import { useAuth } from "../context/AuthContext";

const Navbar = ({ toggleSidebar }) => {
  const { logout } = useAuth();

  return (
    <header className="h-14 bg-white border-b flex items-center justify-between px-4 shadow-sm">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        <h1 className="font-bold text-blue-600">
          Chemist<span className="text-gray-800">Pro</span>
        </h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;

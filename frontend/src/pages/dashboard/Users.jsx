import { useEffect, useState } from "react";
import UserForm from "../../components/UserForm";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Dummy data (backend later)
  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: "Admin",
        email: "admin@chemist.com",
        role: "Admin",
        status: "Active",
      },
      {
        id: 2,
        name: "Staff 1",
        email: "staff@chemist.com",
        role: "Staff",
        status: "Active",
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          + Add User
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      user.role === "Admin"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="p-3">
                  <span className="text-green-600 font-semibold">
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && <UserForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Users;

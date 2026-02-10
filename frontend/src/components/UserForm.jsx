const UserForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Add User</h2>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />

          <select className="w-full border p-2 rounded">
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
          </select>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

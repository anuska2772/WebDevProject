import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link>
        </li>
        <li className="mb-4">
          <Link to="/users" className="block p-2 hover:bg-gray-700 rounded">Users</Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;



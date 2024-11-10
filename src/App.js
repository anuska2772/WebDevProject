import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<div>Users Component</div>} />
          <Route path="/settings" element={<div>Settings Component</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;


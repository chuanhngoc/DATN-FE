import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const AdminLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout; 
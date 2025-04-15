import { Link, Outlet, useLocation } from 'react-router-dom';

const AdminLayout = () => {
  const location = useLocation();

  // Kiểm tra path hiện tại để active menu
  const isActive = (path) => {
    return location.pathname === path ? 'bg-gray-700' : '';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Trang quản trị</h1>
        </div>
        <nav className="mt-4">
          <Link
            to="/admin"
            className={`flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 ${isActive('/admin')}`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className={`flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 ${isActive('/admin/products')}`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Sản phẩm
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white shadow">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {location.pathname === '/admin' ? 'Dashboard' : 'Quản lý sản phẩm'}
            </h2>
            <div className="flex items-center">
              <span className="text-gray-600 mr-4">Admin</span>
              <button className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 
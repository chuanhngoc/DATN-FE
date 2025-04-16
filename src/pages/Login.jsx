const Login = () => {

  const handleLogin = () => {
    localStorage.setItem('token', 'dummy-token');
    // Chuyển hướng về trang admin
    window.location.href = '/admin';
  };

  return (
    <div>
      <h2>Login Page</h2>
      {/* Nút đăng nhập - khi click sẽ gọi hàm handleLogin */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login; 
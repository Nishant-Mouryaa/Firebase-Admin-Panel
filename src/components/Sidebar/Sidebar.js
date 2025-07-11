import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase/auth';

const sidebarStyle = (collapsed) => ({
  width: collapsed ? 80 : 240,
  background: '#fff',
  minHeight: '100vh',
  transition: 'width 0.2s',
  boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: collapsed ? 'center' : 'flex-start',
  padding: '1rem 0',
  position: 'relative',
});

const logoStyle = (collapsed) => ({
  fontWeight: 800,
  fontSize: 20,
  color: '#4880ff',
  margin: collapsed ? '0 auto 2rem' : '0 0 2rem 2rem',
  transition: 'margin 0.2s',
  whiteSpace: 'nowrap',
});

const navStyle = {
  width: '100%',
  flex: 1,
};

const linkStyle = (collapsed, active) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: collapsed ? '12px 0' : '12px 24px',
  color: active ? '#fff' : '#202224',
  background: active ? '#4880ff' : 'transparent',
  borderRadius: 8,
  margin: '4px 8px',
  fontWeight: 600,
  fontSize: 16,
  textDecoration: 'none',
  transition: 'background 0.2s, color 0.2s',
  justifyContent: collapsed ? 'center' : 'flex-start',
});

const iconStyle = {
  fontSize: 22,
  width: 28,
  textAlign: 'center',
};

const collapseBtnStyle = (collapsed) => ({
  position: 'absolute',
  bottom: 24,
  left: collapsed ? 24 : 200,
  background: '#f5f6fa',
  border: 'none',
  borderRadius: 8,
  padding: 8,
  cursor: 'pointer',
  transition: 'left 0.2s',
});

const menu = [
  { label: 'Dashboard', icon: '📊', to: '/' },
  { label: 'Order Lists', icon: '📦', to: '/orders' },
  { label: 'Product Stock', icon: '📦', to: '/stock' },
  { label: 'Users', icon: '👤', to: '/users' },
  { label: 'Employee Management', icon: '🧑‍💼', to: '/employees' },
  { label: 'Settings', icon: '⚙️', to: '/settings' },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <aside style={sidebarStyle(collapsed)}>
      <div style={logoStyle(collapsed)}>{collapsed ? 'W' : 'WaterApp'}</div>
      <nav style={navStyle}>
        {menu.map((item) => (
          <NavLink
            to={item.to}
            key={item.label}
            style={({ isActive }) => linkStyle(collapsed, isActive)}
            end={item.to === '/'}
          >
            <span style={iconStyle}>{item.icon}</span>
            {!collapsed && item.label}
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          style={{
            ...linkStyle(collapsed, false),
            background: '#fff',
            color: '#f93c65',
            border: 'none',
            width: '100%',
            marginTop: 24,
            cursor: 'pointer',
          }}
        >
          <span style={iconStyle}>🚪</span>
          {!collapsed && 'Logout'}
        </button>
      </nav>
      <button
        onClick={() => setCollapsed((c) => !c)}
        style={collapseBtnStyle(collapsed)}
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        {collapsed ? '➡️' : '⬅️'}
      </button>
    </aside>
  );
};

export default Sidebar; 
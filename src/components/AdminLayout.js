import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';

const AdminLayout = ({ children }) => (
  <div className="app-layout" style={{ display: 'flex', minHeight: '100vh' }}>
    <Sidebar />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '1rem' }}>
        {children}
      </main>
    </div>
  </div>
);

export default AdminLayout; 
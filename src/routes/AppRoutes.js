import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardHome from '../pages/DashboardHome';
import OrderManagement from '../pages/OrderManagement';
import StockManagement from '../pages/StockManagement';
import UserManagement from '../pages/UserManagement';
import EmployeeManagement from '../pages/EmployeeManagement';
import Login from '../pages/Login';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase/auth';
import AdminLayout from '../components/AdminLayout';

// PrivateRoute component
const PrivateRoute = ({ children }) => {
  const [user, setUser] = React.useState(undefined);
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <div>Loading...</div>;
  return user ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AdminLayout>
              <DashboardHome />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <PrivateRoute>
            <AdminLayout>
              <OrderManagement />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/stock"
        element={
          <PrivateRoute>
            <AdminLayout>
              <StockManagement />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <AdminLayout>
              <UserManagement />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <PrivateRoute>
            <AdminLayout>
              <EmployeeManagement />
            </AdminLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes; 
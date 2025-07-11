import React from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import auth from '../../firebase/auth';

const Navbar = () => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #eee' }}>
      <h1 style={{ margin: 0 }}>Firebase Admin Panel</h1>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: 16 }}>Signed in as: {user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <span>Not signed in</span>
        )}
      </div>
    </header>
  );
};

export default Navbar; 
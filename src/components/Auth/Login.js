
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false); // For the "Remember Password" checkbox
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // If you want to handle "remember me" logic, include it here
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'linear-gradient(135deg, #5f9cf7 0%, #497ee9 100%)',
        padding: '1rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          width: 400,
          maxWidth: '90vw',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
            textAlign: 'center',
            color: '#333',
          }}
        >
          Login to Account
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#777',
            marginBottom: '2rem',
          }}
        >
          Please enter your email and password to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                fontWeight: 500,
                marginBottom: '0.5rem',
                color: '#555',
              }}
            >
              Email address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin123@gmail.com"
              style={{
                width: '95%',
                height: '2.5rem',
                padding: '0 0.75rem',
                border: '1px solid #ddd',
                backgroundColor: "#F1F4F9",
                borderRadius: 6,
                fontSize: '1rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Password row with "Forgot Password?" link */}
          <div style={{ marginBottom: '1rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}
            >
              <label
                style={{
                  fontWeight: 500,
                  color: '#555',
                }}
              >
                Password:
              </label>
              <a
                href="#"
                style={{
                  fontSize: '0.875rem',
                  color: '#497ee9',
                  textDecoration: 'none',
                }}
                // onClick={() => { /* implement forgot password flow */ }}
              >
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
                width: '95%',
                height: '2.5rem',
                padding: '0 0.75rem',
                border: '1px solid #ddd',
                backgroundColor: "#F1F4F9",
                borderRadius: 6,
                fontSize: '1rem',
                outline: 'none',
                
              }}
            />
          </div>

          {/* "Remember Password" checkbox */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              
            }}
          >
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={() => setRemember(!remember)}
              style={{
            
                marginRight: '0.5rem',
                width: 16,
                height: 16,
              }}
            />
            <label htmlFor="remember" style={{ color: '#555' }}>
              Remember Password
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div
              style={{
                color: '#e74c3c',
                background: '#fdecea',
                borderRadius: 6,
                padding: '8px 12px',
                marginBottom: 16,
                fontSize: 15,
                textAlign: 'center',
              }}
            >
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: '#4880FF',
              color: '#FFF',
              textAlign: 'center',
              
              fontSize: '1rem',
              fontWeight: '700',
              letterSpacing: '-0.071px',
              padding: '0.75rem 0',
              borderRadius: 6,
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        {/* Footer Links */}
        <div
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '0.9rem',
          }}
        >
          Don’t have an account?{' '}
          <a
            href="#"
            style={{
              color: '#497ee9',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

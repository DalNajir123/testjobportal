// Login.js
import React, { useState } from 'react';
import Logo from '../Logo/Logo';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate the input (you might want to add more validation logic)
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    try {
      // Make a request to your server for authentication
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Assuming the server responds with a JSON containing authentication details
      const data = await response.json();

      // Handle the authentication result
      if (response.ok) {
        // Authentication successful, you can redirect or set some state
        console.log('Login successful');
      } else {
        // Authentication failed, show an error message
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-200">
      <div className="max-w-md w-full space-y-8 p-8 bg-purple-400  rounded-md">
      
        <h2 className="text-3xl font-bold text-center text-gray-800"><Logo/>Login</h2>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Username Or Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

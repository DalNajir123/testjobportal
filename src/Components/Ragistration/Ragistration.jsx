import React, { useState } from 'react';
import Logo from '../Logo/Logo';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-200">
      <div className="max-w-md w-full space-y-8 p-8 bg-purple-400  rounded-md">
      <form
        className=" mt-5 space-y-6 rounded shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-5"> <Logo/>Registration</h2>
        <div className="mb-4">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label> */}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-4">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label> */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label> */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-6">
          {/* <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password
          </label> */}
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-purple-600 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-900"
        >
          Register
        </button>
      </form>
      </div>
    </div>
  )
}

export default SignUp;

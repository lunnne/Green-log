import axios from 'axios';
import { useState } from 'react';

interface SignUpFormData {
  email: string;
  username: string;
  password: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: '',
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5173/api/auth/signup', formData);
      console.log('sign up successful:', response.data);
    } catch (error) {
      console.error('sign upfailed:', error);
      setErrorMessage('sign up failed. Please try again');
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-dark-green mb-6">Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className='"block text-gray-700 font-bold mb-2'>
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              autoComplete="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button type="submit" className="w-full bg-dark-green text-white font-semibold py-2 rounded-lg hover:bg-green-700">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

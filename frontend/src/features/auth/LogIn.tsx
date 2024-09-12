import axios from 'axios';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

interface LogInFormData {
  username: string;
  password: string;
}

export default function LogIn() {
  const [formData, setFormData] = useState<LogInFormData>({
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
      const response = await axios.post('http://localhost:5173/api/auth/login', formData);
      console.log('log in succesfully:', response.data);
    } catch (error) {
      console.error('log in failed:', error);
      setErrorMessage('log in failed, please try again');
    }
  };

  const handleGoogleSuccess = async (response: any) => {
    try {
      const res = await axios.post('http://localhost:5173', {
        token: response.credential,
      });
      console.log('Google login successful:', res.data);
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-dark-green mb-6">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="username"
              name="username"
              id="username"
              autoComplete="username"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Password"
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-3">{errorMessage}</p>}
          <button type="submit" className="w-full bg-dark-green text-white font-semibold py-2 rounded-lg hover:bg-green-700">
            Log In
          </button>
        </form>
        <div className="text-center mt-4">or</div>
        <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.log('Google login failed')} />
      </div>
    </section>
  );
}

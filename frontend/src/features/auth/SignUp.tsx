import { useState } from 'react';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
  });
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-dark-green mb-6">Sign up</h2>
        <form action="">
          <div className="mb-4">
            <label htmlFor="name" className='"block text-gray-700 font-bold mb-2'>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              name="possword"
              id="password"
              value={formData.password}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full bg-dark-green text-white font-semibold py-2 rounded-lg hover:bg-green-700">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}

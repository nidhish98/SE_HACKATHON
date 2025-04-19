'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Registered:', email);
    router.push('/auth/login');
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold">Register</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="p-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Register
      </button>

      <button
        type="button"
        onClick={() => router.push('/auth/login')}
        className="text-sm text-green-500 hover:underline"
      >
        Have an account? Login
      </button>
    </form>
  );
}

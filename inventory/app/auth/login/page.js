'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'admin') {
      router.push('/home'); // 👈 redirect after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold">Login</h2>
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
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>

      <button
        type="button"
        onClick={() => router.push('/auth/register')}
        className="text-sm text-blue-500 hover:underline"
      >
        Don&apos;t have an account? Register
      </button>
    </form>
  );
}

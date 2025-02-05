import React from 'react';
import { getCurrentUser } from '@/lib/auth';

export default async function Dashboard() {
  const user = await getCurrentUser();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      <p>Hello, {user?.name}!</p>
      <p>Your role is: {user?.role}</p>
    </div>
  );
}

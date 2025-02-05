import React from 'react';
import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminDashboard() {
  const user = await getCurrentUser();

  if (user?.role !== 'admin') {
    redirect('/dashboard');
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>This page is only accessible to admins.</p>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}

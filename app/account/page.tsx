"use client";

import { useAuth } from '@/lib/authContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Mi Cuenta</h1>
      <div className="bg-card p-6 rounded-lg shadow-md">
        <p className="mb-2"><strong>Nombre:</strong> {user.name}</p>
        <p className="mb-2"><strong>Correo electrónico:</strong> {user.email}</p>
        <Button onClick={logout} className="mt-4">Cerrar Sesión</Button>
      </div>
    </div>
  )
}
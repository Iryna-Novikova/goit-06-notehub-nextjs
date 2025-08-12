'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

interface TanstackProviderProps {
  children: React.ReactNode;
}

export default function TanstackProvider({ children }: TanstackProviderProps) {
  const [qClient] = useState(() => new QueryClient());
  return <QueryClientProvider client={qClient}>{children}</QueryClientProvider>;
}

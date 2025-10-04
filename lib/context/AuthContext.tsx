'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MOCK_USERS, User } from '@/lib/mock-data/users';

interface AuthContextType {
  user: User | null;
  login: (email: string, role: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('iga_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('iga_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, role: string) => {
    const foundUser = MOCK_USERS.find(u => u.role === role);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('iga_user', JSON.stringify(foundUser));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('iga_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

import { createContext, useContext, useEffect, useState } from 'react';
import { getStorage, setStorage, STORAGE_KEY } from '../../../shared/storage';

export interface User {
  token: string;
  email: string;
  type: 'naver' | 'kakao';
}

export class Auth {
  user: User | null;

  constructor() {
    this.user = null;
  }

  resolveUser() {
    if (window) {
      const savedUser = getStorage(STORAGE_KEY.USER);
      if (savedUser) {
        this.user = {
          token: savedUser.token,
          email: savedUser.email,
          type: savedUser.type,
        };
      }
    } else {
      this.user = null;
    }

    return this.user;
  }

  signIn({ token, email, type }: User) {
    // initialize
    this.user = {
      token,
      email,
      type,
    };

    // save user to localStorage
    setStorage(STORAGE_KEY.USER, { token, email, type });
  }
}

export const AuthContext = createContext<
  | {
      auth: Auth;
      user: User | null;
      initializing: boolean;
    }
  | undefined
>(undefined);

export function useAuth() {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return auth;
}

const auth = new Auth();

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const user = auth.resolveUser();

    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }

    setInitializing(false);
  }, []);

  const value = {
    user,
    auth,
    initializing,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-constructed-context-values */
import { axios } from 'pages/_app';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getStorage, setStorage, STORAGE_KEY } from '../../../shared/storage';

export interface User {
  token: string;
  email: string;
  type: 'naver' | 'kakao';
  seq: number;
}

export interface UserInfoData {
  seq: number;
  type: 'kakao' | 'naver';
  email: string;
}

export interface UserInfo {
  code: number;
  message: string;
  data: UserInfoData;
}

export class Auth {
  user: User | null;

  constructor() {
    this.user = null;
  }

  setAxiosHeader = (headers: { key: string; value: string }[]) => {
    axios.interceptors.request.use((config) => {
      headers.forEach((header) => {
        config.headers![header.key] = header.value;
      });
      return config;
    });
  };

  resolveUser() {
    if (window) {
      const savedUser = getStorage(STORAGE_KEY.USER);
      if (savedUser) {
        this.user = {
          token: savedUser.token,
          email: savedUser.email,
          type: savedUser.type,
          seq: savedUser.seq,
        };
        this.setAxiosHeader([
          { key: 'token', value: this.user.token as string },
          { key: 'type', value: this.user.type as string },
          { key: 'email', value: this.user.email as string },
        ]);
      }
    } else {
      this.user = null;
    }

    return this.user;
  }

  async signIn({
    token,
    email,
    type,
    cb,
  }: {
    token: string;
    email: string;
    type: 'naver' | 'kakao';
    cb?: () => {};
  }) {
    this.setAxiosHeader([
      { key: 'token', value: token as string },
      { key: 'type', value: type as string },
      { key: 'email', value: email as string },
    ]);

    const userInfo: UserInfo = await (
      await axios.get(
        `/_login/getUserInfo?email=${email}&token=${token}&type=${type}`,
        { withCredentials: true }
      )
    ).data;
    const { seq } = userInfo.data;

    // initialize
    this.user = {
      token,
      email,
      type,
      seq,
    };

    // save user to localStorage
    setStorage(STORAGE_KEY.USER, {
      token,
      email,
      type,
      seq,
    });

    if (cb) cb();
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
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
};

import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { useAuth } from './AuthProvider';

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  const { user, initializing } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      // auth is initialized and there is no user
      if (!user) {
        // remember the page that user tried to access
        router.push(`/login${router.asPath}`);
      }
    }
  }, [initializing, router, user]);

  /* show loading indicator while the auth provider is still initializing */
  if (initializing) {
    return <div />;
  }

  // if auth initialized with a valid user show protected page
  if (!initializing && user) {
    return <div>{children}</div>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
};

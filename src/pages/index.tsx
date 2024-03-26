import { lazy } from 'react';

export const HomePage = lazy(() => import('./Chat/Chat'));
export const AuthPage = lazy(() => import('./Auth/Auth'));

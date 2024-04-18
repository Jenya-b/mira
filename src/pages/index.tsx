import { lazy } from 'react';

export const HomePage = lazy(() => import('./Chat/Chat'));
export const AuthPage = lazy(() => import('./Auth/Auth'));
export const QuestionsPage = lazy(() => import('./Questions/Questions'));
export const RatesPage = lazy(() => import('./Rates/Rates'));
export const InfoRequestPage = lazy(() => import('./InfoRequest/InfoRequest'));
export const UserDataPage = lazy(() => import('./UserData/UserData'));
export const TherapySettingsPage = lazy(() => import('./TherapySettings/TherapySettings'));
export const IntroPage = lazy(() => import('./Intro/Intro'));
export const TrainingPage = lazy(() => import('./Training/Training'));
export const ReviewPage = lazy(() => import('./Review/Review'));
export const PracticePage = lazy(() => import('./Practice/Practice'));

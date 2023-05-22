import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import s from './SyaresLayout.module.css';

export default function SharedLayout() {
  return (
    <div className={s.container}>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}


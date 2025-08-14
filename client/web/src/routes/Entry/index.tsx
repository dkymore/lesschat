import React, { useRef, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginView } from './LoginView';
import clsx from 'clsx';
import styles from './index.module.less';
import loginPatternUrl from '@assets/images/login-pattern.svg';
import { RegisterView } from './RegisterView';
import { useRecordMeasure } from '@/utils/measure-helper';
import { GuestView } from './GuestView';
import { ForgetPasswordView } from './ForgetPasswordView';

function getRandomElement<T>(array: T[]): T {
  if (array.length === 0) {
    throw new Error('Cannot get a random element from an empty array');
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const EntryRoute = React.memo(() => {
  useRecordMeasure('appEntryRenderStart');

  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.style.setProperty(
        '--tc-background-image',
        getRandomElement([
          'url(/bg/77992108_p0.webp)',
          'url(/bg/83808930_p0.webp)',
          'url(/bg/91828089_p0.webp)',
          'url(/bg/96217890_p0.webp)',
          'url(/bg/107871192_p0.webp)',
          'url(/bg/124719914_p0.webp)',
          'url(/bg/132641568_p0.webp)',
          'url(/bg/vrc_moblie.webp)',
          'url(/bg/vrc_pc.webp)',
          'url(/bg/yiln_moblie.webp)',
        ])
      );
    }
  });

  return (
    <div className="h-full flex flex-row" ref={divRef}>
      <div
        className={clsx(
          styles.entryLeft,
          'entry-left w-142 mobile:w-full pt-40 px-4 bg-gray-600 min-h-full flex justify-center bg-repeat-y z-10'
        )}
        style={{ backgroundImage: `url(${loginPatternUrl})` }}
      >
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/guest" element={<GuestView />} />
          <Route path="/forget" element={<ForgetPasswordView />} />
          <Route
            path="/"
            element={<Navigate to="/entry/login" replace={true} />}
          />
        </Routes>
      </div>

      <div className="flex-1 mobile:hidden tc-background" />
    </div>
  );
});
EntryRoute.displayName = 'EntryRoute';

export default EntryRoute;

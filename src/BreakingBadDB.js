import React from 'react';
import { AppRouter } from './components/routes/AppRouter';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './styles/styles.scss';
import 'animate.css';

export const BreakingBadDB = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

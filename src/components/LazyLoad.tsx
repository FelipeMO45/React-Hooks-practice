import React, { Suspense, useState } from 'react';
import { delayImport } from './delayImport';

const Home = React.lazy(() => delayImport(() => import('./Home'), 2000));
const About = React.lazy(() => delayImport(() => import('./About'), 2000));

const LazyLoad: React.FC = () => {
  const [view, setView] = useState<string>('home');

  return (
    <div>
      <nav>
        <ul>
          <li><button onClick={() => setView('home')}>Home</button></li>
          <li><button onClick={() => setView('about')}>About</button></li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        {view === 'home' && <Home />}
        {view === 'about' && <About />}
      </Suspense>
    </div>
  );
};

export default LazyLoad;

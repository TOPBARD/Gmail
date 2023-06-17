import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';
import SuspenseLoader from './components/common/SuspenseLoader';
import DataProvider from './context/DataProvider';

const ErrorComponent = lazy(() => import('./components/common/ErrorComponent'));

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <DataProvider>
          <Routes>
            <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
            <Route path={routes.main.path} element={<routes.main.element />}>
              <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} />
              <Route path={routes.view.path} element={<routes.view.element />} />
            </Route>
            <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
          </Routes>
        </DataProvider>
      </Suspense>
    </Router>
  );
}

export default App;

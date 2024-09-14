import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import { MyProvider } from '../Context/SharedStateContext';

function App() {
  return (
    <MyProvider>
      <Router>
        <Routes>
          {/* Routes with MainLayout */}
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<HomePage />} /> */}
            {/* <Route path="about" element={<AboutPage />} /> */}
          </Route>

          {/* 404 Route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;

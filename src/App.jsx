import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import { MyProvider } from '../Context/SharedStateContext';
import Dashboard from './Pages/Dashboard/Dashboard';
import Settings from './Pages/Settings/Settings';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import Courses from './Pages/Courses/Courses';
import Friends from './Pages/Friends/Friends';
import Files from './Pages/Files/Files';
import Plans from './Pages/Plans/Plans';

function App() {
  return (
    <MyProvider>
      <Router>
        <Routes>
          {/* Routes with MainLayout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="Friends" element={<Friends />} />
            <Route path="Files" element={<Files />} />
            <Route path="Plans" element={<Plans />} />
          </Route>

          {/* 404 Route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;

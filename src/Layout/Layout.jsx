import { Outlet } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import NavList from './components/NavList';

export default function Layout() {
  return (
    <div className="h-screen font-Montserrat bg-[#6a8197]">
      <nav className="fixed gap-10 py-5 px-4 flex flex-col w-56 bg-white h-screen top-0 left-0">
        <NavHeader />
        <NavList />
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

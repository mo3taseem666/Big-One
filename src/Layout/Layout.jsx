import { Outlet } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import NavList from './components/NavList';
import TopNav from './components/TopNav';

export default function Layout() {
  return (
    <div className="h-screen font-Montserrat bg-[#dce2e7]">
      <nav className="fixed shadow-r gap-10 py-5 px-4 flex flex-col w-56 bg-white h-screen top-0 left-0">
        <NavHeader />
        <NavList />
      </nav>

      <main className="w-[calc(100vw-224px)] ml-auto ">
        <TopNav />
        <div className="px-5 py-7 bg-[#dce2e7]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

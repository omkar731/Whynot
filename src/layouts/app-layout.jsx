import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
<div className="p-10 text-center bg-gray-900 text-white mt-10 border-t border-gray-700">
  Made with 💗 by Team WhyNot
  <br />
  <span className="text-gray-400">Omkar, Ankit, Lalith, Vishnu & Deepak</span>
</div>

    </div>
  );
};

export default AppLayout;

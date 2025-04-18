import { useState } from "react";
import { Link, Outlet } from "react-router";

import logoWebp from "../assets/images/dashboard/logo.webp";
import logoPng from "../assets/images/dashboard/logo.png";
import Sidebar from "../components/dashboard/Sidebar";
import "../assets/css/dashboard.css";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebarVisibility = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Header with a total height of 82px */}
      <header className="dashboard border-y border-y-white/30 bg-black/50 text-white backdrop-blur-sm">
        <div className="section-padding container mx-auto flex h-[80px] items-center justify-between">
          {/* Sidebar toggle button for screens below 1024px */}
          <button
            className="size-[40px] cursor-pointer lg:hidden"
            onClick={toggleSidebarVisibility}
          >
            <div
              className={`relative h-0.5 w-full before:absolute before:top-0 before:left-0 before:h-0.5 before:w-full before:bg-white before:transition-transform before:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white after:transition-transform after:content-[''] ${isSidebarOpen ? "bg-transparent before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45" : "bg-white before:-translate-y-[10px] after:translate-y-[10px]"}`}
            ></div>
          </button>

          {/* Logo which links to /dashboard(inventory) */}
          <Link to="/dashboard" onClick={handleSidebarClose}>
            <picture>
              <source srcSet={logoWebp} />
              <img
                src={logoPng}
                alt="The official logo of the Robotic Rabbit Syndicate"
                className="w-[60px] rounded-full transition-shadow duration-300 hover:shadow-[0_0_8px_#3FFF90]"
              />
            </picture>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="dashboard font-montserrat relative h-[calc(100dvh-82px)] bg-[#0A0A0A] bg-fixed text-[12px] text-white sm:text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[15px] 2xl:text-[16px]">
        <div className="section-padding container mx-auto grid h-full gap-[2em] lg:grid-cols-4 2xl:grid-cols-5">
          {/* Sidebar container */}
          <section
            className={`fixed left-0 z-[1] h-[calc(100dvh-82px)] overflow-auto border-x border-white/30 bg-black/50 pt-[2em] backdrop-blur-sm lg:static lg:col-span-1 lg:animate-none ${isSidebarOpen ? "animate-sidebar-open" : "animate-sidebar-close"}`}
          >
            <Sidebar onNavClick={handleSidebarClose} />
          </section>

          {/* Page container */}
          <section className="h-full overflow-auto px-[1em] pt-[2em] lg:col-span-3 2xl:col-span-4">
            <Outlet />
          </section>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;

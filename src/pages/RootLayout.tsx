import { Outlet } from "react-router-dom";
// import MainNavigation from "../components/MainNavigation";
// import { navItems } from "../constants";
const RootLayout = () => {
  return (
    <div className="w-full">
      <div>{/* <MainNavigation items={navItems} /> */}</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

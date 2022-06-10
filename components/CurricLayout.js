const Layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="px-4 pt-4 sm:px-16">{children}</div>
      <div className="fixed top-0 hidden w-screen h-screen bg-no-repeat bg-cover light:hidden sm:block -z-10 dark:bg-[#121212]" />
      {/* <div className="light:hidden block sm:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen dark:bg-[url('/images/blurry-gradient-mobile.png')]" /> */}
      <div className="light:hidden block sm:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen dark:bg-[#121212]" />
      <div className="light:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen dark:bg-[#121212]" />
    </div>
  );
};

export default Layout;

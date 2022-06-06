import styles from "../styles/Home.module.css";
const Layout = ({ children }) => {
  return (
    //     <div className="relative">
    //       <div className="px-4 pt-4 sm:px-16">{children}</div>
    //       <div className="fixed top-0 hidden w-screen h-screen bg-no-repeat bg-cover " />
    //       <div className="fixed top-0 block w-screen h-screen bg-no-repeat bg-cover -z-10 " />
    //       <div className="fixed top-0 w-screen h-screen bg-no-repeat bg-cover light:hidden -z-10 " />
    //     </div>
    //   );
    // };

    // export default Layout;

    // The below code is a version that removes the image gradient bg and has an animated gradient bg instead.
    // export default Layout;

    // import styles from "../styles/Layout.module.css";

    // const Layout = ({ children }) => {
    //   return (
    <div className="relative">
      <div className="px-4 pt-4 sm:px-16">{children}</div>
      <div
        className={`${
          styles.gradientBG
        } ${"light:hidden hidden sm:block fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen blur-xl "}`}
      />
      <div
        className={`${
          styles.gradientBG
        } ${"light:hidden block sm:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen blur-xl"}`}
      />
      <div
        className={`${
          styles.gradientBG
        } ${"light:hidden fixed top-0 -z-10 bg-cover bg-no-repeat w-screen h-screen blur-xl "}`}
      />
    </div>
  );
};

export default Layout;

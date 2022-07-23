import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, locale }) => {
  return (
    <div className="relative">
      <Navbar locale={locale}/>
      <div>{children}</div>
      <Footer locale={locale}/>
      <div className="gradient-bg"></div>
    </div>
  );
};

export default Layout;

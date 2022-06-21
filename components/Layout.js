import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Navbar />
      <div>{children}</div>
      <Footer />
      <div className="gradient-bg"></div>
    </div>
  );
};

export default Layout;

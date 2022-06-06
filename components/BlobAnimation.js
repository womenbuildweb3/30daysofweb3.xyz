import styles from "../styles/BlobAnimation.module.css";
const BlobAnimation = ({ children }) => {
  return (
    <div className="flex items-center justify-center -ml-20 -z-150">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 bg-yellow-500 rounded-full opacity-50 -left-5 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 bg-yellow-300 rounded-full opacity-50 -right-5 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bg-black rounded-full opacity-50 -bottom-10 left-24 w-72 h-72 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="relative "></div>
        {children}
      </div>
    </div>
  );
};
export default BlobAnimation;

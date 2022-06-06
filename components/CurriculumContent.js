import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const CurriculumContent = () => {
  const [preferedColorScheme, setPreferedColorScheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setPreferedColorScheme("dark");
    }
  }, []);
  return (
    <main>
      <div className="py-6 ml-80">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <Navbar preferedColorScheme={preferedColorScheme} />
          <h1 className="text-2xl font-semibold text-white">Content-Title</h1>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          Content-Subtitle
          <div className="py-4">
            {/* <div className="border-4 border-gray-200 border-dashed rounded-lg h-96"> */}
            <div className="border-4 border-gray-200 rounded-lg h-96">
              <p className="px-5 py-5 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </div>
    </main>
  );
};

export default CurriculumContent;

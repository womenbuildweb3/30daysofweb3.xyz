import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css'

const CurriculumContent = ({curricData}) => {
  
  console.log("CURRICULUM: ", curricData)

  return (
    <main>
      <div className="py-6 ml-80">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          {/* <Navbar preferedColorScheme={preferedColorScheme} /> */}
          <h1 className="text-2xl font-semibold text-white">{curricData.data.title}</h1>
        </div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          {curricData.data.description}
          <div className="py-4">
            <div className="border-4 border-gray-200 rounded-lg min-h-96">
              <p className="px-5 py-5 markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{curricData.content}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CurriculumContent;

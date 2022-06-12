import Link from "next/link"

export default function LessonLinks({links}){
    return (
        <main>
        <div className="py-6 ml-80">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-white">
              title
            </h1>
          </div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            description
            <div className="py-4">
              <div className="border-4 border-gray-200 rounded-lg min-h-96">
                <div className="px-5 py-5 markdown-body">
                    hey
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <Link href={nex}> */}
              <button className="flex justify-center bg-indigo-800 w-full rounded-md p-2">
                Next Lesson
              </button>
            {/* </Link> */}
          </div>
        </div>
      </main>
    )
}
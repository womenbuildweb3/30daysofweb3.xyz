import Link from "next/link";

const upperCase = (string) => {
  let capitalizeLetterFunc = (match) => match.toUpperCase();
  return string.replace(/(^\w{1})|(\s{1}\w{1})/g, capitalizeLetterFunc);
};

export default function LessonLinks({ paths: { paths }, id }) {
  let num = id.match(/\d/g)[0];

  const links = paths.filter((path) => {
    return num == path.params.id[0];
  });

  return (
    <main>
      <div className="py-6 ml-80">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <div className="py-4 border-4 border-gray-200">
            <div className="w-full flex justify-center">Lesson {num}</div>
            {links.map((link) => {
              return (
                <div key={link.params.id} className="p-4 rounded-lg min-h-96">
                  <Link href={"/course/" + link.params.id}>
                    {upperCase(
                      link.params.id.replace(/\d-/g, "").replace(/-/g, " ")
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="my-4">
          <Link href={links[0].params.id}>
            <button className="flex justify-center bg-indigo-800 w-full rounded-md p-2">
              Start
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

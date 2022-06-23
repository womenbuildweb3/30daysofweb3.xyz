import CurriculumContent from "../../../components/CurriculumContent";
import getCurricContent from "../../../utils/curriculum";
import getCoursePaths from "../../../utils/getCoursePaths";
import { CurriculumLayout } from "../index";

function Course({ curricData, id, paths }) {
  return (
    <>
      {curricData && (
        <CurriculumContent curricData={curricData} id={id} paths={paths} />
      )}
    </>
  );
}

export async function getStaticPaths() {
  const paths = getCoursePaths();
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { category, subCategory } = params;
  const curricData = getCurricContent(category, subCategory);
  const paths = getCoursePaths();

  if (curricData == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      curricData,
      paths,
    },
  };
}

Course.getLayout = CurriculumLayout;

export default Course;

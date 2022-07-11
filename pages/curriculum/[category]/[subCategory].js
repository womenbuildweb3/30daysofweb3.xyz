import useTranslation from "next-translate/useTranslation";
import getT from "next-translate/getT";
import CurriculumContent from "../../../components/CurriculumContent";
import getCurricContent from "../../../utils/curriculum";
import getCoursePaths from "../../../utils/getCoursePaths";
import CurricLayout from "../../../components/CurricLayout";

function Course({ curricData, id, paths }) {
  const { t } = useTranslation("navigation");

  return (
    <>
      {curricData && (
        <CurriculumContent
          navigation={t("navigation", {}, { returnObjects: true })}
          curricData={curricData}
          id={id}
          paths={paths}
        />
      )}
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const categories = getCoursePaths();
  const paths = categories.flatMap((category) => {
    return locales.map((locale) => {
      return {
        params: {
          category: category.category,
          subCategory: category.subCategory,
        },
        locale: locale,
      };
    });
  });
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params, locale }) {
  const { category, subCategory } = params;
  // get content based on locale
  const curricData = getCurricContent(category, subCategory, locale);
  const paths = getCoursePaths();
  const t = await getT(locale, "navigation");
  if (curricData == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      curricData,
      paths,
      navigation: t("navigation", {}, { returnObjects: true }),
    },
  };
}
const CurriculumLayout = (page) => (
  <CurricLayout navigation={page.props.navigation}>{page}</CurricLayout>
);

Course.getLayout = CurriculumLayout;

export default Course;

// import useTranslation from "next-translate/useTranslation";
// import getT from "next-translate/getT";
import CurriculumContent from "../../../components/CurriculumContent";
import getCurricContent from "../../../utils/curriculum";
import getCoursePaths from "../../../utils/getCoursePaths";
import pathsToNav from "../../../utils/pathsToNav"
import CurricLayout from "../../../components/CurricLayout";

function Course({ curricData, navigation }) {
  // const { t } = useTranslation("navigation");

  return (
    <>
      {curricData && (
        <CurriculumContent
          navigation={navigation}
          curricData={curricData}
        />
      )}
    </>
  );
}

export async function getStaticPaths({ locales }) {
  const ENCategories = getCoursePaths();
  const ESCategories = getCoursePaths("es");
  const categories = [...ENCategories, ...ESCategories]
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
  const paths = getCoursePaths(locale);
  // const t = await getT(locale, "navigation");
  const navigation = pathsToNav(paths, locale)
  if (curricData == null) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      curricData,
      navigation,
      locale
      // navigation: t("navigation", {}, { returnObjects: true }),
    },
  };
}
const CurriculumLayout = (page) => (
  <CurricLayout navigation={page.props.navigation} locale={page.props.locale}>{page}</CurricLayout>
);

Course.getLayout = CurriculumLayout;

export default Course;

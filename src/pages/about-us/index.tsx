import AboutHero from "@/component/AboutHero";
import AboutTop from "@/component/AboutTop";
import GlobalTelent from "@/component/GlobalTelent";
import Layout from "@/component/Layout";
import Values from "@/component/Values";
import { fetcher } from "@/datalayer";
import { AboutPageQuery } from "@/datalayer/GraphQL/About";
import {
  AboutPageHero,
  GlobalTelent as GlobalTelentType,
  HomePageHeroQuery,
  ValuesQuery,
} from "@/datalayer/Types/AllTypes";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function About({
  mlesValuesData,
  globalTelentdata,
  herosData,
  heroWithLogoData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout title="About us">
      <AboutTop heroWithLogoData={heroWithLogoData} />

      <Values mlesValuesData={mlesValuesData} />

      <AboutHero herosData={herosData} />

      <GlobalTelent globalTelentdata={globalTelentdata} />
    </Layout>
  );
}

type AboutPageProps = {
  herosData: HomePageHeroQuery;
  mlesValuesData: ValuesQuery[];
  globalTelentdata: GlobalTelentType;
  heroWithLogoData: AboutPageHero[];
};

export const getServerSideProps: GetServerSideProps<
  AboutPageProps
> = async () => {
  const aboutPagedata = await fetcher<any>(AboutPageQuery);

  return {
    props: {
      herosData: aboutPagedata?.page?.componentsCollection?.items[0],
      mlesValuesData: aboutPagedata?.mlesValuesCollection?.items,
      globalTelentdata: aboutPagedata?.globalTelentCollection?.items[0],
      heroWithLogoData: aboutPagedata?.heroWithLogoCollection?.items,
    },
  };
};

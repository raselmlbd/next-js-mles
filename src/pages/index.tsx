import GlobalTelent from "@/component/GlobalTelent";
import HomePageHeros from "@/component/HomePageHeros";
import Layout from "@/component/Layout";
import Offers from "@/component/Offers";
import OurTeam from "@/component/OurTeam";
import OurWork from "@/component/OurWork";
import SingleNews from "@/component/SingleNews";
import StandOut from "@/component/StandOut";
import Values from "@/component/Values";
import Video from "@/component/Video";
import { fetcher } from "@/datalayer";
import { HomeQuery } from "@/datalayer/GraphQL/Home";
import { serviceHelper } from "@/datalayer/helper/healper";
import {
  CategoryListData,
  GlobalTelent as GlobalTelentType,
  HomePageHeroQuery,
  MeetOurPeople,
  NewsQuery,
  OurPeopleQuery,
  OurWorkListQuery,
  ValuesQuery,
  WhyWeStandOutQuery,
} from "@/datalayer/Types/AllTypes";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home({
  herosData,
  whyWeStandOut,
  ourPeople,
  serviceCategory,
  meetOurPeopleData,
  mlesValuesData,
  globalTelentdata,
  mlesNewsData,
  ourWorkListData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout title="Home Page">
      <HomePageHeros herosData={herosData} />

      <Offers serviceCategory={serviceCategory} />

      <StandOut whyWeStandOut={whyWeStandOut} />

      <OurWork ourWorkListData={ourWorkListData} />

      <Video meetOurPeopleData={meetOurPeopleData} />

      <Values mlesValuesData={mlesValuesData} />

      <GlobalTelent globalTelentdata={globalTelentdata} />

      <OurTeam ourPeople={ourPeople} />

      <SingleNews mlesNewsData={mlesNewsData} />
    </Layout>
  );
}

type HomePageProps = {
  herosData: HomePageHeroQuery[];
  whyWeStandOut: WhyWeStandOutQuery;
  ourPeople: OurPeopleQuery[];
  serviceCategory: CategoryListData[];
  meetOurPeopleData: MeetOurPeople;
  mlesValuesData: ValuesQuery[];
  globalTelentdata: GlobalTelentType;
  mlesNewsData: NewsQuery;
  ourWorkListData: OurWorkListQuery[];
};

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  // Fetching Home Page Data
  const HomePageData = await fetcher<any>(HomeQuery);

  // Normalize Service Category Data
  let serviceCategory = serviceHelper(
    HomePageData?.mlesCategoryContentCollection?.items
  );

  return {
    props: {
      herosData: HomePageData?.page?.componentsCollection?.items,
      whyWeStandOut: HomePageData?.whyWeStandOutCollection?.items[0],
      ourPeople: HomePageData?.ourPeopleCollection?.items,
      serviceCategory,
      whatWeOfferData: HomePageData?.whatWeOfferCollection?.items,
      meetOurPeopleData: HomePageData?.meetOurPeopleCollection?.items[0],
      mlesValuesData: HomePageData?.mlesValuesCollection?.items,
      globalTelentdata: HomePageData?.globalTelentCollection?.items[0],
      mlesNewsData: HomePageData?.mlesNewsCollection?.items[0],
      ourWorkListData: HomePageData?.ourWorkListCollection?.items,
    },
  };
};

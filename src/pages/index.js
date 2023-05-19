import GlobalTelent from '@/component/GlobalTelent';
import HomePageHeros from '@/component/HomePageHeros';
import Layout from '@/component/Layout';
import Offers from '@/component/Offers';
import OurTeam from '@/component/OurTeam';
import OurWork from '@/component/OurWork';
import SingleNews from '@/component/SingleNews';
import StandOut from '@/component/StandOut';
import Values from '@/component/Values';
import Video from '@/component/Video';
import { serviceHelper } from '@/datalayer/helper/healper';

export default function Home({herosData, whyWeStandOut, ourPeople, refactoredData, whatWeOfferData, meetOurPeopleData, mlesValuesData, globalTelentdata, mlesNewsData, ourWorkListData}) {
  
  return (
  <Layout title="Home Page">
    <HomePageHeros herosData={herosData} />

    <Offers data={refactoredData} whatWeOfferData={whatWeOfferData} />

    <StandOut whyWeStandOut={whyWeStandOut} />

    <OurWork data={ourWorkListData} />

    <Video data={meetOurPeopleData} />

    <Values data={mlesValuesData} />

    <GlobalTelent data={globalTelentdata} />

    <OurTeam ourPeople={ourPeople} />

    <SingleNews data={mlesNewsData} />
  </Layout>
  )
}

export async function getServerSideProps() {
  const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`, {
    method : 'POST',
    headers : {
      Authorization : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
    body : JSON.stringify({
      query : `
        query {
          page(id: "54cCpr5pAQyrUdMAfICSD9") {
            componentsCollection {
              items {
                ... on MlesHero {
                  title
                  description
                  image {
                    url
                  }
                }
              }
            }
          }
          whyWeStandOutCollection {
            items {
              title
              lists
              description
            }
          }
          ourPeopleCollection {
            items {
              name
              designation
              details
              image {
                url
                height
                width
              }
            }
          }
          mlesCategoryContentCollection {
            items {
              title
              description
              selectCategory {
                ... on MlesHome {
                  catagory: categoryName
                  link
                }
                ... on MlesSubCategory {
                  sub_category: subCategory
                  description
                  mainCategory {
                    catagory: categoryName
                    link
                  }
                }
              }
            }
          }
          whatWeOfferCollection {
            items {
              title
              link
            }
          }
          meetOurPeopleCollection {
            items {
              heading
              description
              link
              youtubeVideo
            }
          }
          mlesValuesCollection {
            items {
              title
              description
            }
          }
          globalTelentCollection {
            items {
              offices
              countries
              employees
            }
          }
          mlesNewsCollection {
            items {
              heading
              date
              description
              thumbnail {
                url
                width
                height
              }
              link
            }
          }
          ourWorkListCollection {
            items {
              title
              description
              image {
                url
                width
                height
              }
            }
          }
        }
      `,
    })
  })
  
  const { data, errors } = await result.json();

  if (errors) {
    console.error('GraphQL errors:', errors);
  }

  let refactoredData = serviceHelper(data.mlesCategoryContentCollection.items);
    
  return {
    props: {
      herosData: data.page.componentsCollection.items,
      whyWeStandOut: data.whyWeStandOutCollection.items[0],
      ourPeople: data.ourPeopleCollection.items,
      refactoredData,
      whatWeOfferData: data.whatWeOfferCollection.items,
      meetOurPeopleData: data.meetOurPeopleCollection.items[0],
      mlesValuesData: data.mlesValuesCollection.items,
      globalTelentdata: data.globalTelentCollection.items[0],
      mlesNewsData: data.mlesNewsCollection.items[0],
      ourWorkListData: data.ourWorkListCollection.items,
    },
  };

}
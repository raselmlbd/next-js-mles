import AboutHero from "@/component/AboutHero";
import AboutTop from "@/component/AboutTop";
import GlobalTelent from "@/component/GlobalTelent";
import Layout from "@/component/Layout";
import Values from "@/component/Values";

export default function About({mlesValuesData, globalTelentdata, herosData, heroWithLogoData}) {
  return (
    <Layout title="About us">
      <AboutTop data={heroWithLogoData} />

      <Values data={mlesValuesData} />

      <AboutHero data={herosData} />

      <GlobalTelent data={globalTelentdata} />
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
          page(id: "3TKsfaj4YTgVx02LTL8cPc") {
            componentsCollection {
              items {
                ... on MlesHero {
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
          heroWithLogoCollection {
            items {
              heading
              description
              image {
                url
                width
                height
              }
              logo {
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
    
  return {
    props: {
      herosData: data.page.componentsCollection.items[0],
      mlesValuesData: data.mlesValuesCollection.items,
      globalTelentdata: data.globalTelentCollection.items[0],
      heroWithLogoData: data.heroWithLogoCollection.items,
    },
  };

}

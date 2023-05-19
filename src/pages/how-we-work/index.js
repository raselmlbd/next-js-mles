import HowWeWorkPageHero from "@/component/HowWeWorkPageHero";
import Layout from "@/component/Layout";
import StandOut from "@/component/StandOut";

export default function HowWeWork({whyWeStandOut, herosData}) {
  return (
    <Layout title="How we work">
      <HowWeWorkPageHero data={herosData} />

      <StandOut whyWeStandOut={whyWeStandOut} />
    </Layout>
  )
}

export const getServerSideProps = async() => {
  const result = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`, {
    method : 'POST',
    headers : {
      Authorization : `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      'Content-type': 'application/json; charset=UTF-8',
    },
    body : JSON.stringify({
      query : `
        query {
          whyWeStandOutCollection {
            items {
              title
              lists
              description
            }
          }
          page(id: "4fZB12hDzUAi5YOgaO4dke") {
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
        }
      `,
    })
  })

  const { data, errors } = await result.json();

  if (errors) {
    console.error('GraphQL errors:', errors);
  }
  
  return {
    props : {
      herosData: data.page.componentsCollection.items[0],
      whyWeStandOut: data.whyWeStandOutCollection.items[0],
    }
  }
}
import CareerHero from "@/component/CareerHero";
import CareerLocation from "@/component/CareerLocation";
import Layout from "@/component/Layout";
import Video from "@/component/Video";

export default function careers({meetOurPeopleData, herosData, locationData, heroWithLogoData}) {
  return (
    <Layout title="Career">
      <Video meetOurPeopleData={meetOurPeopleData} />

      <CareerHero herosData={herosData} />

      <CareerLocation locationData={locationData} />
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
          herosData: page(id: "4xFuJ9im2PMdRG6tOQeCFf") {
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
          careerLocationsCollection {
            items {
              heading
              description
              image {
                url
                width
                height
              }
              locationsCollection {
                items {
                  locationName
                  locationLink
                }
              }
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
      herosData: data.herosData.componentsCollection.items[0],
      locationData: data.careerLocationsCollection.items[0],
      meetOurPeopleData: data.meetOurPeopleCollection.items[0],
    },
  };

}
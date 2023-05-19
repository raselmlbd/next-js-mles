import CategoryHero from '@/component/CategoryHero';
import Layout from '@/component/Layout';
import Offers from '@/component/Offers';
import { serviceHelper } from '@/datalayer/helper/healper';
import { useRouter } from 'next/router';

export default function ServiceCategory({refactoredData, herosData}) {
  console.log(refactoredData)
  const router = useRouter()
  const { category } = router.query

  return (
    <Layout title="Category">
      <CategoryHero herosData={herosData} />

      <section className='offers bpo'>
        <Offers data={refactoredData[2].sub_category} />
      </section>
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
            page(id: "9Q6qDH9FWq9QFeqUGv37d") {
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
        refactoredData,
        herosData: data.page.componentsCollection.items,
      }
    }
  }
  

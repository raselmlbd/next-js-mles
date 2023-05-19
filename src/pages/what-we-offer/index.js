import Layout from "@/component/Layout";
import Services from "@/component/Services";
import { serviceHelper } from "@/datalayer/helper/healper";

export default function WhatWeOffer({refactoredData}) {
  return (
    <Layout title="What we offer">
    <div className="offers offer-page">
      <div className="offers-container">
        <div className="offers-top">
          <h3 className="highlighted-title wow animate__animated animated">What we<strong className="highlight">offer</strong></h3>
        </div>
        {refactoredData.map((eachcat, index) => <Services key={index} data={eachcat} />)}
      </div>
    </div>
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
      refactoredData
    }
  }
}

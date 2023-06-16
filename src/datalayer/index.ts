export { HomeData } from "./contentful/HomeData";
export { getOffers } from "./contentful/offersAPI";

export const fetcher = async <T>(query: string): Promise<T> => {
  // Fetching data from the contentful endpoint
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  );

  // Disstructure data and error from the response
  const { data, errors } = await result.json();

  // If any error, Throw the error
  if (errors) {
    throw new Error(errors);
  }

  return data;
};

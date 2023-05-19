import { client } from "./client";

export const getOffers = async() => {
  const dataRaw = await client.getEntries({ content_type: 'mlesCategoryContent', include: 2 })

  const data = dataRaw.items.map((data, index) => {
    let category = data.fields.selectCategory.fields.categoryName
      ? data.fields.selectCategory.fields.categoryName
    : data.fields.selectCategory.fields.mainCategory.fields.categoryName;
    let title = data.fields.title;
    let description = data.fields.description;
    let link = data.fields.selectCategory.fields.link
    ? data.fields.selectCategory.fields.link
    : data.fields.selectCategory.fields.mainCategory
    ? data.fields.selectCategory.fields.mainCategory.fields.link
    : '';
    return { category, title, description, link }
  })

  const formattedData = [];
  
  data.forEach((item) => {
    const existingCategoryIndex = formattedData.findIndex(
      (formattedItem) => formattedItem.category === item.category
    );
  
    if (existingCategoryIndex === -1) {
      formattedData.push({
        category: item.category,
        link: item.link,
        childServices: [
          {
            title: item.title,
            description: item.description,
          },
        ],
      });
    } else {
      formattedData[existingCategoryIndex].childServices.push({
        title: item.title,
        description: item.description,
      });
    }
  });
  
  

  return formattedData;
}
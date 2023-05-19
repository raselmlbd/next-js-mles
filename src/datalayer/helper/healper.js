export const serviceHelper = (data) => {
  let rawData = data;

  let refactoredData = [];
  
  // Categorize items by their main category
  let categorizedItems = rawData.reduce((acc, item) => {
    let category = item.selectCategory.catagory || item.selectCategory.mainCategory.catagory;
    let link = item.selectCategory.link || item.selectCategory.mainCategory?.link || '';
    let sub_category = item.selectCategory.sub_category;
  
    if (!acc[category]) {
      acc[category] = {
        catagory: category,
        posts: [],
        link: link,
        sub_category: []
      };
    }
  
    if (sub_category) {
      if (!acc[category].sub_category.find(sc => sc.title === sub_category)) {
        acc[category].sub_category.push({
          title: sub_category,
          description: item.description,
          link: link,
          posts: []
        });
      }
      let subCategoryObj = acc[category].sub_category.find(sc => sc.title === sub_category);
      subCategoryObj.posts.push({
        title: item.title,
        description: item.description,
        link: link,
      });
    } else {
      acc[category].posts.push({
        title: item.title,
        description: item.description,
        link: link,
      });
    }
  
    return acc;
  }, {});
  
  // Convert object to array
  for (let category in categorizedItems) {
    refactoredData.push(categorizedItems[category]);
  }

  return refactoredData;
}
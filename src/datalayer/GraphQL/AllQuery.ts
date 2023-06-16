export const HomePageHeroQuery = `
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
`;

export const AboutPageHeroQuery = `
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
`;

export const WhyWeStandOutQuery = `
  whyWeStandOutCollection {
    items {
      title
      lists
      description
    }
  }
`;

export const OurPeopleQuery = `
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
`;

export const CategoryListQuery = `
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
`;

export const WhatWeOfferQuery = `
  whatWeOfferCollection {
    items {
      title
      link
    }
  }
`;

export const MeetOurPeople = `
  meetOurPeopleCollection {
    items {
      heading
      description
      link
      youtubeVideo
    }
  }
`;

export const ValuesQuery = `
  mlesValuesCollection {
    items {
      title
      description
    }
  }
`;

export const GlobalTelent = `
  globalTelentCollection {
    items {
      offices
      countries
      employees
    }
  }
`;

export const NewsQuery = `
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
`;

export const OurWorkListQuery = `
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
`;

export const AboutPageHeroWithLogoQuery = `
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
`;

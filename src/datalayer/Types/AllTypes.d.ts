export interface HomePageHeroQuery {
  title: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
}

export interface WhyWeStandOutQuery {
  title: string;
  lists: string[];
  description: string;
}

export interface OurPeopleQuery {
  name: string;
  designation: string;
  details: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
}

export interface CategoryListQuery {
  title: string;
  description: string;
  selectCategory: {
    catagory: string;
    link?: string | null;
    sub_category?: string;
    description: string;
    mainCategory?: {
      catagory: string;
      link: string;
    };
  };
}

export interface WhatWeOfferQuery {
  title: string;
  link: string;
}

export interface MeetOurPeople {
  heading: string;
  description: string;
  link: string;
  youtubeVideo: string;
}

export interface ValuesQuery {
  title: string;
  description: string;
}

export interface GlobalTelent {
  offices: string;
  countries: string;
  employees: string;
}

export interface NewsQuery {
  heading: string;
  date: string;
  description: string;
  link: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
}

export interface OurWorkListQuery {
  title: string;
  description: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export interface CategoryListData {
  catagory: string;
  link: string;
  posts: [
    {
      title: string;
      link: string;
      description: string;
      post: [{ title: string; link: string; description: string }];
    }
  ];
  sub_category: [
    {
      title: string;
      link: string;
      description: string;
      post: [{ title: string; link: string; description: string }];
    }
  ];
}

interface AboutPageHero {
  heading: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  logo: {
    url: string;
    height: number;
    width: number;
  };
}

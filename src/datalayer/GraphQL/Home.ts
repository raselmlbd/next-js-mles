import {
  CategoryListQuery,
  GlobalTelent,
  HomePageHeroQuery,
  MeetOurPeople,
  NewsQuery,
  OurPeopleQuery,
  OurWorkListQuery,
  ValuesQuery,
  WhatWeOfferQuery,
  WhyWeStandOutQuery,
} from "./AllQuery";

export const HomeQuery = `query {
  ${HomePageHeroQuery}
  ${WhyWeStandOutQuery}
  ${OurPeopleQuery}
  ${CategoryListQuery}
  ${WhatWeOfferQuery}
  ${MeetOurPeople}
  ${ValuesQuery}
  ${GlobalTelent}
  ${NewsQuery}
  ${OurWorkListQuery}
}`;

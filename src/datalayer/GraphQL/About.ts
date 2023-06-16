import {
  AboutPageHeroQuery,
  AboutPageHeroWithLogoQuery,
  GlobalTelent,
  ValuesQuery,
} from "./AllQuery";

export const AboutPageQuery = ` query {
  ${AboutPageHeroQuery}
  ${ValuesQuery}
  ${GlobalTelent}
  ${AboutPageHeroWithLogoQuery}
}`;

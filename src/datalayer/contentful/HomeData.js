import { client } from "./client";

export const HomeData = async() => {
  const data = await client.getEntry('54cCpr5pAQyrUdMAfICSD9');
  return data;
}
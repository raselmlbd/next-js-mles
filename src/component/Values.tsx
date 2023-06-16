import { ValuesQuery } from "@/datalayer/Types/AllTypes";
import Image from "next/image";
import ValuesList from "./ValuesList";

type ValuesProps = {
  mlesValuesData: ValuesQuery[];
};

export default function Values({ mlesValuesData }: ValuesProps): JSX.Element {
  return (
    <section className="wow values">
      <div className="values-container">
        <div className="values-top">
          <h2 className="highlighted-title">
            <span className="highlight wow animate__animated">
              Values That Drive us
            </span>
          </h2>
          <Image
            src="/images/values.svg"
            alt="picture of the author"
            width={330}
            height={40}
          />
        </div>
      </div>
      <div className="values-list">
        <div className="bg wow animate__animated"></div>
        {mlesValuesData &&
          mlesValuesData.map((eachValueList: ValuesQuery, i: number) => (
            <ValuesList key={i} eachValueList={eachValueList} />
          ))}
      </div>
    </section>
  );
}

import { WhyWeStandOutQuery } from "@/datalayer/Types/AllTypes";
import StandOutBox from "./StandOutBox";

type whyWeStandOutProps = {
  whyWeStandOut: WhyWeStandOutQuery;
};

export default function StandOut({
  whyWeStandOut,
}: whyWeStandOutProps): JSX.Element {
  return (
    <section className="wow standout">
      <div className="standout-container">
        <h3 className="highlighted-title">
          Why we
          <strong className="highlight wow animate__animated">stand out</strong>
        </h3>
        <div className="standout-list">
          {whyWeStandOut?.lists && whyWeStandOut?.lists.length
            ? whyWeStandOut?.lists?.map(
                (eachBox, index) => (
                  <StandOutBox key={index.toString()} data={eachBox} />
                )
              )
            : null}
        </div>
        <p className="standout-details wow animate__animated">
          {whyWeStandOut?.description}
        </p>
      </div>
    </section>
  );
}

import { CategoryListData } from "@/datalayer/Types/AllTypes";
import Services from "./Services";

type OfferProps = {
  serviceCategory: CategoryListData[];
};

export default function Offers({ serviceCategory }: OfferProps): JSX.Element {
  console.log("serviceCategory", serviceCategory);
  return (
    <section className="wow offers">
      <div className="offers-container">
        <div className="offers-top">
          <h3 className="highlighted-title wow animate__animated">
            What we<strong className="highlight">offer</strong>
          </h3>
          <h5>
            <a href="">See all our services</a>
          </h5>
        </div>
        {serviceCategory?.map((eachcat: CategoryListData, index: number) => (
          <Services key={index} data={eachcat} />
        ))}
      </div>
    </section>
  );
}

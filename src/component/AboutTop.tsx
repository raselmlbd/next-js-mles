import { AboutPageHero } from "@/datalayer/Types/AllTypes";
import Image from "next/image";
type AboutTopProps = {
  heroWithLogoData: AboutPageHero[];
};
export default function AboutTop({
  heroWithLogoData,
}: AboutTopProps): JSX.Element {
  return (
    <section className="hero-four wow animate__animated">
      <div className="ml-container hero-four-content">
        <div className="content-one">
          <div className="info-card wow animate__animated">
            <Image
              src={heroWithLogoData[1]?.logo?.url}
              alt="picture of the author"
              width={heroWithLogoData[1]?.logo?.width}
              height={heroWithLogoData[1]?.logo?.height}
            />
            <h2 className="highlight wow animate__animated">
              {heroWithLogoData[1]?.heading}
            </h2>
            <p className="wow animate__animated">
              {heroWithLogoData[1]?.description}
            </p>
          </div>
          <div className="image-section wow animate__animated">
            <Image
              src={heroWithLogoData[1]?.image?.url}
              alt="picture of the author"
              width={heroWithLogoData[1]?.image?.width}
              height={heroWithLogoData[1]?.image?.height}
            />
          </div>
        </div>
        <div className="content-two">
          <div className="info-content wow animate__animated">
            <h2 className="highlight wow animate__animated">
              {heroWithLogoData[0]?.heading}
            </h2>
            <Image
              src={heroWithLogoData[0]?.logo?.url}
              alt="picture of the author"
              width={heroWithLogoData[0]?.logo?.width}
              height={heroWithLogoData[0]?.logo?.height}
            />
            <p className="wow animate__animated">
              {heroWithLogoData[0]?.description}
            </p>
          </div>
          <div className="image-section wow animate__animated">
            <Image
              src={heroWithLogoData[0]?.image?.url}
              alt="picture of the author"
              width={heroWithLogoData[0]?.image?.width}
              height={heroWithLogoData[0]?.image?.height}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

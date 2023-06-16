import { OurWorkListQuery } from "@/datalayer/Types/AllTypes";
import { FC } from "react";
import { A11y, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "./Slide";

type OurWorkProps = {
  ourWorkListData: OurWorkListQuery[];
};

const OurWork: FC<OurWorkProps> = ({ ourWorkListData }) => {
  return (
    <section className="wow our-work">
      <div className="bg wow animate__animated"></div>
      <div className="our-work-container">
        <h3 className="title wow animate__animated">Our work</h3>
        <div className="our-work-slider">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {ourWorkListData?.map(
              (eachWork: OurWorkListQuery, index: number) => (
                <SwiperSlide key={index}>
                  <Slide eachWork={eachWork} />
                </SwiperSlide>
              )
            )}
          </Swiper>
          <div className="slider-controllers" id="workSlider-controller">
            <span className="swiper-button-prev">
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-0.000244141 0H50.2197V50.2197H-0.000244141V0Z"
                  fill="#FFFF00"
                />
                <path
                  d="M36.0996 25.1099H14.8196"
                  stroke="#464A4D"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M21.0098 20.3398L14.1198 25.1099L21.0098 29.8799"
                  stroke="#464A4D"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </span>
            <span className="swiper-button-next">
              <svg
                width="51"
                height="51"
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M50.22 0H0V50.2197H50.22V0Z" fill="#FFFF00" />
                <path
                  d="M14.1201 25.1099H35.4001"
                  stroke="#464A4D"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M29.21 20.3398L36.1 25.1099L29.21 29.8799"
                  stroke="#464A4D"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;

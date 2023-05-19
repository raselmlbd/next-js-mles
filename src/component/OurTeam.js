import { A11y, Navigation } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import TeamSlide from './TeamSlide';

export default function OurTeam({ ourPeople }) {

  return (
    <section className="wow our-team">
      <div className="our-team-content">
        <div className="team-top">
          <h2 className="wow animate__animated">Our Team</h2>
          <p className="wow animate__animated">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
        <div className="team-slider-container">
          <div className="team-slider" id="teamSlide">
          <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{
            nextEl: '.button-next',
            prevEl: '.button-prev',
          }}
          >
            {ourPeople.map((eachPeople, index) => <SwiperSlide key={index}><TeamSlide eachPeople={eachPeople} /></SwiperSlide>)}
          </Swiper>
          </div>
          <div className="team-slider-control" id="teamSlide-control">
            <span className="button-prev">
                <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50.22 0H0V50.2197H50.22V0Z" fill="#FFFF00"/>
                <path d="M14.1201 25.1099H35.4001" stroke="#464A4D" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M29.21 20.3398L36.1 25.1099L29.21 29.8799" stroke="#464A4D" strokeWidth="2" strokeMiterlimit="10"/>
              </svg>
            </span>
            <span className="button-next">
              <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-0.000244141 0H50.2197V50.2197H-0.000244141V0Z" fill="#FFFF00"/>
                <path d="M36.0996 25.1099H14.8196" stroke="#464A4D" strokeWidth="2" strokeMiterlimit="10"/>
                <path d="M21.0098 20.3398L14.1198 25.1099L21.0098 29.8799" stroke="#464A4D" strokeWidth="2" strokeMiterlimit="10"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="bg wow animate__animated"></div>
    </section>
  )
}

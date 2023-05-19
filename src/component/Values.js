import Image from "next/image";
import ValuesList from "./ValuesList";

export default function Values({data}) {
  return (
    <section className="wow values">
      <div className="values-container">
        <div className="values-top">
          <h2 className="highlighted-title">
            <span className="highlight wow animate__animated">Values That Drive us</span>
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
          {data && data.map((each, i) => <ValuesList key={i} data={each} />)}
        </div>
      </section>
  )
}

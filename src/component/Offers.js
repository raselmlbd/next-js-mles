import Services from "./Services";
export default function Offers({data}) {
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
        {data.map((eachcat, index) => <Services key={index} data={eachcat} />)}
      </div>
    </section>
  )
}

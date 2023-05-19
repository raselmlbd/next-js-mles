import StandOutBox from './StandOutBox'

export default function StandOut({whyWeStandOut}) {
  return (
    <section className="wow standout">
      <div className="standout-container">
        <h3 className="highlighted-title">
          Why we<strong className="highlight wow animate__animated">stand out</strong>
        </h3>
        <div className="standout-list">
          {whyWeStandOut.lists.map((eachBox, index) => <StandOutBox key={index} data={eachBox}/>)}
        </div>
        <p className="standout-details wow animate__animated">{whyWeStandOut.description}</p>
      </div>
    </section>
  )
}

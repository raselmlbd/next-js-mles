export default function GlobalTelent({data : {offices, countries, employees} }) {
  return (
    <section className="wow global">
      <div className="ml-container global-container">
        <div className="global-top">
          <h2 className="highlighted-title">
            We are <br />
            a network of <br />
            <strong className="highlight wow animate__animated">global talents</strong>
          </h2>
        </div>
        <div className="global-counter">
          <div className="count">
            <strong>{offices}</strong><br />
            <span>Offices</span>
          </div>
          <div className="count">
            <strong>{countries}</strong><br />
            <span>Countries</span>
          </div>
          <div className="count">
            <strong>{employees}</strong><br />
            <span>Employees</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServiceBox({eachData : {title, description}}) {
  return (
    <div className="offers-card wow animate__animated">
      <h4>{title}</h4>
      <p>
        {description}
      </p>
      <div className="links">
        <a href="#" className="linkIcon">
          <span>
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.4602 0.700073H0.240234V50.92H50.4602V0.700073Z" fill="#FFFF00"/>
            <path d="M14.3604 25.8202H35.6404" stroke="#464A4D" strokeWidth="2" strokeMiterlimit="10"/>
            <path d="M29.4502 21.0502L36.3402 25.8202L29.4502 30.5902" stroke="#464A4D" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
          </span>
        </a>
      </div>
    </div>
  )
}

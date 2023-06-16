import Image from 'next/image';

export default function Footer() {
  return (
    <section className="wow animate__animated animate__fadeIn contact" id='footer-contact'>
      <div className="ml-container contact-container">
        <div className="getInTouch">
          <div className="getInTouch-top">
            <h2>Get in touch</h2>
            <p>
              Let us know how we can help. One of our <br />
              representatives will reach out to you shortly.
            </p>
          </div>
          <form action="#">
            <div className="forms-section">
              <div className="left">
                <div className="form-group">
                  <input type="text" className="form-control" name="Name" placeholder="Name" />
                  <span className="error">message</span>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="Company Name" placeholder="Company Name" />
                  <span className="error">message</span>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="Phone" placeholder="Phone" />
                  <span className="error">message</span>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="Email" placeholder="Email" />
                  <span className="error">message</span>
                </div>
              </div>
              <div className="right">
                <div className="form-group">
                  <textarea name="" id="" className="form-control" cols="30" rows="11" placeholder="Message"></textarea>
                </div>
              </div>
            </div>
            <div className="forms-section">
              <div className="left">
                <label className="check-container">I agree to the terms & conditions
                  <input type="checkbox" checked="checked" onChange={(e)=>e.preventDefault()} />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="right">
                <button className="btn sendMsg" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        <div className="siteMap">
          <div className="companyLogo">
            <Image
              src="/images/whiteLogo.svg"
              alt="picture of the author"
              width={280}
              height={60}
              />
          </div>
          <nav className="navPile">
            <a href=""><span>About Us</span></a>
            <a href=""><span>What We Offer</span></a>
            <a href=""><span>How We Work</span></a>
            <a href=""><span>Career</span></a>
            <a href=""><span>Contact Us</span></a>
          </nav>

        </div>
      </div>
    </section>
  )
}

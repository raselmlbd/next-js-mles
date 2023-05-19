import Image from 'next/image';

export default function HomePageHeros({herosData}) {
  return (
    <>
    <section className="wow animate__animated hero-one">
        <div className="bg wow animate__animated"></div>
        <div className="ml-container hero-one-content">
          <div className="text-section">
            <h2 className="wow animate__animated" dangerouslySetInnerHTML={{ __html: herosData[0].title }}>
            </h2>
            <p className="wow animate__animated" dangerouslySetInnerHTML={{ __html: herosData[0].description }}>
            </p>
          </div>
          <div className="image-section wow animate__animated">
            <Image
              src={herosData[0].image.url}
              alt="picture of the author"
              width={600}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="wow animate__animated hero-two">
        <div className="bg wow animate__animated"></div>
        <div className="hero-two-content">
          <div className="image-section wow animate__animated">
            <Image
              src={herosData[1].image.url}
              alt="picture of the author"
              width={680}
              height={500}
            />
          </div>
          <div className="text-section">
            <h2 className="wow animate__animated" dangerouslySetInnerHTML={{ __html: herosData[1].title }}>
            </h2>
            <p className="wow animate__animated" dangerouslySetInnerHTML={{ __html: herosData[1].description }}>
            </p>
          </div>
        </div>
      </section>

      <section className="wow hero-three">
        <div className="bg wow animate__animated"></div>
        <div className="ml-container hero-three-content">
          <div className="text-section">
            <h2 className="wow animate__animated" dangerouslySetInnerHTML={{ __html: herosData[2].title }}>
            </h2>
            <p className="wow animate__animated" dangerouslySetInnerHTML={{ __html: herosData[2].description }}>
            </p>
          </div>
          <div className="image-section wow animate__animated">
            <Image
              src={herosData[2].image.url}
              alt="picture of the author"
              width={600}
              height={620}
            />
          </div>
        </div>
      </section>
    </>
  )
}

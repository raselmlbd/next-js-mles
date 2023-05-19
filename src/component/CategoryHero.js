import Image from 'next/image';

export default function CategoryHero({herosData}) {
  return (
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
  )
}

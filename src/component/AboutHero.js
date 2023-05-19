import Image from 'next/image';

export default function AboutHero({data: {title, description, image}}) {
  return (
    <section className="wow hero-five">
      <div className="ml-container hero-five-content">
        <div className="info-card">
          <h2 className="wow animate__animated">
            {title}
          </h2>
          <p className="wow animate__animated">
            {description}
          </p>
        </div>
        <div className="image-section wow animate__animated">
          <Image
            src={image?.url}
            alt="picture of the author"
            width={image?.width}
            height={image?.height}
          />
        </div>
      </div>
    </section>
  )
}

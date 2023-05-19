import Image from 'next/image';

export default function CareerHero({data: {title, description, image}}) {
  return (
    <section className="hero-two career">
      <div className="bg wow animate__animated"></div>
      <div className="hero-two-content">
        <div className="image-section wow animate__animated">
          <Image
              src={image.url}
              alt="picture of the author"
              width={image.width}
              height={image.height}
            />
        </div>
        <div className="text-section">
          <h2 className="wow animate__animated">
            {title}
          </h2>
          <p className="wow animate__animated">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

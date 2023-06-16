import Image from 'next/image';
export default function HowWeWorkPageHero({data:{image, description, title}}) {
  return (
    <section className="hero-six">
      <div className="bg wow animate__animated"></div>
      <div className="ml-container hero-six-content">
        <div className="text-section">
          <h2 className="wow animate__animated">{title}y</h2>
          <p className="wow animate__animated">
            {description}
          </p>
        </div>
        <div className="image-section wow animate__animated">
          <Image
            src={image.url}
            alt="picture of the author"
            width={540}
            height={750}
          />
        </div>
      </div>
    </section>
  )
}
